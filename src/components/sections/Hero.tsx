import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, MapPin } from 'lucide-react'
import logoImg from '@/assets/logo/hsvermelho-semsombra.webp'
import bgHeroImg from '@/assets/background-hero.webp'

export default function Hero() {
  const [isLogoHovered, setIsLogoHovered] = useState(false)

  const whatsappNumber = '557136218023'
  const messageText = 'Olá! Gostaria de iniciar uma consulta com um especialista.'
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(messageText)}`

  return (
    <section
      id="inicio"
      className="min-h-screen relative flex items-center bg-[#FDFAF6] overflow-hidden pt-28 lg:pt-32"
      aria-label="Apresentação do Escritório"
    >
      {/* ─── LEFT CONTENT (60% width on large screens, 100% on mobile) ─── */}
      <div className="relative z-10 w-full lg:w-[60%] flex flex-col justify-center px-6 sm:px-12 md:px-16 lg:px-20 xl:px-28 py-20 lg:py-0">
        
        {/* Main H1 - Grife Style */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[#1A1A1A] mb-8"
        >
          <span className="block text-[3rem] sm:text-[3.8rem] md:text-[4.4rem] lg:text-[4.6rem] xl:text-[5.4rem] font-medium leading-[1.08] tracking-[-0.03em]">
            Hermano Sousa
          </span>
          <span className="block text-xs sm:text-sm font-sans tracking-[0.35em] uppercase text-[#800000] font-semibold mt-4">
            Advogados Associados
          </span>
        </motion.h1>

        {/* Supporting Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[1.4rem] sm:text-[1.7rem] lg:text-[1.8rem] text-[#2D2D2D] leading-relaxed max-w-xl mb-6 font-normal"
        >
          Defendendo seus direitos com excelência jurídica.
        </motion.h2>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="text-[#555555] text-base leading-relaxed max-w-lg mb-6 font-normal"
        >
          Atuação estratégica, atendimento próximo e soluções jurídicas de alta performance em Camaçari e Região Metropolitana.
        </motion.p>

        {/* Specialties Badges for SEO & Conversion */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.43, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap gap-2.5 items-center mt-2 mb-10"
        >
          {[
            'Direito Previdenciário (INSS)',
            'Direito Trabalhista',
            'Direito do Consumidor',
            'Direito de Família e Sucessões',
          ].map((spec) => (
            <span
              key={spec}
              className="bg-neutral-100/40 border border-neutral-200/40 text-neutral-600 text-[11px] font-medium tracking-wider px-3.5 py-1.5 rounded-full select-none"
            >
              {spec}
            </span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6"
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[#800000] hover:bg-[#4D0000] text-white text-[13px] tracking-[0.08em] uppercase font-semibold px-10 py-4.5 rounded-xl transition-all duration-300 shadow-md shadow-[#800000]/10 text-center cursor-pointer"
            id="hero-cta-agendar"
          >
            Falar com Especialista
          </a>
          <a
            href="#sobre"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#sobre')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="inline-flex items-center justify-center gap-2 text-[#2D2D2D] hover:text-[#800000] text-[13px] tracking-[0.08em] uppercase font-semibold py-3 transition-colors duration-300 group text-center"
            id="hero-cta-sobre"
          >
            Conhecer Escritório
            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1 text-[#800000]" />
          </a>
        </motion.div>

        {/* Micro-Informativo Sede */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.58, ease: [0.16, 1, 0.3, 1] }}
          className="text-[11px] text-[#828282] tracking-wide mt-6 flex items-center gap-1 select-none"
        >
          <MapPin size={12} className="text-[#800000] shrink-0" />
          <span>Sede institucional no Centro Administrativo de Camaçari - BA. Atendimento presencial e digital em todo o país.</span>
        </motion.div>
      </div>

      {/* ─── INTEGRATED BACKGROUND PANEL (66% width on desktop) ─── */}
      <div 
        className="absolute inset-y-0 right-0 w-full lg:w-[66%] z-0 overflow-hidden"
        aria-hidden="true"
      >
        {/* Real Lobby Wall Backdrop Image - Base Level */}
        <img
          src={bgHeroImg}
          alt="Escritório Hermano Sousa Advogados"
          className="w-full h-full object-cover object-center lg:object-right"
          style={{ minHeight: '100vh' }}
        />

        {/* Real Lobby Wall Backdrop Image - Intensified Light Level (Hover state) */}
        <img
          src={bgHeroImg}
          alt="Escritório Hermano Sousa Advogados - Intensificado"
          className="absolute inset-0 w-full h-full object-cover object-center lg:object-right"
          style={{
            minHeight: '100vh',
            filter: 'brightness(1.22) contrast(1.05) saturate(1.06)',
            opacity: isLogoHovered ? 1 : 0,
            transition: 'opacity 800ms cubic-bezier(0.25, 1, 0.5, 1)',
            pointerEvents: 'none',
          }}
        />

        {/* ── Left-edge soft fade into text column ── */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#FDFAF6]/50 to-transparent pointer-events-none" />

        {/* ── 3D Monogram — hover triggers light intensification ── */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex items-center justify-center select-none cursor-default"
            onMouseEnter={() => setIsLogoHovered(true)}
            onMouseLeave={() => setIsLogoHovered(false)}
          >
            {/* Wall backlight halo — diffuse, intensifies on hover */}
            <div
              className="absolute pointer-events-none"
              style={{
                width: '150%',
                height: '150%',
                background:
                  'radial-gradient(circle, rgba(255,220,140,0.16) 0%, rgba(212,175,55,0.06) 35%, transparent 68%)',
                filter: 'blur(36px)',
                opacity: isLogoHovered ? 1 : 0.45,
                transition: 'opacity 800ms cubic-bezier(0.25, 1, 0.5, 1)',
              }}
            />

            {/* Monogram with physical drop-shadows (spacer-pin mount effect) */}
            <div
              className="relative w-[240px] sm:w-[300px] md:w-[360px] lg:w-[420px] xl:w-[460px] aspect-square flex items-center justify-center"
              style={{
                transform: isLogoHovered ? 'scale(1.015)' : 'scale(1)',
                transition: 'transform 800ms cubic-bezier(0.25, 1, 0.5, 1)',
              }}
            >
              <img
                src={logoImg}
                alt="Monograma HS"
                className="w-full h-full object-contain"
                style={{
                  filter: isLogoHovered
                    ? [
                        'drop-shadow(2px 5px 3px rgba(0,0,0,0.18))',
                        'drop-shadow(8px 16px 14px rgba(26,0,0,0.22))',
                        'drop-shadow(22px 44px 34px rgba(0,0,0,0.12))',
                      ].join(' ')
                    : [
                        'drop-shadow(1px 2px 2px rgba(0,0,0,0.10))',
                        'drop-shadow(5px 10px 8px rgba(26,0,0,0.16))',
                        'drop-shadow(16px 32px 26px rgba(0,0,0,0.09))',
                      ].join(' '),
                  transition: 'filter 800ms cubic-bezier(0.25, 1, 0.5, 1)',
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* Mobile Overlay: Solid/Semi-transparent Cream to protect readability */}
        <div 
          className="absolute inset-0 bg-[#FDFAF6]/94 lg:hidden pointer-events-none" 
        />

        {/* Desktop Overlay: Very wide gradient fade-left starting early from the center */}
        <div 
          className="hidden lg:block absolute inset-y-0 left-0 w-[45%] bg-gradient-to-r from-[#FDFAF6] via-[#FDFAF6]/75 to-transparent pointer-events-none" 
        />

        {/* Bottom Fade Mask (to blend with the next section) */}
        <div 
          className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#FDFAF6] via-[#FDFAF6]/50 to-transparent pointer-events-none" 
        />
      </div>
    </section>
  )
}
