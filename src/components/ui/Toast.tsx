import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, X } from 'lucide-react'

interface ToastProps {
  show: boolean
  message: string
  submessage?: string
  onClose: () => void
  duration?: number
}

export default function Toast({
  show,
  message,
  submessage,
  onClose,
  duration = 5000,
}: ToastProps) {
  useEffect(() => {
    if (!show) return
    const timer = setTimeout(onClose, duration)
    return () => clearTimeout(timer)
  }, [show, duration, onClose])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed top-28 right-6 z-[60] max-w-sm w-[calc(100vw-3rem)]"
        >
          <div
            className="bg-white rounded-2xl border border-neutral-200/60 shadow-xl shadow-black/[0.04] p-5 flex items-start gap-4"
            role="alert"
            aria-live="polite"
          >
            {/* Icon */}
            <div className="w-9 h-9 rounded-full bg-[#800000]/5 flex items-center justify-center shrink-0">
              <CheckCircle size={18} className="text-[#800000]" />
            </div>

            {/* Text */}
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-[#1A1A1A]">{message}</p>
              {submessage && (
                <p className="text-xs text-neutral-500 font-light mt-0.5 leading-relaxed">
                  {submessage}
                </p>
              )}
            </div>

            {/* Close */}
            <button
              onClick={onClose}
              className="shrink-0 p-1 text-neutral-400 hover:text-neutral-700 transition-colors cursor-pointer rounded-lg hover:bg-neutral-100"
              aria-label="Fechar notificação"
            >
              <X size={14} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
