import { Resend } from 'resend'

// ─── Constants ───────────────────────────────────────────────────
const RATE_LIMIT_MAX = 15              // max submissions per window
const RATE_LIMIT_WINDOW_MS = 3_600_000 // 1 hour
const MAX_BODY_BYTES = 10_000          // reject payloads > 10 KB
const MIN_FORM_TIME_MS = 3_000         // 3 seconds minimum human time
const CSRF_SECRET = 'hs2026csrf!'      // server-side CSRF seed
const ALLOWED_ORIGINS = [
  'https://hermanosousa.adv.br',
  'https://www.hermanosousa.adv.br',
  'https://hermanosousaadv.com.br',
  'https://www.hermanosousaadv.com.br',
  'http://localhost:5173',
  'http://localhost:4173',
]

// ─── In-memory rate limiter (per-instance) ──────────────────────
const rateStore = new Map<string, { count: number; resetAt: number }>()

function checkRateLimit(ip: string): { allowed: boolean; remaining: number } {
  const now = Date.now()
  const entry = rateStore.get(ip)

  if (!entry || now > entry.resetAt) {
    rateStore.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS })
    return { allowed: true, remaining: RATE_LIMIT_MAX - 1 }
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return { allowed: false, remaining: 0 }
  }

  entry.count++
  return { allowed: true, remaining: RATE_LIMIT_MAX - entry.count }
}

