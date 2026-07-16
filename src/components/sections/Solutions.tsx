import { motion } from 'framer-motion'

const cases = [
  {
    n: '01',
    title: 'BPC/LOAS',
    description: 'Atuação em pedidos de concessão, reavaliação, suspensão ou reversão de indeferimento do BPC/LOAS, com orientação sobre documentos médicos, avaliação social, perícia e comprovação de impedimento de longo prazo.',
  },
  {
    n: '02',
    title: 'Benefícios por Incapacidade',
    description: 'Orientação em casos de auxílio por incapacidade temporária (B31 ou B91), aposentadoria por incapacidade permanente, indeferimentos do INSS, CAT, relatórios médicos e documentos do CEREST.',
  },
  {
    n: '03',
    title: 'Aposentadorias',
    description: 'Análise de tempo de contribuição, idade mínima, regras de transição, CNIS, vínculos, contribuições, aposentadoria especial, PPP, LTCAT e reconhecimento de atividades insalubres ou perigosas.',
  },
  {
    n: '04',
    title: 'Acidente de Trabalho e Doença Ocupacional',
    description: 'Atuação em reclamatórias trabalhistas envolvendo acidente de trabalho, doença ocupacional, indenizações por danos morais, materiais e estéticos, pensão mensal ou vitalícia e reconhecimento de direitos do trabalhador.',
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
          <p className="text-[11px] tracking-[0.3em] uppercase text-[#800000] font-semibold mb-5">
            Estudos de Caso
          </p>
          <h2
            id="solucoes-titulo"
            className="font-display text-4xl lg:text-5xl font-medium text-[#1A1A1A] leading-[1.15]"
          >
            Casos comuns em que<br />atuamos.
          </h2>
        </motion.div>

        {/* ─── TECHNICAL CARDS GRID ─── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-10% 0px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {cases.map((item) => (
            <motion.div
              key={item.n}
              variants={itemVariants}
              className="group border-t border-neutral-200/80 pt-8 pb-4 flex flex-col gap-6 cursor-default"
            >
              {/* Category indicator / number */}
              <span className="font-sans text-[11px] tracking-widest text-[#C8B8A8] group-hover:text-[#800000] font-semibold transition-colors duration-300">
                CASO {item.n}
              </span>

              {/* Title & Description */}
              <div className="flex flex-col gap-4">
                <h3 className="font-display text-xl font-medium text-[#1A1A1A] leading-snug tracking-tight group-hover:text-[#800000] transition-colors duration-300">
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
