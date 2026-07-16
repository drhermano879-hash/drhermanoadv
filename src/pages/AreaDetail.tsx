import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, MessageCircle, Shield, Check, ChevronRight, ChevronDown } from 'lucide-react'
import { areasData } from '@/data/areasData'
import { useSEO } from '@/hooks/useSEO'

export default function AreaDetail() {
  const { slug } = useParams<{ slug: string }>()

  // Defensive input sanitization: allow only alphanumeric characters and hyphens in slug
  const cleanSlug = slug ? slug.replace(/[^a-zA-Z0-9-]/g, '') : ''
  const area = cleanSlug ? areasData[cleanSlug] : null

  // Accordion state for page-specific FAQs
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null)

  const toggleFaq = (idx: number) => {
    setOpenFaqIdx(openFaqIdx === idx ? null : idx)
  }

  // ─── SEO Integration via Hook ───
  useSEO({
    title: area ? area.seoTitle : 'Área Não Encontrada | Hermano Sousa Advogados',
    description: area ? area.seoDescription : 'Página não encontrada no site do escritório Hermano Sousa Advogados.',
    canonicalUrl: `https://hermanosousa.adv.br/areas/${cleanSlug}`,
    openGraph: area
      ? {
          title: area.seoTitle,
          description: area.seoDescription,
          url: `https://hermanosousa.adv.br/areas/${cleanSlug}`,
        }
      : undefined,
    schemas: area
      ? [
          // 1. Breadcrumb List Schema
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            'itemListElement': [
              {
                '@type': 'ListItem',
                'position': 1,
                'name': 'Início',
                'item': 'https://hermanosousa.adv.br/',
              },
              {
                '@type': 'ListItem',
                'position': 2,
                'name': 'Áreas de Atuação',
                'item': 'https://hermanosousa.adv.br/#areas',
              },
              {
                '@type': 'ListItem',
                'position': 3,
                'name': area.title,
                'item': `https://hermanosousa.adv.br/areas/${cleanSlug}`,
              },
            ],
          },
          // 2. Service & Legal Service Schema
          {
            '@context': 'https://schema.org',
            '@type': 'Service',
            'serviceType': area.title,
            'provider': {
              '@type': 'LegalService',
              'name': 'Hermano Sousa Advogados Associados',
              'image': 'https://hermanosousa.adv.br/og-image.jpg',
              'telephone': '+557136218023',
              'url': 'https://hermanosousa.adv.br/',
              'address': {
                '@type': 'PostalAddress',
                'streetAddress': 'Rua Adelina de Souza, Centro',
                'addressLocality': 'Camaçari',
                'addressRegion': 'BA',
                'postalCode': '42800-000',
                'addressCountry': 'BR',
              },
            },
            'description': area.seoDescription,
          },
          // 3. FAQPage Schema
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            'mainEntity': area.faqs.map(faq => ({
              '@type': 'Question',
              'name': faq.question,
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': faq.answer,
              },
            })),
          },
        ]
      : [],
  })

  // ─── 404 state ───────────────────────────────────────────────────────────────
  if (!area) {
    return (
      <main
        className="bg-[#FDFAF6] min-h-[70vh] pt-40 pb-24 flex items-center justify-center select-none"
        role="alert"
        aria-label="Página não encontrada"
      >
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
    )
  }

  const whatsappNumber = '557136218023'
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(area.whatsappMessage)}`

  return (
    <main id="main-content" className="bg-[#FDFAF6] min-h-screen pt-32 pb-24 select-text">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">

        {/* ─── Breadcrumbs & Back Button ──────────────────────────────────────── */}
        <nav aria-label="Navegação em trilha (Breadcrumbs)" className="mb-8 flex flex-wrap items-center gap-2 text-xs text-neutral-400 select-none">
          <Link to="/" className="hover:text-[#800000] transition-colors duration-300">Início</Link>
          <ChevronRight size={11} className="shrink-0" />
          <a href="/#areas" className="hover:text-[#800000] transition-colors duration-300">Áreas de Atuação</a>
          <ChevronRight size={11} className="shrink-0" />
          <span className="text-neutral-600 font-medium truncate max-w-[200px] sm:max-w-none">{area.title}</span>
        </nav>

        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <Link
            to="/"
            onClick={() => {
              // Reter a posição de rolagem se voltar direto pelas áreas
              // O scroll position já foi gravado ao sair da home
            }}
            className="inline-flex items-center gap-2 text-neutral-500 hover:text-[#800000] text-xs font-semibold tracking-wider uppercase transition-colors duration-300 group"
          >
            <ArrowLeft size={14} className="transition-transform duration-300 group-hover:-translate-x-1" />
            Voltar para o Início
          </Link>
        </motion.div>

        {/* ─── SECTION 01: HERO ──────────────────────────────────────────────── */}
        <div className="border-b border-neutral-200/50 pb-16 mb-20">
          <div className="max-w-4xl">
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
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-[#1A1A1A] leading-[1.15] mb-8"
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

        {/* ─── SECTION 02: CONTENT GRID (TECHNICAL & HOW WE HELP) ─────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start mb-24">

          {/* Left Column: Technical Explanation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <h2 className="font-display text-2xl lg:text-3xl font-medium text-[#1A1A1A]">
              Visão Técnica e Atuação
            </h2>
            <div className="text-neutral-600 text-sm sm:text-base leading-relaxed font-light text-justify flex flex-col gap-5">
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
            className="lg:col-span-5 flex flex-col gap-6"
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
                  <span className="text-sm font-sans font-medium text-neutral-700 leading-snug">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* ─── SECTION 03: EXPANDED DETAILED SECTIONS (SEO LOCAL & EEAT) ───────── */}
        <div className="border-t border-neutral-200/60 pt-20 mb-24">
          <div className="max-w-4xl flex flex-col gap-16">
            {area.sections.map((section, idx) => (
              <motion.article
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-5%' }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col gap-6"
              >
                {section.title && (
                  <h2 className="font-display text-2xl sm:text-3xl font-medium text-[#1A1A1A] leading-tight tracking-tight">
                    {section.title}
                  </h2>
                )}
                <div className="text-neutral-600 text-sm sm:text-base leading-relaxed font-light text-justify flex flex-col gap-5">
                  {section.content.map((pText, pIdx) => (
                    <p key={pIdx}>{pText}</p>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* ─── SECTION 04: PAGE-SPECIFIC FAQ ACCORDION ───────────────────────── */}
        <div className="border-t border-neutral-200/60 pt-20 mb-24 max-w-4xl">
          <div className="mb-12">
            <p className="text-[11px] tracking-[0.3em] uppercase text-[#800000] font-semibold mb-4">
              Respostas Técnicas
            </p>
            <h2 className="font-display text-3xl font-medium text-[#1A1A1A] leading-tight">
              Perguntas Frequentes sobre a Especialidade
            </h2>
          </div>

          <div className="flex flex-col border-t border-neutral-200">
            {area.faqs.map((faq, idx) => {
              const isOpen = openFaqIdx === idx
              return (
                <div key={idx} className="border-b border-neutral-200">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full py-6 flex items-center justify-between text-left gap-6 group hover:text-[#800000] transition-colors duration-300 cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className={`font-display text-base md:text-lg font-medium transition-colors duration-300 ${isOpen ? 'text-[#800000]' : 'text-[#1A1A1A]'}`}>
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-colors duration-300 ${isOpen ? 'border-[#800000]/30 bg-[#800000]/5 text-[#800000]' : 'border-neutral-200 text-neutral-400 group-hover:border-neutral-300 group-hover:text-neutral-600'}`}
                    >
                      <ChevronDown size={16} />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pb-6 text-neutral-500 text-sm sm:text-base leading-relaxed font-light text-justify pr-6">
                          <p>{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </div>

        {/* ─── SECTION 05: CTA BANNER ────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full bg-[#4D0000] rounded-3xl p-8 md:p-12 lg:p-16 text-center flex flex-col items-center gap-8 relative overflow-hidden"
        >
          <div
            className="absolute inset-0 opacity-[0.02]"
            aria-hidden="true"
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
  )
}
