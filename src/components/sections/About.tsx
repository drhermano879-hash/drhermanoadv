import { useRef, Fragment } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import aboutImg from '@/assets/drhermano916.webp'

// Helper function to parse text and identify bracketed highlights [highlighted text]
function parseText(text: string): { text: string; highlight: boolean }[] {
  const tokens: { text: string; highlight: boolean }[] = []
  const regex = /\[([^\]]+)\]|([^\s\[\]]+)/g
  let match
  
  while ((match = regex.exec(text)) !== null) {
    if (match[1]) {
      // Split the highlighted phrase into individual words to allow word-by-word animation
      const words = match[1].split(/\s+/)
      words.forEach(word => {
        tokens.push({ text: word, highlight: true })
      })
    } else if (match[2]) {
      tokens.push({ text: match[2], highlight: false })
    }
  }
  
  return tokens
}

interface WordProps {
  text: string
  highlight?: boolean
  progress: any
  range: [number, number]
}

function Word({ text, highlight, progress, range }: WordProps) {
  // Target color depending on whether it is highlighted or normal text
  const targetColor = highlight ? "#1A1A1A" : "#2D2D2D"
  const color = useTransform(progress, range, ["#D4D4D4", targetColor])
  
  // Opacity transitions from 0.3 to 1.0
  const opacity = useTransform(progress, range, [0.3, 1.0])
  
  // Highlight background width transitions from 0% to 100%
  const width = useTransform(progress, range, ["0%", "100%"])

  return (
    <motion.span 
      style={{ color, opacity }}
      className={`relative inline-block ${highlight ? 'font-semibold' : 'font-light'}`}
    >
      {highlight && (
        <motion.span
          style={{ width, originX: 0 }}
          className="absolute inset-y-0 left-0 bg-[#800000]/10 -z-10 rounded-sm"
        />
      )}
      {text}
    </motion.span>
  )
}

interface ScrollParagraphProps {
  tokens: { text: string; highlight: boolean }[]
  progress: any
  startIndex: number
  totalWords: number
}

function ScrollParagraph({ tokens, progress, startIndex, totalWords }: ScrollParagraphProps) {
  return (
    <p className="text-base sm:text-lg leading-relaxed font-light text-justify">
      {tokens.map((token, index) => {
        const wordIndex = startIndex + index
        
        // Define total scroll bounds where text reveal happens
        const startScroll = 0.05
        const endScroll = 0.95
        
        // Calculate center point of reveal for this word
        const center = startScroll + (wordIndex / (totalWords - 1)) * (endScroll - startScroll)
        
        // Each word transitions in a window of 6% of total scroll progress for a smooth wave effect
        const range: [number, number] = [
          Math.max(0, center - 0.03),
          Math.min(1, center + 0.03)
        ]

        return (
          <Fragment key={index}>
            <Word 
              text={token.text}
              highlight={token.highlight}
              progress={progress}
              range={range}
            />
            {index < tokens.length - 1 && " "}
          </Fragment>
        )
      })}
    </p>
  )
}

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null)

  // Track scroll progress of the right text container relative to the viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 75%", "start 10%"]
  })

  // Texts with highlights demarcated by brackets [highlighted text]
  const p1 = "Fundado em [2016,] nosso escritório iniciou suas atividades com o propósito de oferecer atendimento jurídico responsável, acessível e comprometido com a realidade de cada cliente. Ao longo dos anos, consolidamos uma atuação marcada pela seriedade, pela escuta atenta e pela análise técnica dos casos, especialmente na área previdenciária. Atualmente, contamos com experiência acumulada em [mais de 2.000 processos,] atuando também nas áreas trabalhista, consumidor, cível e empresarial."
  const p2 = "Nosso trabalho é voltado à [orientação clara,] à defesa responsável de direitos e à construção de [estratégias jurídicas adequadas] às necessidades de cada pessoa ou empresa atendida."
  const p3 = "Mais do que acompanhar processos, buscamos oferecer [segurança, transparência e acolhimento] em momentos decisivos. Por isso, nosso atendimento é pautado pela ética, pelo sigilo profissional e pelo compromisso com a prestação de um serviço jurídico sério e humanizado, contribuindo com a comunidade por meio de uma [advocacia próxima, técnica e comprometida.]"

  const tokens1 = parseText(p1)
  const tokens2 = parseText(p2)
  const tokens3 = parseText(p3)

  const totalWords = tokens1.length + tokens2.length + tokens3.length

  return (
    <section
      id="sobre"
      className="py-28 lg:py-36 bg-[#FDFAF6] overflow-hidden"
      aria-labelledby="sobre-titulo"
    >
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* ─── LEFT COLUMN (Founder Photo, Sticky on Desktop) ─── */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 order-1">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/5] w-full overflow-hidden rounded-xl border border-black/[0.03] shadow-md shadow-black/[0.01]"
            >
              <img
                src={aboutImg}
                alt="Dr. Hermano Sousa — Sobre o Escritório"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-[1.03]"
              />
            </motion.div>
          </div>

          {/* ─── RIGHT COLUMN (Editorial Text with Word-by-Word Highlight) ─── */}
          <div 
            ref={containerRef}
            className="lg:col-span-7 flex flex-col justify-center order-2 animate-gpu"
          >
            {/* Eyebrow */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-[11px] tracking-[0.3em] uppercase text-[#800000] font-semibold mb-6"
            >
              Sobre o Escritório
            </motion.p>

            {/* Title */}
            <motion.h2
              id="sobre-titulo"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-15% 0px' }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-4xl lg:text-5xl font-medium text-[#1A1A1A] leading-[1.15] mb-12"
            >
              Tradição, estratégia<br />e presença jurídica.
            </motion.h2>

            {/* Highlighted Paragraphs */}
            <div className="flex flex-col gap-10 select-text">
              <ScrollParagraph 
                tokens={tokens1} 
                progress={scrollYProgress} 
                startIndex={0} 
                totalWords={totalWords} 
              />
              <ScrollParagraph 
                tokens={tokens2} 
                progress={scrollYProgress} 
                startIndex={tokens1.length} 
                totalWords={totalWords} 
              />
              <ScrollParagraph 
                tokens={tokens3} 
                progress={scrollYProgress} 
                startIndex={tokens1.length + tokens2.length} 
                totalWords={totalWords} 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
