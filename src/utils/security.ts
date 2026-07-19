/**
 * ─── Client-side security helpers ─────────────────────────────────
 * Used by CtaFinal to harden form submissions against bots & attacks.
 */

// ─── CSRF Token ───────────────────────────────────────────────────
// Generates a unique token per page-visit that must be returned with
// the form POST. Server validates it to prevent cross-site forgery.
const CSRF_STORAGE_KEY = '_csrf_token'
const CSRF_TIMESTAMP_KEY = '_csrf_ts'

export function generateCsrfToken(): string {
  const exists = sessionStorage.getItem(CSRF_STORAGE_KEY)
  if (exists) return exists

  const array = new Uint8Array(32)
  crypto.getRandomValues(array)
  const token = Array.from(array, (b) => b.toString(16).padStart(2, '0')).join('')
  const ts = Date.now().toString(36)

  sessionStorage.setItem(CSRF_STORAGE_KEY, token)
  sessionStorage.setItem(CSRF_TIMESTAMP_KEY, ts)
  return token
}

export function getCsrfToken(): string {
  return sessionStorage.getItem(CSRF_STORAGE_KEY) || generateCsrfToken()
}

// ─── Form Timing Trap ─────────────────────────────────────────────
// Records when the section rendered. Bots submit instantly;
// humans take at least 3-4 seconds to fill a real form.
let _mountTime = 0

export function recordFormMount(): void {
  _mountTime = performance.now()
}

export function getFormElapsedMs(): number {
  return performance.now() - _mountTime
}

export function isTooFast(minSeconds = 3): boolean {
  return getFormElapsedMs() < minSeconds * 1000
}

// ─── Lightweight Browser Fingerprint ─────────────────────────────
// Gathers basic env clues that headless / bot browsers often lack.
export function getBrowserFingerprint(): Record<string, unknown> {
  const nav = navigator

  return {
    ua: nav.userAgent?.slice(0, 200) ?? '',
    lang: nav.language ?? '',
    langs: (nav.languages as string[] | undefined)?.join(',') ?? '',
    plat: nav.platform ?? '',
    hwConcurrency: nav.hardwareConcurrency ?? null,
    hwMemory: ((navigator as any).deviceMemory as number | undefined) ?? null,
    touch: 'maxTouchPoints' in nav ? nav.maxTouchPoints : -1,
    webdriver: (nav as any).webdriver ?? null,
    pdfViewerEnabled: (nav as any).pdfViewerEnabled ?? null,
  }
}

// ─── Suspicious payload patterns (client-side pre-check) ──────────
const SUSPICIOUS_PATTERNS = [
  /<script[\s>]/i,
  /javascript\s*:/i,
  /onerror\s*=/i,
  /onload\s*=/i,
  /onclick\s*=/i,
  /onmouseover\s*=/i,
  /data:\s*text\/html/i,
  /vbscript\s*:/i,
  /alert\s*\(/i,
  /\\u00/i,          // unicode-encoded attacks
  /&#\d{2,};/i,      // HTML entities used for obfuscation
  /0x[0-9a-f]{6,}/i, // hex-encoded payloads
  /eval\s*\(/i,
  /fromCharCode/i,
  /base64/i,
]

export function containsSuspiciousPayload(text: string): boolean {
  return SUSPICIOUS_PATTERNS.some((re) => re.test(text))
}
