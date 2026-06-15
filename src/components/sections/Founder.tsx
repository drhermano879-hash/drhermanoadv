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
              A Mente Estratégica<br />por Trás da Banca
            </h2>

            {/* Subtitle */}
            <h3 className="font-display text-lg lg:text-xl text-[#800000] font-normal leading-relaxed">
              Dr. Hermano Sousa — Especialização, ética e dedicação intransigente à justiça social.
            </h3>

            {/* Copy paragraphs for SEO & Google indexing */}
            <div className="text-neutral-500 text-sm sm:text-base leading-relaxed font-light text-justify flex flex-col gap-4">
              <p>
                Com uma sólida trajetória na advocacia baiana, o Dr. Hermano Sousa construiu sua carreira fundamentado no rigor científico e na busca incessante pelas soluções jurídicas mais vantajosas para seus clientes. Sua atuação em Camaçari e Região Metropolitana é marcada pela liderança em litígios complexos de Direito Previdenciário (INSS) e Direito Trabalhista.
              </p>
              <p>
                Acreditando que o atendimento próximo e individualizado é a chave para o sucesso de uma causa, o fundador desenha pessoalmente as teses de revisão de benefícios, planejamentos de aposentadoria e defesas contratuais, garantindo que cada cidadão receba o amparo legal necessário com máxima segurança e transparência.
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
