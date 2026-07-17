import { motion } from 'framer-motion'

import diegoPinheiroImg from '@/assets/diegopinheiro.webp'
import ednaNascimentoImg from '@/assets/ednanascimento.webp'
import joaoMonteiroImg from '@/assets/joaomonteiro.webp'
import victorHugoImg from '@/assets/victorhugo.webp'

// Custom OAB-compliant/standard LinkedIn SVG icon since it is not exported by this lucide version
const LinkedinIcon = ({ className = "w-3.5 h-3.5" }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.8" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
)

interface Associate {
  name: string
  role: string
  webp: string
  jpg: string
  linkedin?: string
}

const associates: Associate[] = [
  {
    name: 'Victor Hugo Barbosa Batista',
    role: 'Consultor Jurídico — Trabalhista e Previdenciário',
    webp: victorHugoImg,
    jpg: victorHugoImg,
  },
  {
    name: 'Diego Pinheiro Queiroz',
    role: 'Consultor Jurídico — Previdenciário e Consumidor',
    webp: diegoPinheiroImg,
    jpg: diegoPinheiroImg,
  },
  {
    name: 'João Monteiro Tavares',
    role: 'Estagiário de Direito',
    webp: joaoMonteiroImg,
    jpg: joaoMonteiroImg,
  },
  {
    name: 'Edna Nascimento',
    role: 'Secretária e Recepcionista',
    webp: ednaNascimentoImg,
    jpg: ednaNascimentoImg,
  },
]

export default function Team() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  }

  return (
    <section
      id="equipe"
      className="py-28 lg:py-36 bg-[#FDFAF6] overflow-hidden"
      aria-labelledby="equipe-titulo"
    >
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        
        {/* ─── SECTION HEADER ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 max-w-3xl"
        >
          <p className="text-[11px] tracking-[0.3em] uppercase text-[#800000] font-semibold mb-5">
            Corpo Técnico
          </p>
          <h2
            id="equipe-titulo"
            className="font-display text-4xl lg:text-5xl font-medium text-[#1A1A1A] leading-[1.15] mb-6"
          >
            Corpo técnico de elite.
          </h2>
          <p className="text-neutral-500 text-sm sm:text-base leading-relaxed font-light">
            Profissionais altamente especializados dedicados ao desenvolvimento de teses e soluções previdenciárias de alta complexidade.
          </p>
        </motion.div>

        {/* ─── GRID CONTENT ─── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-10% 0px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 pt-6 pb-20 lg:pb-28"
        >
          {associates.map((item, idx) => {
            const offsets = [
              'lg:translate-y-0',
              'lg:translate-y-12',
              'lg:-translate-y-4',
              'lg:translate-y-8',
            ]
            const offsetClass = offsets[idx] || ''

            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className={`group relative bg-white p-5 rounded-2xl border border-neutral-200/40 shadow-sm hover:border-[#800000]/30 hover:shadow-md hover:scale-[1.01] transition-all duration-300 flex flex-col gap-5 cursor-default overflow-hidden ${offsetClass}`}
              >
                {/* Associate Photo */}
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-neutral-100">
                  <picture className="w-full h-full">
                    <source srcSet={item.webp} type="image/webp" />
                    <img
                      src={item.jpg}
                      alt={item.name}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-center transition-transform duration-700 ease-out hover:scale-105"
                    />
                  </picture>
                </div>

                {/* Associate details */}
                <div className="flex items-start justify-between gap-3 select-text">
                  <div className="flex flex-col gap-1.5">
                    <h4 className="font-display text-lg font-medium text-[#1A1A1A] leading-tight group-hover:text-[#800000] transition-colors duration-300">
                      {item.name}
                    </h4>
                    <p className="text-xs text-neutral-500 font-light leading-snug">
                      {item.role}
                    </p>
                  </div>

                  {item.linkedin && (
                    <a
                      href={item.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 border border-neutral-200/60 rounded-xl bg-neutral-50/50 hover:bg-neutral-50 text-neutral-400 hover:text-[#800000] transition-all duration-300 shrink-0 cursor-pointer flex items-center justify-center"
                      aria-label={`LinkedIn profissional de ${item.name}`}
                    >
                      <LinkedinIcon />
                    </a>
                  )}
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
