import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, MessageCircle, Shield, Check } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { areasData } from '@/data/areasData'

export default function AreaDetail() {
  const { slug } = useParams<{ slug: string }>()
  
  // Defensive input sanitization: allow only alphanumeric characters and hyphens in slug
  const cleanSlug = slug ? slug.replace(/[^a-zA-Z0-9-]/g, '') : ''
  const area = cleanSlug ? areasData[cleanSlug] : null

  // Ensure scroll is reset to top and SEO meta-tags are dynamically updated
  useEffect(() => {
    window.scrollTo(0, 0)
    
    if (area) {
      let seoTitle = `${area.title} | Hermano Sousa`
      let seoDesc = area.subtitle

      if (cleanSlug === 'direito-previdenciario') {
        seoTitle = 'Advogado Previdenciário em Camaçari - BA | Hermano Sousa'
        seoDesc = 'Precisa de ajuda com aposentadoria ou benefício do INSS em Camaçari - BA? Fale com o Dr. Hermano Sousa. Planejamento previdenciário estratégico e revisão de benefícios.'
      } else if (cleanSlug === 'direito-trabalhista') {
        seoTitle = 'Advogado Trabalhista em Camaçari - BA | Hermano Sousa'
        seoDesc = 'Defesa especializada dos direitos do trabalhador em Camaçari e Região Metropolitana. Reclamações trabalhistas, rescisões, horas extras e FGTS. Agende sua consulta.'
      } else if (cleanSlug === 'direito-do-consumidor') {
        seoTitle = 'Direito do Consumidor e Fraudes | Camaçari - BA'
        seoDesc = 'Proteção integral contra abusos de bancos, juros abusivos, negativações indevidas e fraudes financeiras em Camaçari - BA. Fale com um especialista.'
      } else if (cleanSlug === 'direito-de-familia') {
        seoTitle = 'Inventários e Divórcios em Camaçari - BA | Hermano Sousa'
        seoDesc = 'Assessoria jurídica em divórcios, partilha de bens, pensão alimentícia e inventários em Camaçari - BA. Atendimento humanizado e especializado.'
      } else if (cleanSlug === 'direito-civil') {
        seoTitle = 'Advogado Civil em Camaçari - BA | Hermano Sousa'
        seoDesc = 'Advocacia cível e imobiliária em Camaçari - BA. Contratos de alta complexidade, posse, usucapião e cobranças. Proteja seu patrimônio.'
      } else if (cleanSlug === 'direito-empresarial') {
        seoTitle = 'Advogado Empresarial em Camaçari - BA | Hermano Sousa'
        seoDesc = 'Assessoria jurídica societária, holding familiar e planejamento patrimonial para empresas em Camaçari - BA. Blindagem patrimonial de excelência.'
      }

      document.title = seoTitle

      // Update meta description tag dynamically
      let metaDesc = document.querySelector('meta[name="description"]')
      if (!metaDesc) {
        metaDesc = document.createElement('meta')
        metaDesc.setAttribute('name', 'description')
        document.head.appendChild(metaDesc)
      }
      metaDesc.setAttribute('content', seoDesc)
    }
  }, [cleanSlug, area])

  if (!area) {
    return (
      <>
        <Header />
        <main className="bg-[#FDFAF6] min-h-[70vh] pt-40 pb-24 flex items-center justify-center select-none" role="alert" aria-label="Página não encontrada">
          <div className="max-w-md w-full px-8 text-center flex flex-col items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-[#800000]/5 flex items-center justify-center text-[#800000] mb-2">
              <Shield size={28} />
            </div>
            <h1 className="font-display text-3xl font-medium text-[#1A1A1A]">
              Área Não Encontrada
            </h1>
            <p className="text-neutral-500 text-sm leading-relaxed font-light">
              O endereço solicitado não corresponde a uma especialidade ativa ou disponível em nosso escritório.
            </p>
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 bg-[#800000] hover:bg-[#4D0000] text-white text-[13px] tracking-[0.08em] uppercase font-semibold px-8 py-3.5 rounded-xl transition-all duration-300"
            >
              Voltar para o Início
            </Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  const whatsappNumber = '5500000000000'
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(area.whatsappMessage)}`

  return (
    <>
      <Header />
      
      <main id="main-content" className="bg-[#FDFAF6] min-h-screen pt-32 pb-24 select-text">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          
          {/* Back button link */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-neutral-500 hover:text-[#800000] text-xs font-semibold tracking-wider uppercase transition-colors duration-300 group"
            >
              <ArrowLeft size={14} className="transition-transform duration-300 group-hover:-translate-x-1" />
              Voltar para o Início
            </Link>
          </motion.div>

          {/* ─── SECTION 01: HERO ─── */}
          <div className="border-b border-neutral-200/50 pb-16 mb-20">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-2.5 mb-6"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#800000]" />
                <p className="text-[11px] tracking-[0.3em] uppercase text-[#800000] font-semibold">
                  Área de Especialidade
                </p>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium text-[#1A1A1A] leading-[1.1] mb-8"
              >
                {area.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="font-display text-lg sm:text-xl lg:text-2xl text-neutral-600 leading-relaxed font-light mb-10"
              >
                {area.subtitle}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 bg-[#800000] hover:bg-[#4D0000] text-white text-[13px] tracking-[0.08em] uppercase font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-[1.02] active:scale-100 shadow-md shadow-[#800000]/10"
                >
                  <MessageCircle size={16} fill="currentColor" />
                  Falar com Especialista
                </a>
              </motion.div>
            </div>
          </div>

          {/* ─── SECTION 02: CONTENT GRID ─── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start mb-24">
            
            {/* Left Column: Technical Explanation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 flex flex-col gap-6"
            >
              <h3 className="font-display text-2xl font-medium text-[#1A1A1A]">
                Visão Técnica e Atuação
              </h3>
              <div className="text-neutral-500 text-sm sm:text-base leading-relaxed font-light text-justify flex flex-col gap-4">
                <p>{area.explanation}</p>
                <p>
                  Buscamos resguardar seus direitos por meio de um patrocínio cuidadoso, aliando fundamentação acadêmica robusta a ferramentas tecnológicas modernas de auditoria jurídica. Nosso compromisso é com a clareza e com a obtenção de soluções definitivas.
                </p>
              </div>
            </motion.div>

            {/* Right Column: How We Help Cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 flex flex-col gap-6"
            >
              <h3 className="font-display text-2xl font-medium text-[#1A1A1A] lg:pl-2">
                Como podemos ajudar
              </h3>
              <div className="flex flex-col gap-4 w-full">
                {area.howWeHelp.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="flex items-center gap-4 bg-white border border-neutral-200/40 p-5 rounded-2xl shadow-sm hover:border-[#800000]/20 transition-all duration-300"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#800000]/5 flex items-center justify-center shrink-0">
                      <Check size={14} className="text-[#800000]" />
                    </div>
                    <span className="text-sm font-sans font-medium text-neutral-700">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>

          {/* ─── SECTION 03: CTA BANNER ─── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full bg-[#4D0000] rounded-3xl p-8 md:p-12 lg:p-16 text-center flex flex-col items-center gap-8 relative overflow-hidden"
          >
            {/* Background geometric design */}
            <div className="absolute inset-0 opacity-[0.02]" aria-hidden="true"
              style={{
                backgroundImage: `linear-gradient(90deg, #C0C0C0 1px, transparent 1px)`,
                backgroundSize: '80px 100%',
              }}
            />

            <div className="max-w-2xl flex flex-col gap-4 relative z-10">
              <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-medium text-white">
                Fale com um advogado especialista no seu caso.
              </h3>
              <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed font-light">
                Analisamos sua situação de forma confidencial, minuciosa e com absoluto sigilo profissional.
              </p>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#FDFAF6] hover:bg-white text-[#800000] text-xs sm:text-sm font-semibold tracking-wider uppercase px-8 py-3.5 rounded-xl transition-all duration-300 hover:scale-[1.02] active:scale-100 shadow-lg relative z-10"
            >
              <MessageCircle size={16} fill="currentColor" />
              Conversar pelo WhatsApp
            </a>

            <div className="flex items-center gap-1.5 text-neutral-400 select-none pointer-events-none text-[10px] relative z-10">
              <Shield size={11} className="shrink-0" />
              <span>Consulta pautada pelo sigilo profissional (OAB/BA).</span>
            </div>
          </motion.div>

        </div>
      </main>

      <Footer />
    </>
  )
}
