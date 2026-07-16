import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Founder from '@/components/sections/Founder'
import PracticeAreas from '@/components/sections/PracticeAreas'
import Differentials from '@/components/sections/Differentials'
import Process from '@/components/sections/Process'
import Team from '@/components/sections/Team'
import Solutions from '@/components/sections/Solutions'
// import Gallery from '@/components/sections/Gallery'
import Location from '@/components/sections/Location'
import Faq from '@/components/sections/Faq'
import CtaFinal from '@/components/sections/CtaFinal'
import { useSEO } from '@/hooks/useSEO'

export default function Home() {
  // ─── Inject home page SEO and Schemas ───
  useSEO({
    title: 'Hermano Sousa Advogados Associados | Camaçari, Salvador e RMS',
    description:
      'Escritório de advocacia especializado em Direito Previdenciário (aposentadorias, INSS) e Direito Trabalhista. Atendimento premium presencial e online em Camaçari, Salvador, Lauro de Freitas, Simões Filho e toda RMS.',
    canonicalUrl: 'https://hermanosousa.adv.br/',
    schemas: [
      // 1. WebSite Schema
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        'name': 'Hermano Sousa Advogados Associados',
        'url': 'https://hermanosousa.adv.br/',
        'potentialAction': {
          '@type': 'SearchAction',
          'target': 'https://hermanosousa.adv.br/?s={search_term_string}',
          'query-input': 'required name=search_term_string',
        },
      },
      // 2. Organization Schema
      {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        'name': 'Hermano Sousa Advogados Associados',
        'url': 'https://hermanosousa.adv.br/',
        'logo': 'https://hermanosousa.adv.br/logo.png',
        'sameAs': ['https://www.instagram.com/drhermanosousaadv/'],
      },
      // 3. LegalService Schema
      {
        '@context': 'https://schema.org',
        '@type': 'LegalService',
        'name': 'Hermano Sousa Advogados Associados',
        'image': 'https://hermanosousa.adv.br/og-image.jpg',
        'telephone': '+557136218023',
        'url': 'https://hermanosousa.adv.br/',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': 'Rua Adelina de Souza, Centro',
          'addressLocality': 'Camaçari',
          'addressRegion': 'BA',
          'postalCode': '42800-000',
          'addressCountry': 'BR',
        },
        'geo': {
          '@type': 'GeoCoordinates',
          'latitude': -12.6975,
          'longitude': -38.3241,
        },
        'openingHoursSpecification': {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          'opens': '08:00',
          'closes': '18:00',
        },
        'areaServed': [
          'Camaçari',
          'Salvador',
          'Lauro de Freitas',
          'Simões Filho',
          'Dias d\'Ávila',
          'Candeias',
          'Mata de São João',
          'Região Metropolitana de Salvador',
        ],
      },
      // 4. Person Schema (Founder)
      {
        '@context': 'https://schema.org',
        '@type': 'Person',
        'name': 'Dr. Hermano Francisco de Sousa',
        'jobTitle': 'Advogado e Sócio Fundador',
        'worksFor': {
          '@type': 'LegalService',
          'name': 'Hermano Sousa Advogados Associados',
        },
        'url': 'https://hermanosousa.adv.br/',
        'sameAs': ['https://www.instagram.com/drhermanosousaadv/'],
      },
      // 5. FAQPage Schema
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'Como funciona o Planejamento Previdenciário?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'É um estudo técnico minucioso que analisa todo o seu histórico de contribuições para definir a regra de transição mais vantajosa da Reforma, garantindo que você se aposente com o maior valor de benefício possível no menor tempo de espera.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Quais documentos preciso para dar entrada em um benefício do INSS?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Os documentos fundamentais são RG, CPF, comprovante de residência atualizado, além de provas do histórico profissional como Carteiras de Trabalho (CTPS), CNIS e, em casos de insalubridade, o Perfil Profissiográfico Previdenciário (PPP).',
            },
          },
          {
            '@type': 'Question',
            'name': 'O escritório atende clientes de outras regiões além de Camaçari?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Sim. Dispomos de uma infraestrutura digital avançada e segura que permite o atendimento e o peticionamento de processos em nível nacional, garantindo a mesma excelência e proximidade técnica tanto no formato online quanto no presencial em nossa sede.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Quanto tempo demora para sair um benefício previdenciário ou processo trabalhista?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'O tempo varia de acordo com a complexidade e se a análise é administrativa (INSS) ou judicial. Realizamos auditorias prévias rigorosas para protocolar pedidos impecáveis, o que reduz drasticamente o tempo de espera e aumenta as chances de aprovação rápida.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Posso entrar com o pedido de aposentadoria sozinho ou preciso de um advogado?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'O cidadão pode solicitar diretamente, porém, a ausência de um especialista frequentemente resulta em benefícios negados, cálculos errados ou escolha da regra de transição menos vantajosa, gerando prejuízos financeiros para o resto da vida.',
            },
          },
          {
            '@type': 'Question',
            'name': 'O que acontece se eu for demitido e não receber minhas verbas rescisórias?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'O trabalhador tem o direito de buscar a reparação legal imediatamente através de uma ação trabalhista. Nosso escritório realiza o cálculo exato de cada centavo devido (horas extras, aviso prévio, FGTS e multas) para garantir o recebimento integral do seu patrimônio de direito.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Como funciona a cobrança dos honorários advocatícios no escritório?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Atuamos com total transparência sob o modelo de ética da OAB. Na grande maioria das ações previdenciárias e trabalhistas, os honorários contratuais são atrelados ao êxito da causa, ou seja, o cliente só paga quando o benefício ou a indenização forem efetivamente liberados.',
            },
          },
        ],
      },
    ],
  })

  return (
    <main id="main-content">
      <Hero />
      <About />
      <Founder />
      <Team />
      <PracticeAreas />
      <Differentials />
      <Process />
      <Solutions />
      {/* <Gallery /> */}
      <Location />
      <Faq />
      <CtaFinal />
    </main>
  )
}
