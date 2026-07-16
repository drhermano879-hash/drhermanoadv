import { motion } from 'framer-motion'

const images = [
  {
    webp: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80&fm=webp',
    jpg: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80&fm=jpg',
    alt: 'Sala de reuniões moderna e privativa',
    span: 'md:col-span-2 h-[350px] md:h-[450px]',
  },
  {
    webp: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=80&fm=webp',
    jpg: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=80&fm=jpg',
    alt: 'Recepção e área de acolhimento',
    span: 'md:col-span-1 h-[350px] md:h-[450px]',
  },
  {
    webp: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80&fm=webp',
    jpg: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80&fm=jpg',
    alt: 'Estação de trabalho corporativa e integrada',
    span: 'md:col-span-3 h-[250px] md:h-[350px]',
  },
]

export default function Gallery() {
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
      id="escritorio"
      className="py-28 lg:py-36 bg-[#FDFAF6] overflow-hidden"
      aria-labelledby="escritorio-titulo"
    >
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        
        {/* ─── SECTION HEADER ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 max-w-2xl"
        >
          <p className="text-[11px] tracking-[0.3em] uppercase text-[#800000] font-semibold mb-5">
            O Escritório
          </p>
          <h2
            id="escritorio-titulo"
            className="font-display text-4xl lg:text-5xl font-medium text-[#1A1A1A] leading-[1.15] mb-6"
          >
            Nossa estrutura.
          </h2>
          <p className="text-neutral-500 text-sm sm:text-base leading-relaxed font-light">
            Ambiente projetado para oferecer o máximo de conforto, discrição e segurança jurídica aos nossos clientes.
          </p>
        </motion.div>

        {/* ─── BENTO GRID GALLERY (Comentado por falta de fotos) ─── */}
        {/*
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-10% 0px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {images.map((img, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className={`relative overflow-hidden rounded-2xl border border-neutral-200/40 shadow-sm ${img.span} group`}
            >
              <picture className="w-full h-full">
                <source srcSet={img.webp} type="image/webp" />
                <img
                  src={img.jpg}
                  alt={img.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out hover:scale-105"
                />
              </picture>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6 pointer-events-none">
                <span className="text-white text-sm font-light tracking-wide">{img.alt}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
        */}

        {/* ─── NEW STRUCTURE CARDS (Alternative when no photos are available) ─── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-10% 0px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Card 1: Salas Privativas */}
          <motion.div
            variants={itemVariants}
            className="bg-white p-8 rounded-2xl border border-neutral-200/40 shadow-sm hover:border-[#800000]/20 transition-all duration-300 flex flex-col gap-4"
          >
            <div className="w-12 h-12 rounded-xl bg-[#800000]/5 flex items-center justify-center text-[#800000]">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
              </svg>
            </div>
            <h3 className="font-display text-lg font-medium text-[#1A1A1A]">Salas de Reunião Privativas</h3>
            <p className="text-neutral-500 text-sm font-light leading-relaxed">
              Ambientes projetados para garantir absoluto sigilo, conforto e tranquilidade durante o atendimento às suas demandas mais importantes.
            </p>
          </motion.div>

          {/* Card 2: Infraestrutura Digital */}
          <motion.div
            variants={itemVariants}
            className="bg-white p-8 rounded-2xl border border-neutral-200/40 shadow-sm hover:border-[#800000]/20 transition-all duration-300 flex flex-col gap-4"
          >
            <div className="w-12 h-12 rounded-xl bg-[#800000]/5 flex items-center justify-center text-[#800000]">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
              </svg>
            </div>
            <h3 className="font-display text-lg font-medium text-[#1A1A1A]">Infraestrutura Digital</h3>
            <p className="text-neutral-500 text-sm font-light leading-relaxed">
              Sistemas de peticionamento rápido e segurança de dados avançada para garantir agilidade e proteção em processos em todo o país.
            </p>
          </motion.div>

          {/* Card 3: Setores Especializados */}
          <motion.div
            variants={itemVariants}
            className="bg-white p-8 rounded-2xl border border-neutral-200/40 shadow-sm hover:border-[#800000]/20 transition-all duration-300 flex flex-col gap-4"
          >
            <div className="w-12 h-12 rounded-xl bg-[#800000]/5 flex items-center justify-center text-[#800000]">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
            </div>
            <h3 className="font-display text-lg font-medium text-[#1A1A1A]">Setores Especializados</h3>
            <p className="text-neutral-500 text-sm font-light leading-relaxed">
              Organização interna segmentada por áreas do Direito, permitindo um trabalho mais profundo e focado em cada tipo de tese jurídica.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
