import { motion } from 'framer-motion'
import { ArrowRight, MapPin } from 'lucide-react'
import bgGrenaImg from '@/assets/background-grena.webp'
import logoImg from '@/assets/logo/logo-sembg.png'

/* ─── Short viewport responsive adjustments ─── */
const SHORT_VP = '@media (max-height: 800px) and (min-width: 1024px)'

export default function Hero() {
  const whatsappNumber = '557136218023'
  const messageText = 'Olá! Gostaria de iniciar uma consulta com um especialista.'
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(messageText)}`

  return (
    <section
      id="inicio"
      className="min-h-screen relative flex items-center overflow-hidden pt-28 lg:pt-32"
      aria-label="Apresentação do Escritório"
    >
      {/* ─── Short viewport style overrides ─── */}
      <style>{`
${SHORT_VP} {
  #inicio { padding-top: 5rem; }
  #inicio .hero-title-main { font-size: 3.7rem; }
  #inicio .hero-title-wrapper { margin-bottom: 1.25rem; }
  #inicio .hero-subtitle  { font-size: 1.4rem; margin-bottom: 0.75rem; }
  #inicio .hero-description { margin-bottom: 0.75rem; }
  #inicio .hero-badges   { margin-bottom: 1.5rem; margin-top: 0; gap: 0.5rem; }
  #inicio .hero-badge    { font-size: 10px; padding: 0.25rem 0.6rem; }
  #inicio .hero-ctas     { gap: 1rem; }
  #inicio .hero-location { margin-top: 0.75rem; }
  #inicio .hero-logo     { width: 270px; }
}
@media (max-height: 800px) and (min-width: 1280px) {
  #inicio .hero-title-main { font-size: 4.4rem; }
  #inicio .hero-subtitle  { font-size: 1.5rem; }
  #inicio .hero-logo      { width: 340px; }
}
@media (max-height: 800px) and (min-width: 1024px) and (max-width: 1440px) {
  #inicio .hero-logo-container { right: 24%; }
  #inicio .hero-logo { width: 240px; }
  #inicio .hero-title-main { font-size: 3.6rem; }
  #inicio .hero-title-wrapper { margin-bottom: 1rem; }
  #inicio .hero-subtitle  { font-size: 1.3rem; margin-bottom: 0.5rem; }
  #inicio .hero-description { margin-bottom: 0.5rem; }
  #inicio .hero-badges   { margin-bottom: 1.25rem; gap: 0.4rem; }
  #inicio .hero-badge    { font-size: 9px; padding: 0.2rem 0.5rem; }
  #inicio .hero-ctas     { gap: 0.75rem; }
  #inicio .hero-location { margin-top: 0.5rem; }
  #inicio .hero-content  { padding-left: 3.5rem; padding-right: 3.5rem; }
}
      `}</style>

      {/* ─── Background image — grena fullscreen 100% ─── */}
      <img
        src={bgGrenaImg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
        aria-hidden="true"
        style={{ minHeight: '100vh' }}
      />

      {/* ─── Decorative logo on the right side ─── */}
      <div
        className="hero-logo-container absolute inset-y-0 right-[22%] hidden lg:flex items-center justify-center pointer-events-none select-none"
        aria-hidden="true"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
        >
          <img
            src={logoImg}
            alt=""
            className="hero-logo w-[320px] xl:w-[400px] h-auto object-contain opacity-[0.8]"
            style={{
              filter:
                'grayscale(1) brightness(1.7) contrast(1.1) saturate(0.4)',
            }}
          />
        </motion.div>
      </div>

      {/* ─── Mobile gradient overlay ─── */}
      <div className="absolute inset-0 bg-black/10 pointer-events-none lg:hidden" />

      {/* ─── Content — full width, no split ─── */}
      <div className="hero-content relative z-10 w-full flex flex-col justify-center px-6 sm:px-12 md:px-16 lg:px-20 xl:px-28 py-20 lg:py-0 max-w-7xl mr-auto">
        
        {/* Main H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}className="hero-title-wrapper font-display text-white mb-8">
        <span className="hero-title-main block text-[2.8rem] sm:text-[3.5rem] md:text-[4rem] lg:text-[4.2rem] xl:text-[5rem] font-medium leading-[1.08] tracking-[-0.03em]">
            Hermano Sousa
          </span>
          <span className="block text-xs sm:text-sm font-sans tracking-[0.35em] uppercase text-[#D4C5A9] font-semibold mt-4">
            Advogados Associados
          </span>
        </motion.h1>

        {/* Supporting Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="hero-subtitle font-display text-[1.3rem] sm:text-[1.5rem] lg:text-[1.6rem] text-[#E8E0D0] leading-relaxed max-w-xl mb-6 font-normal"
        >
          Defendendo seus direitos com excelência jurídica.
        </motion.h2>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="hero-description text-[#C8BEB0] text-sm sm:text-base leading-relaxed max-w-lg mb-6 font-light"
        >
          Atuação estratégica, atendimento próximo e soluções jurídicas de alta performance em Camaçari e Região Metropolitana.
        </motion.p>

        {/* Specialties Badges */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.48, ease: [0.16, 1, 0.3, 1] }}
          className="hero-badges flex flex-wrap gap-2.5 items-center mt-2 mb-10"
        >
          {[
            'Direito Previdenciário (INSS)',
            'Direito Trabalhista',
            'Direito do Consumidor',
            'Direito de Família e Sucessões',
          ].map((spec) => (
            <span
              key={spec}
              className="hero-badge bg-white/5 border border-white/10 text-[#D4C5A9] text-[11px] font-medium tracking-wider px-3.5 py-1.5 rounded-full select-none"
            >
              {spec}
            </span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.53, ease: [0.16, 1, 0.3, 1] }}
          className="hero-ctas flex flex-col sm:flex-row items-stretch sm:items-center gap-6"
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-white hover:bg-[#F0EDE8] text-[#4D0000] text-[13px] tracking-[0.08em] uppercase font-semibold px-10 py-4.5 rounded-xl transition-all duration-300 shadow-lg shadow-black/20 text-center cursor-pointer"
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
            className="inline-flex items-center justify-center gap-2 text-[#D4C5A9] hover:text-white text-[13px] tracking-[0.08em] uppercase font-semibold py-3 transition-colors duration-300 group text-center"
            id="hero-cta-sobre"
          >
            Conhecer Escritório
            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1 text-[#D4C5A9] group-hover:text-white" />
          </a>
        </motion.div>

        {/* Micro-Informativo Sede */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="hero-location text-[11px] text-[#B0A898] tracking-wide mt-6 flex items-center gap-1.5 select-none"
        >
          <MapPin size={12} className="text-[#D4C5A9] shrink-0" />
          <span>Sede institucional no Centro Administrativo de Camaçari - BA. Atendimento presencial e digital em todo o país.</span>
        </motion.div>
      </div>

      {/* ─── Bottom Fade sutil ─── */}
      <div
        className="absolute bottom-0 inset-x-0 h-12 bg-gradient-to-t from-[#FDFAF6]/20 to-transparent pointer-events-none z-10"
      />
    </section>
  )
}
