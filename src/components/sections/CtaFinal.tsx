import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, AlertCircle, Lock, ChevronDown, Phone, MessageSquare, Mail, Clock } from 'lucide-react'

interface FormData { name: string; email: string; phone: string; area: string; message: string }
interface FormErrors { name?: string; email?: string; phone?: string; message?: string }

// Sanitize strings to prevent HTML and script injection (XSS defense)
function sanitizeInput(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;')
    .trim()
}

function validate(d: FormData): FormErrors {
  const e: FormErrors = {}
  
  // Strictly letters and spaces, min 3 chars
  const nameTrimmed = d.name.trim()
  if (!nameTrimmed || nameTrimmed.length < 3) {
    e.name = 'Informe seu nome completo.'
  } else if (!/^[a-zA-ZÀ-ÿ\s]+$/.test(nameTrimmed)) {
    e.name = 'O nome deve conter apenas letras e espaços.'
  }

  // Strict email regex validation
  if (!d.email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
    e.email = 'E-mail inválido.'
  }

  // Phone number length (must be 10 or 11 numeric digits after cleaning)
  if (d.phone.length < 10 || d.phone.length > 11) {
    e.phone = 'Telefone inválido. Informe DDD + número (10 ou 11 dígitos).'
  }

  // Message size limit
  if (!d.message.trim() || d.message.trim().length < 20) {
    e.message = 'Descreva brevemente sua situação (mín. 20 caracteres).'
  }

  return e
}

const areas = [
  'Direito Previdenciário',
  'Direito Trabalhista',
  'Direito do Consumidor',
  'Direito de Família',
  'Direito Civil',
  'Direito Empresarial',
  'Outro'
]

const inputClass = (err?: string) =>
  `w-full px-4 py-3.5 text-sm bg-neutral-50 border rounded-xl focus:bg-white focus:outline-none focus:ring-2 transition-all duration-200 ${
    err 
      ? 'border-red-400 text-red-900 focus:border-red-400 focus:ring-red-400/10 placeholder:text-red-300' 
      : 'border-neutral-200/60 text-[#1A1A1A] focus:border-[#800000] focus:ring-[#800000]/10 placeholder:text-neutral-400/80'
  }`

