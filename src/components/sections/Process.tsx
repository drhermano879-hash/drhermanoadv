import { motion } from 'framer-motion'

const steps = [
  { 
    n: '01', 
    title: 'Acolhimento e Diagnóstico', 
    text: 'Iniciamos com atendimento humanizado e escuta ativa. Realizamos o primeiro diagnóstico detalhado da sua situação previdenciária.' 
  },
  { 
    n: '02', 
    title: 'Auditoria de Direitos', 
    text: 'Análise minuciosa de toda a documentação, histórico de contribuições e cruzamento de dados para identificar direitos ocultos ou correções necessárias.' 
  },
  { 
    n: '03', 
    title: 'Modelagem da Causa', 
    text: 'Desenho da estratégia jurídica mais sólida e eficaz. Elaboramos as teses jurídicas personalizadas com clareza absoluta sobre as reais expectativas.' 
  },
  { 
    n: '04', 
    title: 'Patrocínio e Conclusão', 
    text: 'Acompanhamento rigoroso em todas as instâncias judiciais ou administrativas. Garantimos informação total sobre o andamento do seu processo e transparência absoluta quanto às decisões tomadas, até a obtenção do melhor desfecho possível.' 
  },
]

export default function Process() {
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
      }
    },
  }

  return (
    <section
      id="processo"
      className="py-28 lg:py-36 bg-[#4D0000] relative overflow-hidden"
      aria-labelledby="processo-titulo"
    >
      {/* Subtle background lines */}
      <div className="absolute inset-0 opacity-[0.03]" aria-hidden="true"
        style={{
          backgroundImage: `linear-gradient(90deg, #C0C0C0 1px, transparent 1px)`,
          backgroundSize: '80px 100%',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-8 lg:px-12">
        
        {/* ─── HEADER ─── */}
        <div className="mb-20">
          <p className="text-[11px] tracking-[0.3em] uppercase text-[#C0C0C0]/50 font-medium mb-5">
            Como trabalhamos
          </p>
          <h2
            id="processo-titulo"
            className="font-display text-4xl lg:text-5xl font-medium text-white leading-[1.15] mb-4"
          >
            Do primeiro contato<br />à conclusão do caso.
          </h2>
          <p className="text-neutral-300/70 text-sm sm:text-base font-light leading-relaxed max-w-2xl">
            Lhe garantimos acompanhamento e informação total ao seu processo, com transparência quanto ao que foi decidido em cada etapa.
          </p>
        </div>

        {/* ─── TIMELINE SECTION ─── */}
        <div className="relative">
          
          {/* Connecting line between steps (desktop only) */}
          <div className="hidden lg:block absolute top-[44px] left-10 right-10 h-[1px] bg-white/10 -z-10" aria-hidden="true">
            <motion.div
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="h-full bg-[#800000]"
            />
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-10% 0px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          >
            {steps.map((step) => (
              <motion.div
                key={step.n}
                variants={itemVariants}
                className="group relative bg-white/[0.02] backdrop-blur-sm border border-white/[0.06] hover:border-[#800000]/40 rounded-xl p-8 flex flex-col justify-between min-h-[250px] hover:-translate-y-1 transition-all duration-300 shadow-lg cursor-default overflow-hidden"
              >
                {/* Top Row: Number */}
                <div className="flex items-center justify-between z-10">
                  <span className="font-display text-4xl font-semibold text-white/20 group-hover:text-white/90 transition-colors duration-300 leading-none select-none">
                    {step.n}
                  </span>
                </div>

                {/* Bottom Row: Content */}
                <div className="flex flex-col gap-3 mt-10 z-10">
                  <h3 className="font-display text-lg font-medium text-white tracking-wide leading-tight group-hover:text-neutral-100 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300/80 font-light leading-relaxed group-hover:text-neutral-200 transition-colors duration-300">
                    {step.text}
                  </p>
                </div>

                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.01] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