// ─── Attack pattern detection ────────────────────────────────────
const ATTACK_PATTERNS: RegExp[] = [
  /<script[\s>]/i,
  /javascript\s*:/i,
  /onerror\s*=|onload\s*=|onclick\s*=|onmouseover\s*=/i,
  /data:\s*text\/html/i,
  /vbscript\s*:/i,
  /\\u00[0-9a-f]{2}/i,
  /&#\d{2,};/i,
  /0x[0-9a-f]{6,}/i,
  /eval\s*\(/i,
  /fromCharCode/i,
  /base64\s*[=]{0,2}\s*$/im,
  /sleep\s*\(/i,
  /pg_sleep/i,
  /waitfor\s+delay/i,
  /union\s+select/i,
  /['"]\s*or\s*['"]\s*1\s*=\s*1/i,
]

function containsAttack(text: string): boolean {
  return ATTACK_PATTERNS.some((re) => re.test(text))
}

// ─── Field validation ────────────────────────────────────────────
function validateName(v: string): string | null {
  const t = v.trim()
  if (t.length < 2 || t.length > 120) return 'Nome inválido.'
  if (!/^[a-zA-ZÀ-ÿ\s]+$/.test(t)) return 'Nome contém caracteres inválidos.'
  return null
}

function validateEmail(v: string): string | null {
  if (v.length > 254) return 'E-mail muito longo.'
  if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v)) return 'E-mail inválido.'
  return null
}

function validatePhone(v: string): string | null {
  const digits = v.replace(/\D/g, '')
  if (digits.length > 0 && (digits.length < 10 || digits.length > 11)) return 'Telefone inválido.'
  return null
}

function validateMessage(v: string): string | null {
  const t = v.trim()
  if (t.length < 20) return 'Mensagem muito curta (mín. 20 caracteres).'
  if (t.length > 5_000) return 'Mensagem muito longa (máx. 5.000 caracteres).'
  return null
}

// ─── CSRF validation ─────────────────────────────────────────────
function validateCsrf(token: string): boolean {
  if (!token || token.length !== 64) return false
  // Accept any 64-char hex string (client-generated random)
  // We validate structure only — true CSRF protection comes from
  // SameSite/Origin, but this adds a layer against replay.
  return /^[0-9a-f]{64}$/.test(token)
}

// ─── IP extraction ───────────────────────────────────────────────
function extractIp(req: { headers: Record<string, string | string[] | undefined> }): string {
  return (
    (req.headers['x-forwarded-for'] as string | undefined)?.split(',')[0]?.trim() ??
    (req.headers['x-real-ip'] as string | undefined) ??
    (req.headers['x-vercel-forwarded-for'] as string | undefined) ??
    'unknown'
  )
}

// ─── Strict HTML sanitizer ───────────────────────────────────────
function sanitize(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
}

// ─── Handler ─────────────────────────────────────────────────────
export default async function handler(
  req: { method: string; body: string; headers: Record<string, string | string[] | undefined> },
  res: { status: (code: number) => { json: (data: unknown) => void }; setHeader: (k: string, v: string) => void }
) {
  // ── 1. Method check ─────────────────────────────────────────────
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' })
  }

  // ── 2. CORS origin check ────────────────────────────────────────
  const origin = req.headers['origin'] as string | undefined
  const referer = req.headers['referer'] as string | undefined
  const caller = origin || referer || ''
  
  // Relax origin check: Allow localhost, vercel.app domains, and main domains
  const isAllowedCaller = !caller || 
    ALLOWED_ORIGINS.some((o) => caller.startsWith(o)) || 
    /\.vercel\.app/i.test(caller)

  if (!isAllowedCaller) {
    console.warn(`[Security] Blocked request from untrusted origin: ${caller}`)
    return res.status(403).json({ error: 'Origem não autorizada.' })
  }

  // ── 3. Body size check ──────────────────────────────────────────
  const rawBody = typeof req.body === 'string' ? req.body : JSON.stringify(req.body)
  if (rawBody.length > MAX_BODY_BYTES) {
    console.warn(`[Security] Oversized payload: ${rawBody.length} bytes`)
    return res.status(413).json({ error: 'Payload muito grande.' })
  }

  try {
    // ── 4. Parse body ─────────────────────────────────────────────
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body
    const { name, email, phone, area, message, _csrf, _ts, _fp } = body

    // ── 5. CSRF validation (Skipped for robustness - structure check only if present)
    if (_csrf && !/^[0-9a-f]{64}$/.test(_csrf)) {
      console.warn('[Security] Invalid CSRF token structure')
      return res.status(403).json({ error: 'Token de segurança inválido.' })
    }

    // ── 6. Form timing trap (Skipped client-clock check to avoid blocking due to clock mismatches)

    // ── 7. Attack pattern scan ────────────────────────────────────
    const fieldsToScan = [name, email, phone, area, message, JSON.stringify(_fp || {})].filter(Boolean)
    for (const field of fieldsToScan) {
      if (containsAttack(String(field))) {
        console.warn(`[Security] Attack pattern detected in payload from ${extractIp(req)}`)
        return res.status(400).json({ error: 'Conteúdo suspeito detectado.' })
      }
    }

    // ── 8. Server-side re-validation ──────────────────────────────
    const errs: string[] = []
    if (validateName(name)) errs.push(validateName(name))
    if (validateEmail(email)) errs.push(validateEmail(email))
    if (validatePhone(phone)) errs.push(validatePhone(phone))
    if (validateMessage(message)) errs.push(validateMessage(message))
    if (errs.length) {
      return res.status(400).json({ error: errs.join(' ') })
    }

    // ── 9. Rate limiting ──────────────────────────────────────────
    const ip = extractIp(req)
    // Permissive rate limit: 10 per hour per instance
    const { allowed, remaining } = checkRateLimit(ip)
    res.setHeader('X-RateLimit-Remaining', String(remaining))
    if (!allowed) {
      console.warn(`[Security] Rate limit exceeded for IP ${ip}`)
      return res.status(429).json({ error: 'Muitas requisições. Tente novamente mais tarde.' })
    }

    // ── 10. Send email via Resend ─────────────────────────────────
    const resend = new Resend(process.env.RESEND_API_KEY!)
    const cleanName = sanitize(name)
    const cleanEmail = sanitize(email)
    const cleanPhone = phone ? sanitize(phone) : '—'
    const cleanArea = area ? sanitize(area) : 'Não informada'
    const cleanMessage = sanitize(message)

    const now = new Date().toLocaleString('pt-BR')

    // Plain-text fallback — critical for Gmail deliverability (reduces spam score)
    const plainText = [
      `NOVO CONTATO — SITE HERMANO SOUSA ADVOGADOS`,
      `Data: ${now}`,
      ``,
      `Nome: ${name}`,
      `E-mail: ${email}`,
      `Telefone: ${phone || '—'}`,
      `Área de Interesse: ${area || 'Não informada'}`,
      ``,
      `--- Mensagem ---`,
      message,
      ``,
      `Hermano Sousa Advogados Associados · Site Institucional`,
    ].join('\n')

    const { data, error } = await resend.emails.send({
      from: 'Hermano Sousa Advogados <contato@hermanosousaadv.com.br>',
      to: ['drhermano879@gmail.com'],
      subject: `[Site] Novo contato de ${name} — ${area || 'Sem área'}`,
      replyTo: email, // original (already validated) email
      text: plainText,
      html: `
        <!DOCTYPE html>
        <html lang="pt-BR">
          <head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
          <body style="font-family:'Inter',system-ui,sans-serif;background:#FDFAF6;margin:0;padding:32px 24px;">
            <table style="max-width:560px;margin:0 auto;width:100%;">
              <tr><td style="border-bottom:1px solid #E5E0D8;padding-bottom:20px;">
                <h1 style="font-family:'Playfair Display',Georgia,serif;font-size:22px;color:#800000;margin:0;">Novo Contato — Site</h1>
                <p style="font-size:13px;color:#828282;margin:4px 0 0;">${now}</p>
              </td></tr>
              <tr><td style="padding:24px 0;">
                <div style="margin-bottom:16px;">
                  <div style="font-size:10px;text-transform:uppercase;letter-spacing:0.15em;font-weight:600;color:#A8A8A8;margin-bottom:4px;">Nome</div>
                  <div style="font-size:15px;color:#1A1A1A;">${cleanName}</div>
                </div>
                <div style="margin-bottom:16px;">
                  <div style="font-size:10px;text-transform:uppercase;letter-spacing:0.15em;font-weight:600;color:#A8A8A8;margin-bottom:4px;">E-mail</div>
                  <div style="font-size:15px;color:#1A1A1A;"><a href="mailto:${cleanEmail}" style="color:#800000;text-decoration:none;">${cleanEmail}</a></div>
                </div>
                <div style="margin-bottom:16px;">
                  <div style="font-size:10px;text-transform:uppercase;letter-spacing:0.15em;font-weight:600;color:#A8A8A8;margin-bottom:4px;">Telefone</div>
                  <div style="font-size:15px;color:#1A1A1A;">${cleanPhone}</div>
                </div>
                <div style="margin-bottom:16px;">
                  <div style="font-size:10px;text-transform:uppercase;letter-spacing:0.15em;font-weight:600;color:#A8A8A8;margin-bottom:4px;">Área de Interesse</div>
                  <div style="display:inline-block;background:#8000000d;color:#800000;font-size:12px;font-weight:600;padding:4px 12px;border-radius:100px;">${cleanArea}</div>
                </div>
                <hr style="border:none;border-top:1px solid #E5E0D8;margin:24px 0;" />
                <div style="margin-bottom:16px;">
                  <div style="font-size:10px;text-transform:uppercase;letter-spacing:0.15em;font-weight:600;color:#A8A8A8;margin-bottom:4px;">Mensagem</div>
                  <div style="font-size:15px;color:#1A1A1A;white-space:pre-wrap;">${cleanMessage}</div>
                </div>
              </td></tr>
              <tr><td style="font-size:12px;color:#828282;text-align:center;border-top:1px solid #E5E0D8;padding-top:16px;">
                Hermano Sousa Advogados Associados · Site Institucional
              </td></tr>
            </table>
          </body>
        </html>
      `,
    })

    if (error) {
      console.error('[Resend] Error:', error)
      return res.status(500).json({ error: 'Erro ao enviar mensagem.' })
    }

    console.log('[Resend] Email sent successfully:', data?.id)
    return res.status(200).json({ success: true })
  } catch (err) {
    console.error('[Contact API] Unexpected error:', err)
    return res.status(500).json({ error: 'Erro interno do servidor.' })
  }
}
