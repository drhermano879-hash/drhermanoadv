import { motion } from 'framer-motion'

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

const associates = [
  {
    name: 'Dra. Mariana Costa',
    role: 'Coordenadora de Auditoria de Direitos',
    webp: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&h=500&q=80&fm=webp',
    jpg: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&h=500&q=80&fm=jpg',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Dr. Felipe Rocha',
    role: 'Especialista em Planejamento Previdenciário',
    webp: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&h=500&q=80&fm=webp',
    jpg: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&h=500&q=80&fm=jpg',
    linkedin: 'https://linkedin.com',
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* ─── LEFT COLUMN (Founding Partner - 5 Columns) ─── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Founder Photo */}
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-black/[0.03] shadow-sm shadow-black/[0.01]">
              <img
                src="/drhermano.webp"
                alt="Dr. Hermano Sousa Sócio Fundador"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-[1.03]"
              />
            </div>
            
            {/* Founder details */}
            <div className="flex flex-col gap-3 pl-1 select-text">
              <div>
                <p className="tracking-wider text-[10px] font-semibold text-[#800000] uppercase">Sócio Fundador & Diretor Jurídico</p>
                <h3 className="font-display text-2xl font-medium text-[#1A1A1A] mt-1">Dr. Hermano Sousa</h3>
              </div>
              <p className="text-sm text-neutral-500 font-light leading-relaxed text-justify">
                Especialista em Direito Previdenciário com mais de duas décadas de atuação em teses de alta complexidade junto aos Tribunais Superiores. Responsável pela coordenação estratégica do escritório.
              </p>
            </div>
          </motion.div>

          {/* ─── RIGHT COLUMN (Associates Subgrid - 7 Columns) ─── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-10% 0px' }}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {associates.map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group relative bg-white p-5 rounded-2xl border border-neutral-200/40 shadow-sm hover:border-[#800000]/30 hover:-translate-y-1 transition-all duration-300 flex flex-col gap-5 cursor-default overflow-hidden"
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

                  {/* LinkedIn Link */}
                  <a
                    href={item.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 border border-neutral-200/60 rounded-xl bg-neutral-50/50 hover:bg-neutral-50 text-neutral-400 hover:text-[#800000] transition-all duration-300 shrink-0 cursor-pointer flex items-center justify-center"
                    aria-label={`LinkedIn profissional de ${item.name}`}
                  >
                    <LinkedinIcon />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
