import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

import type { IncomingMessage, ServerResponse } from 'http'

// ─── Dev-only local API handler ───────────────────────────────────
// Vercel functions (api/*) are not served by `vite dev`.
// This plugin provides a local equivalent for development.
function localApiPlugin(apiKey?: string) {
  return {
    name: 'local-api',
    configureServer(server: { middlewares: { use: (path: string, handler: (req: IncomingMessage, res: ServerResponse, next: () => void) => void | Promise<void>) => void } }) {
      server.middlewares.use('/api/contact', async (req, res) => {
        if (req.method !== 'POST') {
          res.statusCode = 405
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ error: 'Método não permitido' }))
          return
        }

        try {
          // Read body
          const chunks: Buffer[] = []
          for await (const chunk of req) {
            chunks.push(chunk as Buffer)
          }
          const body = JSON.parse(Buffer.concat(chunks).toString())
          const { name, email, phone, area, message } = body

          // ── Re-validate (same rules as api/contact.ts) ──────────
          const invalid: string[] = []
          if (!name || name.trim().length < 2) invalid.push('Nome inválido.')
          if (!email || !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) invalid.push('E-mail inválido.')
          if (!message || message.trim().length < 20) invalid.push('Mensagem muito curta.')
          if (invalid.length) {
            res.statusCode = 400
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ error: invalid.join(' ') }))
            return
          }

          // ── API key para desenvolvimento local ─────────────────
          if (!apiKey) {
            console.error('[Local API] RESEND_API_KEY não encontrada no .env!')
            res.statusCode = 500
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ error: 'Chave da API não configurada. Crie um arquivo .env na raiz do projeto com RESEND_API_KEY.' }))
            return
          }

          console.log('[Local API] Usando chave Resend do arquivo .env')

          const { Resend } = await import('resend')
          const resend = new Resend(apiKey)

          const result = await resend.emails.send({
            from: 'Contato Site <contato@hermanosousaadv.com.br>',
            to: ['drhermano879@gmail.com'],
            subject: `Novo contato do site — ${area || 'Sem área definida'}`,
            replyTo: email,
            html: `<h2>Novo Contato</h2><p><strong>Nome:</strong> ${name}</p><p><strong>E-mail:</strong> ${email}</p><p><strong>Telefone:</strong> ${phone || '—'}</p><p><strong>Área:</strong> ${area || 'Não informada'}</p><hr /><p>${message}</p>`,
          })

          console.log('[Local API] Resend response:', JSON.stringify(result))

          if (result?.error) {
            console.error('[Local API] Resend error:', result.error)
            res.statusCode = 500
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ error: 'Erro ao enviar mensagem.' }))
            return
          }

          res.statusCode = 200
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ success: true }))
        } catch (err) {
          console.error('[Local API] Error:', err)
          res.statusCode = 500
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ error: 'Erro interno do servidor.' }))
        }
      })
    },
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [
      react(),
      tailwindcss(),
      localApiPlugin(env.RESEND_API_KEY),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  }
})
