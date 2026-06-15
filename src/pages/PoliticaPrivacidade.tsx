import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Shield } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function PoliticaPrivacidade() {
  return (
    <>
      <title>Política de Privacidade e Proteção de Dados | Hermano Sousa</title>
      <meta name="description" content="Saiba como tratamos suas informações de contato com absoluto sigilo profissional no Hermano Sousa Advogados Associados." />
      <Header />
      
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
              className="inline-flex items-center gap-2 text-neutral-500 hover:text-[#5C1228] text-xs font-semibold tracking-wider uppercase transition-colors duration-300 group"
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
              <Shield size={14} className="text-[#8B1A3A]" />
              <span className="text-[11px] tracking-[0.3em] uppercase text-[#8B1A3A] font-semibold">
                Conformidade Legal
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-[#1A1A1A] leading-[1.15] mb-6"
            >
              Política de Privacidade e Proteção de Dados
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-lg text-neutral-600 leading-relaxed font-light"
            >
              Conheça nosso compromisso com a segurança, sigilo e transparência no tratamento das suas informações.
            </motion.p>
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
                1. Coleta de Dados
              </h2>
              <p>
                Coletamos apenas as informações estritamente necessárias fornecidas voluntariamente por você através do nosso formulário de contato (Nome, E-mail, Telefone e Área de Interesse) para dar início ao atendimento jurídico personalizado.
              </p>
            </div>

            <div>
              <h2 className="font-display text-lg sm:text-xl font-medium text-[#1A1A1A] mb-3">
                2. Finalidade do Tratamento
              </h2>
              <p>
                Seus dados são utilizados exclusivamente para fins de comunicação, agendamento de consultas analíticas e fundamentação preliminar do seu caso pelas equipes de especialistas do escritório.
              </p>
            </div>

            <div>
              <h2 className="font-display text-lg sm:text-xl font-medium text-[#1A1A1A] mb-3">
                3. Absoluto Sigilo Profissional
              </h2>
              <p>
                Em conformidade com o Estatuto da Advocacia e a Lei Geral de Proteção de Dados (LGPD), seus dados pessoais e relatos são protegidos por segredo profissional intransigente, armazenados em ambiente criptografado e jamais compartilhados com terceiros sem sua autorização expressa.
              </p>
            </div>

            <div>
              <h2 className="font-display text-lg sm:text-xl font-medium text-[#1A1A1A] mb-3">
                4. Direitos do Titular
              </h2>
              <p>
                Você possui o direito legal de solicitar a qualquer momento a confirmação, correção ou exclusão definitiva dos seus dados dos nossos registros de atendimento através do e-mail{' '}
                <a href="mailto:contato@hermanosousa.adv.br" className="text-[#8B1A3A] hover:underline font-normal">
                  contato@hermanosousa.adv.br
                </a>.
              </p>
            </div>
          </motion.div>

        </div>
      </main>

      <Footer />
    </>
  )
}
