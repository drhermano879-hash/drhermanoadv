export interface AreaInfo {
  slug: string
  title: string
  subtitle: string
  explanation: string
  howWeHelp: string[]
  whatsappMessage: string
}

export const areasData: Record<string, AreaInfo> = {
  'direito-previdenciario': {
    slug: 'direito-previdenciario',
    title: 'Especialista em Direito Previdenciário e Planejamento de Aposentadorias',
    subtitle: 'Inteligência estratégica para garantir o valor máximo do seu benefício e proteger o seu futuro.',
    explanation: 'O cenário pós-Reforma da Previdência exige uma análise cirúrgica do histórico de contribuições. Atuamos na vanguarda do direito constitucional e previdenciário, desatando nós burocráticos do INSS e aplicando as regras de transição mais vantajosas para cada perfil de segurado. Nossa metodologia inclui a realização de auditorias detalhadas do CNIS (Cadastro Nacional de Informações Sociais) e a projeção de múltiplos cenários para garantir a melhor data e o melhor coeficiente de cálculo.',
    howWeHelp: [
      'Planejamento Previdenciário Estratégico (Cálculo de Tempo, Contribuições e Valor)',
      'Concessão de Aposentadoria Especial (Insalubridade, Periculosidade e Agentes Nocivos)',
      'Revisão da Vida Toda e Teses Revisionais de Alto Valor Jurisprudencial',
      'Encaminhamento de Benefícios por Incapacidade (Auxílio-Doença, Invalidez, Auxílio-Acidente) e BPC-LOAS',
      'Defesa em Processos Administrativos de Suspensão ou Cancelamento de Benefício (Pente-Fino)'
    ],
    whatsappMessage: 'Olá! Gostaria de conversar com um especialista em Direito Previdenciário e Aposentadoria.'
  },
  'direito-trabalhista': {
    slug: 'direito-trabalhista',
    title: 'Advocacia Trabalhista Estratégica e Corporativa',
    subtitle: 'Defesa rigorosa dos direitos do trabalhador e conformidade legal nas relações de emprego.',
    explanation: 'Atuamos com foco no restabelecimento do equilíbrio legal entre empregado e empregador. Analisamos minuciosamente contratos de trabalho, jornadas, folhas de pagamento e ambientes operacionais para identificar desvios, passivos ocultos e garantir indenizações justas de acordo com a CLT. Nossa equipe é especializada no contencioso trabalhista de alta complexidade para executivos, cargos de confiança e profissionais de alta gerência, assegurando o recebimento correto de bônus, stock options e parcelas variáveis.',
    howWeHelp: [
      'Cálculo e Reclamatória Trabalhista para Verbas Rescisórias Retidas e FGTS',
      'Ações sobre Horas Extras, Cargo de Confiança, Intervalos e Reconhecimento de Vínculo Oculto',
      'Processos por Assédio Moral, Sexual, Discriminação ou Danos à Dignidade do Trabalhador',
      'Indenizações por Acidentes de Trabalho, LER/DORT e Doenças Ocupacionais Graves',
      'Defesa de Profissionais Liberais, Médicos, Bancários e Engenheiros em Contratos Especiais'
    ],
    whatsappMessage: 'Olá! Gostaria de conversar com um especialista em Direito Trabalhista.'
  },
  'direito-do-consumidor': {
    slug: 'direito-do-consumidor',
    title: 'Defesa e Proteção Integral do Consumidor',
    subtitle: 'Combate a abusos corporativos, fraudes financeiras e falhas graves na prestação de serviços.',
    explanation: 'Asseguramos a aplicação literal do Código de Defesa do Consumidor (CDC) frente a práticas abusivas de grandes conglomerados, bancos, seguradoras e concessionárias de serviço público. Nossa atuação visa a reparação imediata de danos materiais e morais sofridos pelo cidadão, com foco na restituição de valores cobrados indevidamente, cancelamento de cobranças fraudulentas e cumprimento forçado de ofertas contratuais.',
    howWeHelp: [
      'Ações contra Negativações Indevidas nos Órgãos de Proteção ao Crédito (SPC/Serasa) com Pedido de Liminar',
      'Indenizações por Fraudes Bancárias, Empréstimos Consignados Não Solicitados, Pix Indevido e Golpes',
      'Processos por Falha na Prestação de Serviços (Aéreo, Overbooking, Extravio de Bagagem, Telefonia e Planos de Saúde)',
      'Responsabilidade Civil por Vícios, Defeitos de Fabricação e Avarias em Produtos de Alto Valor',
      'Ações Revisionais de Juros Abusivos em Contratos de Financiamento e Cartões de Crédito'
    ],
    whatsappMessage: 'Olá! Gostaria de conversar com um especialista em Direito do Consumidor.'
  },
  'direito-de-familia': {
    slug: 'direito-de-familia',
    title: 'Direito de Família e Sucessões com Foco Humanizado',
    subtitle: 'Soluções jurídicas discretas e eficientes para a proteção e organização do patrimônio familiar.',
    explanation: 'Conduzimos demandas familiares com o máximo de discrição, técnica e acolhimento humano. Priorizamos a mediação estratégica para mitigar o desgaste emocional e acelerar a resolução consensual, mas atuamos com absoluto rigor litigioso nos tribunais quando a proteção dos direitos dos filhos ou a blindagem do patrimônio assim o exigir. Ajudamos a planejar a sucessão familiar de forma a evitar conflitos entre herdeiros e reduzir a carga tributária.',
    howWeHelp: [
      'Divórcio Consensual ou Litigioso (Judicial e Extrajudicial em Cartório)',
      'Planejamento Sucessório, Inventários Complexos, Testamentos e Partilha de Bens',
      'Fixação, Execução e Revisional de Alimentos (Pensão Alimentícia)',
      'Regulamentação de Guarda Compartilhada, Alienação Parental e Regime de Convivência Familiar',
      'Elaboração de Pacto Antenupcial, Contrato de União Estável e Dissolução de Sociedade de Fato'
    ],
    whatsappMessage: 'Olá! Gostaria de conversar com um especialista em Direito de Família e Sucessões.'
  },
  'direito-civil': {
    slug: 'direito-civil',
    title: 'Direito Civil, Contratos e Direito Imobiliário',
    subtitle: 'Segurança contratual e mitigação de riscos em negócios cíveis e transações de imóveis.',
    explanation: 'O Direito Civil é a espinha dorsal das relações civis cotidianas e corporativas. Atuamos na elaboração, revisão e execução de contratos cíveis complexos, na defesa de direitos proprietários, posse, usucapião, e nas relações condominiais. Nossa assessoria preventiva é estruturada para conferir total previsibilidade e blindagem jurídica a transações de compra, venda, permuta e locação de imóveis de luxo.',
    howWeHelp: [
      'Análise de Riscos (Due Diligence) em Aquisições Imobiliárias e Leilões',
      'Elaboração de Contratos Customizados de Compra, Venda, Locação, Cessão e Doação',
      'Ações Possessórias (Reintegração, Imissão na Posse, Interdito Proibitório e Usucapião)',
      'Cobrança Judicial de Dívidas, Execuções de Título e Recuperação de Ativos Financeiros',
      'Pareceres de Responsabilidade Civil e Ações de Reparação por Danos Contratuais'
    ],
    whatsappMessage: 'Olá! Gostaria de conversar com um especialista em Direito Civil e Imobiliário.'
  },
  'direito-empresarial': {
    slug: 'direito-empresarial',
    title: 'Direito Empresarial, Societário e Planejamento Tributário',
    subtitle: 'Modelagem societária sob medida, blindagem patrimonial e governança de riscos para empresas.',
    explanation: 'Apoiamos fundadores, sócios e acionistas na concepção estrutural e operacional de suas empresas. Redigimos estatutos e acordos de acionistas estratégicos, estruturamos processos de reorganização societária (fusões, cisões, aquisições) e implementamos defesas sólidas no contencioso corporativo. Nossos especialistas atuam ainda na revisão de obrigações tributárias para identificar oportunidades legais de elisão fiscal.',
    howWeHelp: [
      'Elaboração de Acordo de Sócios, Memorando de Entendimento (MoU) e Contratos Sociais',
      'Planejamento Sucessório Empresarial (Holding Familiar e Proteção Patrimonial)',
      'Assessoria em Fusões, Aquisições (M&A) e Negociações de Participação Societária',
      'Defesa de Sócios em Ações de Dissolução de Sociedade e Apuração de Haveres',
      'Consultoria para Prevenção de Riscos Regulatórios, LGPD e Contratos Comerciais'
    ],
    whatsappMessage: 'Olá! Gostaria de conversar com um especialista em Direito Empresarial.'
  }
}