export default function CtaFinal() {
  const formRef = useRef<HTMLFormElement>(null)
  const [form, setForm] = useState<FormData>({ name: '', email: '', phone: '', area: '', message: '' })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [honeypot, setHoneypot] = useState('')

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setForm(p => ({ ...p, [name]: value }))
    if (errors[name as keyof FormErrors]) setErrors(p => ({ ...p, [name]: undefined }))
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Silent bot block via Honeypot check
    if (honeypot.trim()) {
      setIsSubmitting(true)
      await new Promise(r => setTimeout(r, 1000))
      setSubmitted(true)
      setIsSubmitting(false)
      return
    }

    // Sanitize and clean inputs before validation
    const sanitizedForm: FormData = {
      name: sanitizeInput(form.name),
      email: sanitizeInput(form.email),
      phone: form.phone.replace(/\D/g, ''), // Keep numeric digits only
      area: sanitizeInput(form.area),
      message: sanitizeInput(form.message)
    }

    const errs = validate(sanitizedForm)
    if (Object.keys(errs).length) { setErrors(errs); return }

    setIsSubmitting(true)
    await new Promise(r => setTimeout(r, 1400))
    setSubmitted(true)
    setIsSubmitting(false)
  }

  return (
    <section
      id="contato"
      className="py-28 lg:py-36 bg-[#FDFAF6] overflow-hidden"
      aria-labelledby="contato-titulo"
    >
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        
        {/* ─── CENTRED SECTION HEADER ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20 max-w-3xl mx-auto"
        >
          <p className="text-[11px] tracking-[0.3em] uppercase text-[#800000] font-semibold mb-5">
            Contato
          </p>
          <h2
            id="contato-titulo"
            className="font-display text-4xl lg:text-5xl font-medium text-[#1A1A1A] leading-[1.15] mb-6"
          >
            Precisa de orientação jurídica?
          </h2>
          <p className="text-neutral-500 text-sm sm:text-base leading-relaxed font-light">
            Estamos prontos para analisar sua situação com atenção e profundidade. O primeiro passo é simples — fale conosco.
          </p>
        </motion.div>

        {/* ─── GRID CONTENT ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* ─── LEFT COLUMN (Institutional Details, Exposed Style) ─── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col gap-8 select-text"
          >
            {/* Contact details list */}
            <div className="flex flex-col gap-6">
              {[
                {
                  icon: <Phone size={16} className="text-[#800000]" />,
                  label: 'TELEFONE',
                  value: '(71) 3621-8023',
                  href: 'tel:+557136218023',
                },
                {
                  icon: <MessageSquare size={16} className="text-[#800000]" />,
                  label: 'WHATSAPP',
                  value: '(71) 3621-8023',
                  href: 'https://wa.me/557136218023',
                },
                {
                  icon: <Mail size={16} className="text-[#800000]" />,
                  label: 'E-MAIL',
                  value: 'advogadohermano@gmail.com',
                  href: 'mailto:advogadohermano@gmail.com',
                },
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-5 group"
                >
                  <div className="w-10 h-10 border border-neutral-200/60 rounded-xl flex items-center justify-center bg-white shadow-sm group-hover:border-[#800000] transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <p className="tracking-wider text-[10px] font-semibold text-neutral-400">{item.label}</p>
                    <p className="text-sm text-neutral-700 font-light group-hover:text-[#800000] transition-colors duration-300">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Hours info */}
            <div className="border-t border-neutral-200/80 pt-6 flex items-start gap-5">
              <div className="w-10 h-10 border border-neutral-200/60 rounded-xl flex items-center justify-center bg-white shadow-sm">
                <Clock size={16} className="text-[#800000]" />
              </div>
              <div>
                <p className="tracking-wider text-[10px] font-semibold text-neutral-400">HORÁRIO</p>
                <p className="text-sm text-neutral-700 font-light mt-0.5">Segunda a Sexta · 8h às 17h</p>
              </div>
            </div>
          </motion.div>

          {/* ─── RIGHT COLUMN (Floating Form Card) ─── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 w-full"
          >
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-neutral-200/40">
              {submitted ? (
                <div className="flex flex-col items-center text-center gap-6 py-12">
                  <CheckCircle size={36} className="text-[#800000]" />
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-[#1A1A1A] mb-2">Mensagem recebida.</h3>
                    <p className="text-neutral-500 text-sm leading-relaxed font-light">Retornaremos em até 24 horas úteis.</p>
                  </div>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', area: '', message: '' }) }}
                    className="text-sm text-[#800000] hover:underline cursor-pointer"
                  >
                    Enviar nova mensagem
                  </button>
                </div>
              ) : (
                <form ref={formRef} onSubmit={onSubmit} noValidate className="flex flex-col gap-5">
                  {/* Honeypot field for bot spam blocking */}
                  <input
                    type="text"
                    name="b_honey"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    style={{ display: 'none' }}
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  <div className="mb-2">
                    <h3 className="font-display text-2xl font-semibold text-[#1A1A1A] mb-1">Entrar em contato</h3>
                    <p className="text-[#888] text-sm font-light">Preencha o formulário e retornaremos em breve.</p>
                  </div>

                  {/* Name */}
                  <div>
                    <input
                      id="name" name="name" type="text"
                      value={form.name} onChange={onChange}
                      placeholder="Nome completo"
                      className={inputClass(errors.name)}
                      aria-label="Nome completo" aria-required="true"
                    />
                    {errors.name && <p className="mt-1 text-xs text-red-500 flex items-center gap-1 pl-1"><AlertCircle size={11}/>{errors.name}</p>}
                  </div>

                  {/* Email + Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <input
                        id="email" name="email" type="email"
                        value={form.email} onChange={onChange}
                        placeholder="E-mail"
                        className={inputClass(errors.email)}
                        aria-label="E-mail" aria-required="true"
                      />
                      {errors.email && <p className="mt-1 text-xs text-red-500 pl-1">{errors.email}</p>}
                    </div>
                    <div>
                      <input
                        id="phone" name="phone" type="tel"
                        value={form.phone} onChange={onChange}
                        placeholder="Telefone"
                        className={inputClass(errors.phone)}
                        aria-label="Telefone" aria-required="true"
                      />
                      {errors.phone && <p className="mt-1 text-xs text-red-500 pl-1">{errors.phone}</p>}
                    </div>
                  </div>

                  {/* Area */}
                  <div className="relative">
                    <select
                      id="area" name="area"
                      value={form.area} onChange={onChange}
                      className={`${inputClass()} appearance-none pr-10`}
                      aria-label="Área de interesse"
                    >
                      <option value="">Área de interesse</option>
                      {areas.map(a => <option key={a} value={a}>{a}</option>)}
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-400">
                      <ChevronDown size={16} />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <textarea
                      id="message" name="message"
                      value={form.message} onChange={onChange}
                      placeholder="Descreva brevemente sua situação..."
                      className={`${inputClass(errors.message)} h-36 resize-none`}
                      aria-label="Mensagem" aria-required="true"
                    />
                    {errors.message && <p className="mt-1 text-xs text-red-500 flex items-center gap-1 pl-1"><AlertCircle size={11}/>{errors.message}</p>}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2.5 bg-[#800000] hover:bg-[#4D0000] disabled:bg-[#800000]/50 text-white text-[13px] tracking-[0.08em] uppercase font-semibold py-4 rounded-xl transition-colors duration-300 mt-2 cursor-pointer shadow-sm hover:shadow"
                    id="form-submit-btn"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                        </svg>
                        <span>Processando envio seguro...</span>
                      </div>
                    ) : (
                      <><Send size={13} />Enviar mensagem</>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-1.5 text-neutral-400 mt-2 select-none pointer-events-none">
                    <Lock size={12} className="shrink-0" />
                    <p className="text-xs">
                      Informações tratadas com total confidencialidade.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
