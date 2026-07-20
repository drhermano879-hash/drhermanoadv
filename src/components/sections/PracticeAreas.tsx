import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const areas = [
  { slug: 'direito-previdenciario', label: 'Previdenciário', description: 'Aposentadorias, benefícios por incapacidade, BPC/LOAS, pensão por morte, revisões e planejamento previdenciário.' },
  { slug: 'direito-trabalhista', label: 'Trabalhista', description: 'Verbas rescisórias, horas extras, vínculo de emprego, adicionais, acidentes de trabalho, estabilidade e rescisão indireta.' },
  { slug: 'direito-do-consumidor', label: 'Consumidor', description: 'Cobranças indevidas, negativação irregular, problemas bancários, contratos abusivos, falhas de serviço e indenizações.' },
  { slug: 'direito-de-familia', label: 'Família e Sucessões', description: 'Divórcio, inventário, partilha de bens, pensão alimentícia, guarda de filhos e planejamento sucessório.' },
  { slug: 'direito-civil', label: 'Cível', description: 'Indenizações, cobranças, contratos, responsabilidade civil, obrigações, acordos e conflitos patrimoniais.' },
  { slug: 'direito-empresarial', label: 'Empresarial', description: 'Contratos, cobranças, recuperação de crédito, prevenção de riscos, consultoria jurídica e demandas comerciais.' },
]

export default function PracticeAreas() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      }
    },
  }

  return (
    <section
      id="areas"
      className="py-28 lg:py-36 bg-[#FDFAF6]"
      aria-labelledby="areas-titulo"
    >
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* ─── LEFT COLUMN (Permanent Sticky Heading) ─── */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 lg:sticky lg:top-32"
          >
            <p className="text-[11px] tracking-[0.3em] uppercase text-[#800000] font-semibold mb-5">
              Atuação
            </p>
            <h2
              id="areas-titulo"
              className="font-display text-4xl lg:text-5xl font-medium text-[#1A1A1A] leading-[1.15] mb-6"
            >
              Áreas de<br />atuação jurídica.
            </h2>
            <p className="text-neutral-500 text-sm leading-relaxed max-w-[280px] font-light">
              Atuamos com absoluto rigor analítico e dedicação estratégica em frentes especializadas do Direito, prestando assessoria de excelência.
            </p>
          </motion.div>

          {/* ─── RIGHT COLUMN (Modern Minimalist Grid of Cards) ─── */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-10% 0px' }}
            className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          >
            {areas.map((area, i) => (
              <Link
                key={area.label}
                to={`/areas/${area.slug}`}
                onClick={() => sessionStorage.setItem('homeScrollPosition', window.scrollY.toString())}
                className="group block h-full cursor-pointer"
              >
                <motion.div
                  variants={itemVariants}
                  className="relative bg-white border border-neutral-200/40 rounded-xl p-8 lg:p-10 flex flex-col gap-6 hover:border-[#800000]/30 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md h-full overflow-hidden"
                >
                  {/* Card Header (Number + Mini indicator) */}
                  <div className="flex items-center justify-between">
                    <span className="font-sans text-[11px] tracking-widest text-[#C8B8A8] group-hover:text-[#800000] font-semibold transition-colors duration-300">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    
                    {/* Subtle Wine Indicator Dot */}
                    <div className="w-1.5 h-1.5 rounded-full bg-[#800000]/0 group-hover:bg-[#800000] transition-all duration-300" />
                  </div>

                  {/* Card Content (Title & Description) */}
                  <div className="flex flex-col gap-3 flex-grow">
                    <h3 className="font-display text-xl font-medium text-[#1A1A1A] tracking-tight group-hover:text-[#800000] transition-colors duration-300">
                      {area.label}
                    </h3>
                    <p className="text-sm text-neutral-500 font-light leading-relaxed group-hover:text-neutral-800 transition-colors duration-300">
                      {area.description}
                    </p>
                  </div>

                  {/* Saiba mais button link */}
                  <div className="mt-auto pt-2 flex items-center justify-start text-xs font-medium text-[#800000] group-hover:underline gap-1 transition-all duration-300">
                    <span>Saiba mais</span>
                    <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </motion.div>
              </Link>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
