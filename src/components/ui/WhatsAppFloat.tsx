import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X } from 'lucide-react'

export default function WhatsAppFloat() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasBeenClosed, setHasBeenClosed] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)
  
  const whatsappNumber = '5500000000000'
  const messageText = 'Olá! Gostaria de iniciar uma consulta com um especialista.'
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(messageText)}`

  useEffect(() => {
    const isMobile = window.innerWidth < 768

    if (!isMobile) {
      // Desktop: Automatically open the chatbox after 5 seconds
      const timer = setTimeout(() => {
        setIsOpen(true)
      }, 5000)
      return () => clearTimeout(timer)
    } else {
      // Mobile: Automatically show tooltip after 5 seconds for 3 seconds
      const timer = setTimeout(() => {
        setShowTooltip(true)
        const hideTimer = setTimeout(() => {
          setShowTooltip(false)
        }, 3000)
        return () => clearTimeout(hideTimer)
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleButtonClick = () => {
    if (hasBeenClosed) {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
    } else {
      setIsOpen(prev => !prev)
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4 select-none">
      
      {/* Mini Janela de Chat (WhatsApp Expandido) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="w-[calc(100vw-3rem)] sm:w-[360px] bg-white rounded-2xl shadow-2xl border border-black/[0.04] overflow-hidden origin-bottom-right"
          >
            {/* Cabeçalho do Chat */}
            <div className="bg-[#5C1228] px-5 py-4 flex items-center justify-between text-white">
              <div className="flex items-center gap-3">
                <div className="relative w-9 h-9 rounded-full bg-white/10 flex items-center justify-center border border-white/10">
                  <MessageCircle size={18} className="text-white" fill="currentColor" />
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#25D366] border-2 border-[#5C1228]" />
                </div>
                <div>
                  <h4 className="font-display text-xs sm:text-sm font-semibold tracking-wide leading-tight">
                    Hermano Sousa Advogados
                  </h4>
                  <p className="text-[10px] text-white/70 font-light flex items-center gap-1.5 mt-0.5">
                    Atendimento Especializado
                  </p>
                </div>
              </div>
              <button 
                onClick={(e) => {
                  e.stopPropagation()
                  setIsOpen(false)
                  setHasBeenClosed(true)
                }}
                className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors cursor-pointer text-white/80 hover:text-white"
                aria-label="Fechar chat"
              >
                <X size={15} />
              </button>
            </div>

            {/* Corpo do Chat */}
            <div className="p-5 bg-[#FDFAF6]/60 space-y-4">
              <div className="flex flex-col gap-1 max-w-[85%] select-text">
                <span className="text-[9px] text-neutral-400 font-light ml-1">Hermano Sousa Advogados</span>
                <div className="bg-[#F3EFE9] text-[#2D2D2D] text-xs sm:text-[13px] leading-relaxed p-3.5 rounded-2xl rounded-tl-sm shadow-sm font-light">
                  Olá, precisa de ajuda com seu caso? Fale diretamente com um de nossos especialistas.
                </div>
              </div>
            </div>

            {/* Botão de Ação / Iniciar Conversa */}
            <div className="px-5 pb-5 pt-2 bg-[#FDFAF6]/60">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-[#5C1228] hover:bg-[#7A1835] text-white font-medium text-xs sm:text-sm rounded-xl flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-100"
              >
                <MessageCircle size={16} fill="currentColor" />
                Falar com Especialista
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botão Flutuante (Ícone Circular Verde) */}
      <motion.button
        onClick={handleButtonClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BD5C] shadow-lg shadow-black/25 flex items-center justify-center cursor-pointer hover:scale-110 active:scale-100 transition-transform duration-300 group"
        aria-label="Falar pelo WhatsApp"
        id="whatsapp-float-button"
      >
        <MessageCircle size={26} className="text-white" fill="currentColor" />
        
        {/* Efeito pulse contínuo quando a janela de chat estiver fechada */}
        {!isOpen && (
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
        )}
        
        {/* Tooltip flutuante de hover */}
        <span
          className={`
            absolute right-16 bg-[#2D2D2D] text-white text-xs font-medium px-3 py-2 rounded-sm whitespace-nowrap
            transition-all duration-300 pointer-events-none shadow-lg
            ${(hovered || showTooltip) && !isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-3'}
          `}
        >
          Falar com Especialista
        </span>
      </motion.button>

    </div>
  )
}
