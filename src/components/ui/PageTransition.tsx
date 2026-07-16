import { motion } from 'framer-motion'
import { ReactNode } from 'react'

// ─────────────────────────────────────────────────────────────────────────────
// TRANSIÇÕES PREMIUM — Hermano Sousa Advogados
// Filosofia: Apple · Linear · Stripe · Raycast
// Regras: opacity + transform APENAS | sem bounce | sem elastic | GPU-only
// ─────────────────────────────────────────────────────────────────────────────

// Easings personalizados — nunca use "ease-in-out" padrão
const ease = {
  /** Desaceleração natural — entrada suave */
  out: [0.16, 1, 0.3, 1] as const,
  /** Aceleração natural — saída rápida */
  in: [0.7, 0, 0.84, 0] as const,
  /** Equilíbrio elegante — movimentos neutros */
  inOut: [0.45, 0, 0.15, 1] as const,
}

// ─── Variantes de transição ───────────────────────────────────────────────────

/**
 * SILK FADE — padrão do sistema
 * Página surge suavemente de baixo com opacidade.
 * Análoga à transição de telas do macOS.
 */
export const silkFadeVariants = {
  initial: {
    opacity: 0,
    y: 14,
    scale: 0.99,
  },
  enter: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: ease.out,
    },
  },
  exit: {
    opacity: 0,
    y: -8,
    scale: 1.004,
    transition: {
      duration: 0.28,
      ease: ease.in,
    },
  },
}

/**
 * SOFT ZOOM — alternativa para páginas de detalhe
 * Página entra em escala levemente menor e expande.
 * Análoga ao zoom de cards do iPadOS.
 */
export const softZoomVariants = {
  initial: {
    opacity: 0,
    scale: 0.97,
  },
  enter: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: ease.out,
    },
  },
  exit: {
    opacity: 0,
    scale: 1.015,
    transition: {
      duration: 0.25,
      ease: ease.in,
    },
  },
}

/**
 * PAGE DISSOLVE — para transições horizontais (ex: navegação lateral)
 * Dissolução pura via opacidade. O mais elegante de todos.
 */
export const dissolveVariants = {
  initial: { opacity: 0 },
  enter: {
    opacity: 1,
    transition: { duration: 0.6, ease: ease.out },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.25, ease: ease.in },
  },
}

// ─── Componente Principal ─────────────────────────────────────────────────────

type TransitionVariant = 'silkFade' | 'softZoom' | 'dissolve'

interface PageTransitionProps {
  children: ReactNode
  variant?: TransitionVariant
  className?: string
}

const variantsMap = {
  silkFade: silkFadeVariants,
  softZoom: softZoomVariants,
  dissolve: dissolveVariants,
}

export default function PageTransition({
  children,
  variant = 'silkFade',
  className = '',
}: PageTransitionProps) {
  const chosen = variantsMap[variant]

  return (
    <motion.div
      variants={chosen}
      initial="initial"
      animate="enter"
      exit="exit"
      className={className}
      // GPU acceleration garantida — nunca usar layout ou transform 3D
      style={{ willChange: 'opacity, transform' }}
    >
      {children}
    </motion.div>
  )
}
