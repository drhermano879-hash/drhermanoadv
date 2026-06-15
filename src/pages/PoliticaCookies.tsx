import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Shield } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function PoliticaCookies() {
  return (
    <>
      <title>Política de Cookies | Hermano Sousa</title>
      <meta name="description" content="Informações transparentes sobre como utilizamos cookies para otimizar e personalizar sua experiência de navegação em nosso site." />
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
                Navegação Segura
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-[#1A1A1A] leading-[1.15] mb-6"
            >
              Política de Cookies
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-lg text-neutral-600 leading-relaxed font-light"
            >
              Transparência sobre o uso de tecnologias de navegação para otimizar sua experiência digital.
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
                1. O que são Cookies
              </h2>
              <p>
                Cookies são pequenos arquivos de texto armazenados no seu navegador para coletar informações anônimas de tráfego e usabilidade, ajudando-nos a compreender como a interface é utilizada.
              </p>
            </div>

            <div>
              <h2 className="font-display text-lg sm:text-xl font-medium text-[#1A1A1A] mb-3">
                2. Como os Utilizamos
              </h2>
              <p>
                Utilizamos cookies estritamente necessários para o funcionamento correto de recursos do site (como a persistência e restauração da posição do seu scroll ao retornar à Home) e cookies analíticos (como Google Analytics) para mensurar a performance de acessos e otimizar nosso carregamento.
              </p>
            </div>

            <div>
              <h2 className="font-display text-lg sm:text-xl font-medium text-[#1A1A1A] mb-3">
                3. Gestão de Cookies
              </h2>
              <p>
                Você possui total liberdade para configurar, bloquear ou limpar os cookies diretamente nas opções de privacidade do seu navegador a qualquer momento, ciente de que a desativação de certas funções pode limitar alguns recursos de usabilidade interativa do site.
              </p>
            </div>
          </motion.div>

        </div>
      </main>

      <Footer />
    </>
  )
}
