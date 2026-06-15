import { motion } from 'framer-motion'

export default function Location() {
  const address = "R. Contôrno de Centro Administrativo, 02 - loja 2 - Dois de Julho, Camaçari - BA, 42800-610"
  const mapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`
  const mapsEmbedUrl = "https://maps.google.com/maps?q=R.+Cont%C3%B4rno+de+Centro+Administrativo%2C+02+-+loja+2+-+Dois+de+Julho%2C+Cama%C3%A7ari+-+BA%2C+42800-610&t=&z=15&ie=UTF8&iwloc=&output=embed"

  return (
    <section
      id="localizacao"
      className="py-28 lg:py-36 bg-[#FDFAF6] overflow-hidden"
      aria-labelledby="localizacao-titulo"
    >
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* ─── LEFT COLUMN (Address & Details) ─── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col items-start gap-8"
          >
            <div>
              <p className="text-[11px] tracking-[0.3em] uppercase text-[#800000] font-semibold mb-5">
                Localização
              </p>
              <h2
                id="localizacao-titulo"
                className="font-display text-4xl lg:text-5xl font-medium text-[#1A1A1A] leading-[1.15] mb-6"
              >
                Venha nos visitar.
              </h2>
            </div>

            {/* Structured Address */}
            <div className="flex flex-col gap-3 max-w-sm select-text">
              <p className="text-base text-neutral-800 font-medium leading-relaxed font-sans">
                Hermano Sousa Advogados Associados
              </p>
              <p className="text-sm text-neutral-500 font-light leading-relaxed">
                R. Contôrno de Centro Administrativo, 02<br />
                Loja 2 - Dois de Julho<br />
                Camaçari - BA, 42800-610
              </p>
            </div>

            {/* Support Info */}
            <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed max-w-sm font-light text-justify">
              Dispomos de localização estratégica com estacionamento privativo e fácil acesso para sua total comodidade.
            </p>

            {/* Google Maps Route Button */}
            <a
              href={mapsSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border border-[#800000] text-[#800000] font-medium text-xs sm:text-sm rounded-xl hover:bg-[#800000] hover:text-white shadow-sm hover:shadow transition-all duration-300 hover:scale-[1.02] active:scale-100 cursor-pointer"
            >
              Traçar Rota no Google Maps
            </a>
          </motion.div>

          {/* ─── RIGHT COLUMN (Google Maps Iframe Embed) ─── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 w-full"
          >
            <div className="relative h-[400px] w-full overflow-hidden rounded-2xl shadow-lg border border-neutral-200/40">
              <iframe
                title="Localização do Escritório Hermano Sousa Advogados"
                src={mapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
