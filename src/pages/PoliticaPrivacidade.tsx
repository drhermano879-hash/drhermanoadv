import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Shield } from 'lucide-react'
import { useSEO } from '@/hooks/useSEO'

export default function PoliticaPrivacidade() {
  useSEO({
    title: 'Política de Privacidade e Proteção de Dados | Hermano Sousa',
    description: 'Saiba como tratamos suas informações de contato com absoluto sigilo profissional no Hermano Sousa Advogados Associados.',
    canonicalUrl: 'https://hermanosousa.adv.br/politica-privacidade',
    robots: 'noindex, follow',
  })

  return (
    <main id="main-content" className="bg-[#FDFAF6] min-h-screen pt-32 pb-24 select-text">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-neutral-500 hover:text-[#800000] text-xs font-semibold tracking-wider uppercase transition-colors duration-300 group"
          >
            <ArrowLeft size={14} className="transition-transform duration-300 group-hover:-translate-x-1" />
            Voltar para o Início
          </Link>
        </motion.div>

        {/* Header Info */}
        <div className="border-b border-neutral-200/50 pb-10 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-2 mb-4"
          >
            <Shield size={14} className="text-[#800000]" />
            <span className="text-[11px] tracking-[0.3em] uppercase text-[#800000] font-semibold">
              Conformidade Legal
            </span>
          </motion.div>

          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-[#1A1A1A] leading-[1.15] mb-6">
            Política de Privacidade e Proteção de Dados
          </h1>

          <p className="font-display text-lg text-neutral-600 leading-relaxed font-light">
            Conheça nosso compromisso com a segurança, sigilo e transparência no tratamento das suas informações.
          </p>
        </div>

        {/* Editorial Content */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-neutral-700 leading-relaxed space-y-8 text-sm sm:text-base font-light text-justify"
        >
          <div>
            <h2 className="font-display text-lg sm:text-xl font-medium text-[#1A1A1A] mb-3">
              1. Coleta de Informações
            </h2>
            <p>
              Coletamos informações voluntariamente enviadas por você através do nosso botão de contato do WhatsApp ou telefone. Esses dados limitam-se ao nome, número de telefone e mensagens compartilhadas para a finalidade estrita de prestar o atendimento preliminar.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg sm:text-xl font-medium text-[#1A1A1A] mb-3">
              2. Sigilo Profissional e Proteção
            </h2>
            <p>
              Em conformidade com a Lei Geral de Proteção de Dados (LGPD) e o Estatuto da Advocacia da OAB, garantimos absoluto sigilo profissional sobre todas as consultas e dados compartilhados. Nenhuma informação de contato ou relato de caso é vendida, compartilhada ou cedida a terceiros sob qualquer hipótese.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg sm:text-xl font-medium text-[#1A1A1A] mb-3">
              3. Direitos dos Titulares
            </h2>
            <p>
              Você possui direito assegurado de solicitar a correção, eliminação, anonimização ou restrição do tratamento de seus dados a qualquer momento, bastando entrar em contato com nossa equipe administrativa através de nossos canais oficiais de comunicação.
            </p>
          </div>
        </motion.div>

      </div>
    </main>
  )
}
