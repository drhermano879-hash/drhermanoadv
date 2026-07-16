import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import logoImg from '@/assets/logo/hsvermelho-semsombra.webp'

/**
 * LUXURY CURTAIN OVERLAY
 * ──────────────────────────────────────────────────────────────────────────────
 * Faixa vinho (#7B0D0D) desliza da esquerda para a direita em ~380ms,
 * revelando a logo centralizada com fade discreto durante o pico da cobertura.
 * Depois recua, revelando a nova página.
 *
 * GPU-only: scaleX + opacity. Respeita prefers-reduced-motion.
 * ──────────────────────────────────────────────────────────────────────────────
 */
export default function LuxuryCurtain() {
  const location = useLocation()
  const [active, setActive] = useState(false)
  const prevPath = useRef(location.pathname)
  const prefersReduced = useReducedMotion()

  useEffect(() => {
    if (location.pathname === prevPath.current) return
    prevPath.current = location.pathname
    if (prefersReduced) return

    setActive(true)
    const t = setTimeout(() => setActive(false), 900)
    return () => clearTimeout(t)
  }, [location.pathname, prefersReduced])

  return (
    <AnimatePresence>
      {active && (
        <>
          {/* ── Faixa principal vinho ── */}
          <motion.div
            key="curtain-wine"
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1, originX: 0 }}
            exit={{ scaleX: 0, originX: 1 }}
            transition={{
              duration: 0.38,
              ease: [0.45, 0, 0.15, 1],
            }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 9998,
              backgroundColor: '#7B0D0D',
              transformOrigin: 'left center',
              pointerEvents: 'none',
            }}
          />

          {/* ── Linha dourada topo ── */}
          <motion.div
            key="curtain-gold"
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1, originX: 0 }}
            exit={{ scaleX: 0, originX: 1 }}
            transition={{
              duration: 0.38,
              ease: [0.45, 0, 0.15, 1],
            }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              height: '2px',
              zIndex: 9999,
              background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.55), transparent)',
              transformOrigin: 'left center',
              pointerEvents: 'none',
            }}
          />

          {/* ── Logo + Wordmark centralizados ── */}
          <motion.div
            key="curtain-logo"
            initial={{ opacity: 0, scale: 0.92, y: 6 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -4 }}
            transition={{
              delay: 0.20,
              duration: 0.24,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 10000,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '14px',
              pointerEvents: 'none',
            }}
          >
            {/* Símbolo HS */}
            <img
              src={logoImg}
              alt="HS"
              style={{
                height: '60px',
                width: 'auto',
                filter: 'brightness(0) invert(1)',
                opacity: 0.95,
                userSelect: 'none',
              }}
              draggable={false}
            />

            {/* Wordmark */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '4px',
            }}>
              <span style={{
                fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
                fontSize: '13px',
                fontWeight: 600,
                letterSpacing: '0.18em',
                color: 'rgba(255,255,255,0.95)',
                lineHeight: 1,
                textTransform: 'uppercase',
              }}>
                Hermano Sousa
              </span>
              <div style={{
                width: '100%',
                height: '1px',
                background: 'rgba(255,255,255,0.18)',
              }} />
              <span style={{
                fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                fontSize: '8px',
                fontWeight: 300,
                letterSpacing: '0.32em',
                color: 'rgba(255,255,255,0.55)',
                lineHeight: 1,
                textTransform: 'uppercase',
              }}>
                Advogados Associados
              </span>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
