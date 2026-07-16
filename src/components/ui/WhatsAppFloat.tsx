import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowRight } from 'lucide-react'

// Official WhatsApp SVG logo (brand accurate)
const WhatsAppIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

export default function WhatsAppFloat() {
  const [isOpen, setIsOpen] = useState(false)
  const [visible, setVisible] = useState(false)

  const whatsappNumber = '557136218023'
  const messageText = 'Olá! Gostaria de iniciar uma consulta com um especialista.'
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(messageText)}`

  // Appear after 3s with entrance animation
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 3000)
    return () => clearTimeout(t)
  }, [])

  // Auto-open card after 6s on desktop only
  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.innerWidth < 1024) return
    const t = setTimeout(() => setIsOpen(true), 6000)
    return () => clearTimeout(t)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.97 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 select-none"
        >

          {/* ── Card Premium ── */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 12, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.98 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="w-[calc(100vw-3rem)] sm:w-[340px] origin-bottom-right"
                style={{
                  background: 'rgba(255,255,255,0.94)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: '1px solid rgba(123,13,13,0.08)',
                  borderRadius: '22px',
                  boxShadow: '0 8px 40px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.06)',
                }}
              >
                {/* Close */}
                <div className="flex justify-end px-5 pt-4 pb-0">
                  <button
                    onClick={() => setIsOpen(false)}
                    aria-label="Fechar"
                    className="w-6 h-6 rounded-full flex items-center justify-center text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 transition-all duration-200 cursor-pointer"
                  >
                    <X size={13} strokeWidth={2.5} />
                  </button>
                </div>

                {/* Body */}
                <div className="px-6 pb-6 pt-2">
                  {/* WhatsApp badge + title */}
                  <div className="flex items-center gap-2.5 mb-4">
                    <div className="w-9 h-9 rounded-full bg-[#25D366] flex items-center justify-center shadow-sm shadow-[#25D366]/30 shrink-0">
                      <WhatsAppIcon className="w-[18px] h-[18px] text-white" />
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold tracking-[0.08em] uppercase text-[#7B0D0D] leading-none">
                        WhatsApp Oficial
                      </p>
                      <p className="text-[10px] text-neutral-400 font-light mt-0.5 leading-none">
                        Hermano Sousa Advogados
                      </p>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-neutral-100 mb-4" />

                  {/* Headline */}
                  <h3 className="font-display text-[17px] font-semibold text-[#1A1A1A] leading-snug tracking-tight mb-1.5">
                    Atendimento<br />especializado.
                  </h3>
                  <p className="text-[13px] text-neutral-500 font-light leading-relaxed mb-5">
                    Resposta normalmente em poucos minutos durante o horário de atendimento.
                  </p>

                  {/* CTA Button */}
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-full flex items-center justify-between px-5 py-3.5 rounded-[14px] text-white text-[13px] font-semibold tracking-tight transition-all duration-250 cursor-pointer"
                    style={{
                      background: '#7B0D0D',
                      boxShadow: '0 4px 16px rgba(123,13,13,0.25)',
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)'
                      ;(e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 6px 22px rgba(123,13,13,0.32)'
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)'
                      ;(e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 4px 16px rgba(123,13,13,0.25)'
                    }}
                  >
                    <span>Falar com um especialista</span>
                    <ArrowRight size={15} className="opacity-70 group-hover:translate-x-0.5 transition-transform duration-200" />
                  </a>

                  {/* Subtle footer note */}
                  <p className="text-center text-[10px] text-neutral-300 mt-3 font-light tracking-wide">
                    Segunda a Sexta · 8h às 17h
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ── Trigger Button ── */}
          <motion.button
            onClick={() => setIsOpen(prev => !prev)}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            aria-label="Falar pelo WhatsApp"
            id="whatsapp-float-button"
            className="relative flex items-center justify-center cursor-pointer"
            style={{
              width: '54px',
              height: '54px',
              borderRadius: '50%',
              background: '#25D366',
              boxShadow: '0 4px 20px rgba(37,211,102,0.40), 0 2px 8px rgba(0,0,0,0.12)',
            }}
          >
            <WhatsAppIcon className="w-[26px] h-[26px] text-white" />

            {/* Subtle pulse ring when closed */}
            {!isOpen && (
              <span
                className="absolute inset-0 rounded-full animate-ping"
                style={{ background: 'rgba(37,211,102,0.25)' }}
              />
            )}

            {/* Notification dot */}
            {!isOpen && (
              <span
                className="absolute top-0.5 right-0.5 w-3 h-3 rounded-full border-2 border-white"
                style={{ background: '#7B0D0D' }}
              />
            )}
          </motion.button>

        </motion.div>
      )}
    </AnimatePresence>
  )
}
