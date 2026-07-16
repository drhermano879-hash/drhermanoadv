import { motion } from 'framer-motion'

export default function Founder() {
  return (
    <section
      id="fundador"
      className="py-28 lg:py-36 bg-[#FDFAF6] overflow-hidden"
      aria-labelledby="fundador-titulo"
    >
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* ─── LEFT COLUMN: Text Content (7 Columns) ─── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col gap-6 order-2 lg:order-1 select-text"
          >
            {/* Eyebrow */}
            <p className="text-[11px] tracking-[0.3em] uppercase text-[#800000] font-semibold mb-1">
              O Fundador
            </p>

            {/* Title */}
            <h2
              id="fundador-titulo"
              className="font-display text-4xl lg:text-5xl font-medium text-[#1A1A1A] leading-[1.15]"
            >
              e a mente por trás<br />do escritório
            </h2>

            {/* Subtitle */}
            <h3 className="font-display text-lg lg:text-xl text-[#800000] font-normal leading-relaxed">
              Dr. Hermano Francisco de Sousa — OAB/BA 31.575
            </h3>

            {/* Copy paragraphs for SEO & Google indexing */}
            <div className="text-neutral-500 text-sm sm:text-base leading-relaxed font-light text-justify flex flex-col gap-4">
              <p>
                O escritório foi fundado pelo Dr. Hermano Francisco de Sousa, advogado com mais de 30 anos de atuação, bacharel em Direito pela UNIFAMEC e mestre em Administração pela UCSAL.
              </p>
              <p>
                Com trajetória marcada pelo compromisso social, possui forte atuação no Direito Previdenciário, especialmente em demandas envolvendo BPC/LOAS, benefícios por incapacidade, aposentadorias, pensões e revisões previdenciárias. Também dedica sua prática profissional à defesa dos trabalhadores no Direito do Trabalho.
              </p>
              <p>
                Além da advocacia, Dr. Hermano contribuiu para o município de Camaçari como professor da rede pública, participando da formação educacional de alunos e fortalecendo sua ligação com a comunidade local.
              </p>
              <p>
                Em 2025, recebeu da Câmara Municipal de Camaçari a Medalha Desembargador Montenegro, reconhecimento por sua contribuição ao município como advogado, educador e cidadão camaçariense.
              </p>
              <p>
                A história do Dr. Hermano Francisco de Sousa reflete uma vida dedicada ao serviço da comunidade, à defesa dos direitos dos segurados, dos trabalhadores e das pessoas em situação de maior vulnerabilidade, sempre com atuação pautada pela ética, pela responsabilidade e pelo compromisso social.
              </p>
            </div>
          </motion.div>

          {/* ─── RIGHT COLUMN: Image (5 Columns) ─── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 order-1 lg:order-2"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-black/[0.03] shadow-lg shadow-black/[0.02] group">
              <img
                src="/drhermano.webp"
                alt="Dr. Hermano Sousa — Sócio Fundador"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out hover:scale-[1.03]"
              />
              {/* Subtle elegant border overlay */}
              <div className="absolute inset-0 rounded-2xl border border-white/10 pointer-events-none" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
