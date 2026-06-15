import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

interface FaqItem {
  question: string
  answer: string
}

const faqs: FaqItem[] = [
  {
    question: 'Como funciona o Planejamento Previdenciário?',
    answer: 'É um estudo técnico minucioso que analisa todo o seu histórico de contribuições para definir a regra de transição mais vantajosa da Reforma, garantindo que você se aposente com o maior valor de benefício possível no menor tempo de espera.'
  },
  {
    question: 'Quais documentos preciso para dar entrada em um benefício do INSS?',
    answer: 'Os documentos fundamentais são RG, CPF, comprovante de residência atualizado, além de provas do histórico profissional como Carteiras de Trabalho (CTPS), CNIS e, em casos de insalubridade, o Perfil Profissiográfico Previdenciário (PPP).'
  },
  {
    question: 'O escritório atende clientes de outras regiões além de Camaçari?',
    answer: 'Sim. Dispomos de uma infraestrutura digital avançada e segura que permite o atendimento e o peticionamento de processos em nível nacional, garantindo a mesma excelência e proximidade técnica tanto no formato online quanto no presencial em nossa sede.'
  },
  {
    question: 'Quanto tempo demora para sair um benefício previdenciário ou processo trabalhista?',
    answer: 'O tempo varia de acordo com a complexidade e se a análise é administrativa (INSS) ou judicial. Realizamos auditorias prévias rigorosas para protocolar pedidos impecáveis, o que reduz drasticamente o tempo de espera e aumenta as chances de aprovação rápida.'
  },
  {
    question: 'Posso entrar com o pedido de aposentadoria sozinho ou preciso de um advogado?',
    answer: 'O cidadão pode solicitar diretamente, porém, a ausência de um especialista frequentemente resulta em benefícios negados, cálculos errados ou escolha da regra de transição menos vantajosa, gerando prejuízos financeiros para o resto da vida.'
  },
  {
    question: 'O que acontece se eu for demitido e não receber minhas verbas rescisórias?',
    answer: 'O trabalhador tem o direito de buscar a reparação legal imediatamente através de uma ação trabalhista. Nosso escritório realiza o cálculo exato de cada centavo devido (horas extras, aviso prévio, FGTS e multas) para garantir o recebimento integral do seu patrimônio de direito.'
  },
  {
    question: 'Como funciona a cobrança dos honorários advocatícios no escritório?',
    answer: 'Atuamos com total transparência sob o modelo de ética da OAB. Na grande maioria das ações previdenciárias e trabalhistas, os honorários contratuais são atrelados ao êxito da causa, ou seja, o cliente só paga quando o benefício ou a indenização forem efetivamente liberados.'
  }
]

export default function Faq() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx)
  }

  return (
    <section
      id="faq"
      className="py-28 lg:py-36 bg-[#FDFAF6]"
      aria-labelledby="faq-titulo"
    >
      <div className="max-w-4xl mx-auto px-8 lg:px-12 select-text">
        
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <p className="text-[11px] tracking-[0.3em] uppercase text-[#800000] font-semibold mb-5">
            Dúvidas Comuns
          </p>
          <h2
            id="faq-titulo"
            className="font-display text-4xl lg:text-5xl font-medium text-[#1A1A1A] leading-[1.15]"
          >
            Perguntas Frequentes
          </h2>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col border-t border-neutral-200">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx
            return (
              <div
                key={idx}
                className="border-b border-neutral-200"
              >
                {/* Header (Question trigger) */}
                <button
                  onClick={() => toggle(idx)}
                  className="w-full py-6 md:py-8 flex items-center justify-between text-left gap-6 group hover:text-[#800000] transition-colors duration-300 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className={`font-display text-base md:text-lg font-medium transition-colors duration-300 ${isOpen ? 'text-[#800000]' : 'text-[#1A1A1A]'}`}>
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-colors duration-300 ${isOpen ? 'border-[#800000]/30 bg-[#800000]/5 text-[#800000]' : 'border-neutral-200 text-neutral-400 group-hover:border-neutral-300 group-hover:text-neutral-600'}`}
                  >
                    <ChevronDown size={16} />
                  </motion.div>
                </button>

                {/* Body (Answer description) */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 text-neutral-500 text-sm sm:text-base leading-relaxed font-light pr-8 text-justify">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
