import { motion } from 'framer-motion'

const items = [
  {
    n: '01',
    title: 'Equipe Preparada',
    text: 'Profissionais selecionados e comprometidos com um atendimento jurídico responsável, organizado e humanizado.',
    cols: 'lg:col-span-2',
  },
  {
    n: '02',
    title: 'Ética e Sigilo',
    text: 'Todas as demandas são tratadas com discrição, responsabilidade profissional e sigilo absoluto.',
    cols: 'lg:col-span-2',
  },
  {
    n: '03',
    title: 'Foco Previdenciário',
    text: 'Atuação destacada em Direito Previdenciário, com experiência em pedidos administrativos e judiciais perante o INSS.',
    cols: 'lg:col-span-2',
  },
  {
    n: '04',
    title: 'Gestão Organizada',
    text: 'Acompanhamento cuidadoso de prazos, documentos, movimentações processuais e etapas da demanda.',
    cols: 'lg:col-span-2',
  },
  {
    n: '05',
    title: 'Atendimento Humanizado',
    text: 'Escuta atenta, linguagem clara e análise individualizada de cada caso.',
    cols: 'lg:col-span-2',
  },
  {
    n: '06',
    title: 'Experiência Consolidada',
    text: 'Atuação desde 2016, com experiência acumulada em mais de 2.000 processos e forte presença na comunidade de Camaçari.',
    cols: 'lg:col-span-2',
  },
]

export default function Differentials() {
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
    hidden: { opacity: 0, y: 30 },
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
      id="diferenciais"
      className="py-28 lg:py-36 bg-white overflow-hidden"
      aria-labelledby="diferenciais-titulo"
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
          <p className="text-[11px] tracking-[0.3em] uppercase text-[#800000] font-semibold mb-5">
            Diferenciais
          </p>
          <h2
            id="diferenciais-titulo"
            className="font-display text-4xl lg:text-5xl font-medium text-[#1A1A1A] leading-[1.15]"
          >
            Por que escolher<br />o Hermano Sousa.
          </h2>
        </motion.div>

        {/* ─── BENTO GRID LAYOUT ─── */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-10% 0px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 md:gap-8"
        >
          {items.map((item) => (
            <motion.div
              key={item.n}
              variants={itemVariants}
              className={`group relative bg-[#FDFAF6]/50 border border-neutral-200/35 rounded-2xl p-8 lg:p-10 flex flex-col justify-between min-h-[220px] hover:border-[#800000]/30 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md cursor-default overflow-hidden ${item.cols}`}
            >
              {/* Giant number absolute background */}
              <span className="absolute bottom-4 right-6 font-display text-8xl md:text-9xl font-bold text-[#800000]/[0.03] group-hover:text-[#800000]/[0.06] select-none pointer-events-none transition-colors duration-300 leading-none">
                {item.n}
              </span>

              {/* Content (Top elements) */}
              <div className="flex flex-col gap-4 z-10">
                <h3 className="font-display text-xl font-medium text-[#1A1A1A] tracking-tight group-hover:text-[#800000] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-500 font-light leading-relaxed max-w-[90%] group-hover:text-neutral-800 transition-colors duration-300">
                  {item.text}
                </p>
              </div>

              {/* Subtle visual accent bottom line */}
              <div className="w-12 h-1 bg-[#800000]/0 group-hover:bg-[#800000]/20 transition-all duration-500 mt-8 rounded-full z-10" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
