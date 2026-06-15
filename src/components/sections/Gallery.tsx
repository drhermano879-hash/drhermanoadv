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

        {/* ─── BENTO GRID GALLERY ─── */}
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
              {/* Subtle hover gradient and overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6 pointer-events-none">
                <span className="text-white text-sm font-light tracking-wide">{img.alt}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
