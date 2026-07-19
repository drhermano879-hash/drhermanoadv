import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLocation, useNavigate } from 'react-router-dom'
import logoImg from '@/assets/logo/hsvermelho-semsombra.webp'

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Áreas', href: '#areas' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Equipe', href: '#equipe' },
  // { label: 'Estrutura', href: '#escritorio' },
  { label: 'Localização', href: '#localizacao' },
  { label: 'Contato', href: '#contato' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)
  const location = useLocation()
  const navigate = useNavigate()

  const whatsappNumber = '557136218023'
  const messageText = 'Olá! Gostaria de iniciar uma consulta com um especialista.'
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(messageText)}`

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const scrollTo = (href: string) => {
    setMenuOpen(false)
    if (location.pathname === '/') {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      sessionStorage.setItem('homeScrollTarget', href)
      navigate('/')
    }
  }

  return (
    <header className="fixed top-0 inset-x-0 z-50 transition-all duration-500">
      {/* Topbar Institucional */}
      <div
        className={`bg-[#4D0000] w-full text-white overflow-hidden transition-all duration-300 flex items-center justify-end gap-6 px-8 lg:px-12 select-text ${
          menuOpen ? 'h-0 opacity-0' : 'h-10 opacity-100 border-b border-white/[0.03]'
        }`}
      >
        <div className="flex items-center gap-2 text-[10px] md:text-xs font-light tracking-wide text-neutral-300">
          <svg className="w-3.5 h-3.5 text-neutral-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <rect width="20" height="16" x="2" y="4" rx="2"/>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
          </svg>
          <a href="mailto:advogadohermano@gmail.com" className="hover:text-white transition-colors">advogadohermano@gmail.com</a>
        </div>
        <div className="flex items-center gap-2 text-[10px] md:text-xs font-light tracking-wide text-neutral-300">
          <span className="flex h-1.5 w-1.5 relative shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500"></span>
          </span>
          <span>
            <span className="font-semibold text-red-400 tracking-wider">Urgência</span> Plantão 24h: <a href="tel:+557136218023" className="hover:text-white transition-colors font-medium">(71) 3621-8023</a>
          </span>
        </div>
      </div>
      {/* Fullscreen Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', ease: 'easeInOut', duration: 0.25 }}
            className="fixed inset-0 z-50 bg-[#1A0000] flex flex-col justify-between px-8 pt-28 pb-12 w-full h-screen"
          >
            {/* Navigation links container */}
            <nav className="flex flex-col gap-5 mt-6 overflow-y-auto max-h-[60vh] pr-4">
              {navLinks.map((link, idx) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
                  className="font-display text-2xl text-[#F9F6F1]/80 hover:text-white hover:pl-2 tracking-wide block transition-all duration-300"
                >
                  <span className="text-[10px] font-sans tracking-[0.2em] text-[#800000] mr-4 font-semibold">
                    0{idx + 1}
                  </span>
                  {link.label}
                </a>
              ))}

              {/* CTA inside mobile menu */}
              <div className="mt-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex items-center justify-center bg-[#800000] hover:bg-[#4D0000] text-white text-xs tracking-[0.15em] uppercase font-semibold px-8 py-3.5 rounded-xl transition-all duration-300 w-full"
                >
                  Fale com o especialista
                </a>
              </div>
            </nav>

            {/* Footer info inside mobile menu */}
            <div className="border-t border-[#F9F6F1]/10 pt-6">
              <p className="text-[9px] tracking-[0.2em] uppercase text-[#A8A8A8] mb-2 font-medium">Atendimento</p>
              <a
                href="tel:+557136218023"
                className="block text-[#F9F6F1]/70 hover:text-white text-sm font-sans mb-1 transition-colors"
              >
                (71) 3621-8023
              </a>
              <a
                href="mailto:advogadohermano@gmail.com"
                className="block text-[#F9F6F1]/70 hover:text-white text-sm font-sans transition-colors"
              >
                advogadohermano@gmail.com
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full-width Navbar Background Container */}
      <div className={`transition-all duration-500 ${
        menuOpen
          ? 'bg-transparent border-transparent shadow-none'
          : 'bg-white/85 backdrop-blur-lg border-b border-neutral-200/60 shadow-md shadow-black/[0.04]'
      }`}>
        <div className="relative z-50 max-w-7xl mx-auto px-8 lg:px-12">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <a
              href="#inicio"
              onClick={(e) => { e.preventDefault(); scrollTo('#inicio') }}
              aria-label="Hermano Sousa Advogados — Início"
              className="flex items-center gap-3 flex-shrink-0"
            >
              <img src={logoImg} alt="HS" className="h-10 md:h-12 w-auto object-contain" />
              <div className="flex flex-col select-none">
                <span className={`font-display text-sm md:text-base font-semibold tracking-wide leading-tight transition-colors duration-500 ${menuOpen ? 'text-white' : 'text-[#800000]'}`}>
                  HERMANO SOUSA
                </span>
                <div className={`h-[1px] w-full my-0.5 transition-colors duration-500 ${menuOpen ? 'bg-white/20' : 'bg-[#660000]/20'}`} />
                <span className={`font-sans text-[7px] md:text-[8px] tracking-[0.2em] font-light leading-none transition-colors duration-500 ${menuOpen ? 'text-neutral-400' : 'text-[#660000]'}`}>
                  ADVOGADOS ASSOCIADOS
                </span>
              </div>
            </a>

            {/* Desktop nav */}
            <nav 
              className="hidden lg:flex items-center gap-8" 
              aria-label="Navegação principal"
              onMouseLeave={() => setHoveredIdx(null)}
            >
              {navLinks.map((link, idx) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  className={`relative py-2 text-[#2D2D2D] hover:text-[#800000] text-xs tracking-wider font-semibold transition-all duration-300 ${
                    hoveredIdx !== null && hoveredIdx !== idx ? 'opacity-30' : 'opacity-100'
                  }`}
                >
                  {link.label}
                  {hoveredIdx === idx && (
                    <motion.span
                      layoutId="navHoverLine"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#800000] rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#800000] hover:bg-[#4D0000] text-white text-xs tracking-wider font-medium px-5 py-2.5 rounded-xl shadow-sm hover:shadow hover:scale-[1.02] active:scale-100 transition-all duration-300 cursor-pointer"
                id="header-cta"
              >
                Fale com o especialista
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden flex flex-col gap-[5px] p-2 relative z-50"
              aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              <span className={`block w-6 h-px transition-all duration-500 ${menuOpen ? 'bg-[#F9F6F1] rotate-45 translate-y-[6px]' : 'bg-[#2D2D2D]'}`} />
              <span className={`block w-6 h-px transition-all duration-500 ${menuOpen ? 'bg-[#F9F6F1] opacity-0' : 'bg-[#2D2D2D]'}`} />
              <span className={`block w-6 h-px transition-all duration-500 ${menuOpen ? 'bg-[#F9F6F1] -rotate-45 -translate-y-[6px]' : 'bg-[#2D2D2D]'}`} />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
