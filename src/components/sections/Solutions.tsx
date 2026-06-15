import { motion } from 'framer-motion'

const cases = [
  {
    n: '01',
    title: 'Concessão de Aposentadoria Especial de Alta Complexidade',
    description: 'Reconhecimento de tempo de atividade especial insalubre e periculosa para segurado com mais de 25 anos de exposição a agentes nocivos, obtido após auditoria minuciosa e retificação de Perfis Profissiográficos Previdenciários (PPP).',
  },
  {
    n: '02',
    title: 'Otimização de Benefício via Planejamento Previdenciário Estratégico',
    description: 'Análise histórica de salários de contribuição e aplicação de regras de transição da Reforma da Previdência, resultando na blindagem do patrimônio previdenciário e em um incremento real no valor do benefício final do segurado.',
  },
  {
    n: '03',
    title: 'Reversão de Indeferimento de Benefício por Incapacidade',
    description: 'Restabelecimento de benefício por incapacidade temporária de segurado através de impugnação técnica e apresentação de pareceres médicos especializados, corrigindo equívoco da avaliação pericial administrativa.',
  },
]

export default function Solutions() {
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
    hidden: { opacity: 0, y: 15 },
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
      id="solucoes"
      className="py-28 lg:py-36 bg-[#FDFAF6]"
      aria-labelledby="solucoes-titulo"
    >
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        
        {/* ─── SECTION HEADER ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <p className="text-[11px] tracking-[0.3em] uppercase text-[#8B1A3A] font-semibold mb-5">
            Estudos de Caso
          </p>
          <h2
            id="solucoes-titulo"
            className="font-display text-4xl lg:text-5xl font-medium text-[#1A1A1A] leading-[1.15]"
          >
            Soluções jurídicas<br />alcançadas.
          </h2>
        </motion.div>

        {/* ─── TECHNICAL CARDS GRID ─── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-10% 0px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {cases.map((item) => (
            <motion.div
              key={item.n}
              variants={itemVariants}
              className="group border-t border-neutral-200/80 pt-8 pb-4 flex flex-col gap-6 cursor-default"
            >
              {/* Category indicator / number */}
              <span className="font-sans text-[11px] tracking-widest text-[#C8B8A8] group-hover:text-[#8B1A3A] font-semibold transition-colors duration-300">
                CASO {item.n}
              </span>

              {/* Title & Description */}
              <div className="flex flex-col gap-4">
                <h3 className="font-display text-xl font-medium text-[#1A1A1A] leading-snug tracking-tight group-hover:text-[#5C1228] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-500 font-light leading-relaxed group-hover:text-neutral-800 transition-colors duration-300 font-light text-justify">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
