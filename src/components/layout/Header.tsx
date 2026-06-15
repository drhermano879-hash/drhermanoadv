import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLocation, useNavigate } from 'react-router-dom'
import LogoPlaceholder from '@/assets/LogoPlaceholder'

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Áreas', href: '#areas' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Equipe', href: '#equipe' },
  { label: 'Estrutura', href: '#escritorio' },
  { label: 'Localização', href: '#localizacao' },
  { label: 'Contato', href: '#contato' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)
  const location = useLocation()
  const navigate = useNavigate()

  const whatsappNumber = '5571999999999'
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
      navigate('/')
      setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        menuOpen
          ? 'bg-transparent border-transparent shadow-none'
          : 'bg-white/70 backdrop-blur-md border-b border-neutral-200/40 shadow-sm shadow-black/[0.01]'
      }`}
    >
      {/* Topbar Institucional */}
      <div
        className={`bg-[#3B0A1A] w-full text-white overflow-hidden transition-all duration-300 flex items-center justify-end gap-6 px-8 lg:px-12 select-text ${
          menuOpen ? 'h-0 opacity-0' : 'h-10 opacity-100 border-b border-white/[0.03]'
        }`}
      >
        <div className="flex items-center gap-2 text-[10px] md:text-xs font-light tracking-wide text-neutral-300">
          <svg className="w-3.5 h-3.5 text-neutral-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
          </svg>
          <a href="mailto:contato@hermanosousa.adv.br" className="hover:text-white transition-colors">contato@hermanosousa.adv.br</a>
        </div>
        <div className="flex items-center gap-2 text-[10px] md:text-xs font-light tracking-wide text-neutral-300">
          <span className="flex h-1.5 w-1.5 relative shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500"></span>
          </span>
          <span>
            <span className="font-semibold text-red-400 tracking-wider">Urgência</span> Plantão 24h: <a href="tel:+5571999999999" className="hover:text-white transition-colors font-medium">(71) 99999-9999</a>
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
            className="fixed inset-0 z-50 bg-[#0D0207] flex flex-col justify-between px-8 pt-28 pb-12 w-full h-screen"
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
                  <span className="text-[10px] font-sans tracking-[0.2em] text-[#8B1A3A] mr-4 font-semibold">
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
                  className="inline-flex items-center justify-center bg-[#5C1228] hover:bg-[#3B0A1A] text-white text-xs tracking-[0.15em] uppercase font-semibold px-8 py-3.5 rounded-xl transition-all duration-300 w-full"
                >
                  Fale com o especialista
                </a>
              </div>
            </nav>

            {/* Footer info inside mobile menu */}
            <div className="border-t border-[#F9F6F1]/10 pt-6">
              <p className="text-[9px] tracking-[0.2em] uppercase text-[#A8A8A8] mb-2 font-medium">Atendimento</p>
              <a
                href="tel:+5571999999999"
                className="block text-[#F9F6F1]/70 hover:text-white text-sm font-sans mb-1 transition-colors"
              >
                +55 (71) 99999-9999
              </a>
              <a
                href="mailto:contato@hermanosousa.adv.br"
                className="block text-[#F9F6F1]/70 hover:text-white text-sm font-sans transition-colors"
              >
                contato@hermanosousa.adv.br
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-50 max-w-7xl mx-auto px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <a
            href="#inicio"
            onClick={(e) => { e.preventDefault(); scrollTo('#inicio') }}
            aria-label="Hermano Sousa Advogados — Início"
            className="flex-shrink-0"
          >
            <LogoPlaceholder variant={menuOpen ? 'light' : 'dark'} className="h-12 w-auto transition-colors duration-500" />
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
                className={`relative py-2 text-neutral-700 hover:text-[#5C1228] text-xs tracking-wider font-medium transition-all duration-300 ${
                  hoveredIdx !== null && hoveredIdx !== idx ? 'opacity-40' : 'opacity-100'
                }`}
              >
                {link.label}
                {hoveredIdx === idx && (
                  <motion.span
                    layoutId="navHoverLine"
                    className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#5C1228]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#5C1228] hover:bg-[#3B0A1A] text-white text-xs tracking-wider font-medium px-5 py-2.5 rounded-xl shadow-sm hover:shadow hover:scale-[1.02] active:scale-100 transition-all duration-300 cursor-pointer"
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
    </header>
  )
}
