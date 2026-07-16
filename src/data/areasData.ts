export interface SectionDetail {
  title?: string
  content: string[]
  type?: 'h2' | 'h3' | 'p'
}

export interface FaqDetail {
  question: string
  answer: string
}

export interface AreaInfo {
  slug: string
  title: string
  subtitle: string
  explanation: string
  howWeHelp: string[]
  whatsappMessage: string
  seoTitle: string
  seoDescription: string
  sections: SectionDetail[]
  faqs: FaqDetail[]
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
    whatsappMessage: 'Olá! Gostaria de conversar com um especialista em Direito Previdenciário e Aposentadoria.',
    seoTitle: 'Advogado Previdenciário em Camaçari - BA | Hermano Sousa',
    seoDescription: 'Precisa de ajuda com aposentadoria ou benefício do INSS em Camaçari - BA? Fale com o Dr. Hermano Sousa. Planejamento previdenciário estratégico e revisão de benefícios.',
    sections: [
      {
        title: 'Planejamento Previdenciário em Camaçari e Região Metropolitana',
        type: 'h2',
        content: [
          'O planejamento previdenciário não é apenas um demonstrativo de tempo de contribuição; é um estudo técnico multidisciplinar altamente personalizado. Nas cidades de Camaçari, Salvador, Lauro de Freitas e no Polo Industrial da RMS, milhares de trabalhadores realizam contribuições em períodos diversos e sob diferentes regimes, muitas vezes perdendo o controle de tempos especiais, recolhimentos incorretos ou lacunas no CNIS.',
          'Um planejamento de aposentadoria estratégico visa identificar essas inconsistências antes de fazer o requerimento oficial junto ao INSS. Nosso escritório analisa de ponta a ponta cada contrato de trabalho, salários de contribuição de carnês, períodos de recolhimento como autônomo, serviço militar e atividade rural. Ao final, apresentamos um laudo detalhado projetando em qual regra de transição o segurado terá o maior retorno financeiro com o menor tempo de espera.'
        ]
      },
      {
        title: 'Aposentadoria Especial para Trabalhadores da Indústria e Saúde',
        type: 'h2',
        content: [
          'A região de Camaçari e o Polo Petroquímico abrigam uma grande concentração de trabalhadores expostos a agentes nocivos químicos, físicos e biológicos. Se você atua ou já atuou como operador de painel, engenheiro químico, mecânico de manutenção, enfermeiro, técnico de radiologia ou vigilante armado, você pode ter direito à Aposentadoria Especial ou à conversão de tempo especial em comum.',
          'A comprovação de exposição a agentes nocivos (como ruído acima dos limites legais, calor extremo, hidrocarbonetos ou patógenos) requer documentação técnica impecável, com destaque para o Perfil Profissiográfico Previdenciário (PPP) e o Laudo Técnico de Condições Ambientais do Trabalho (LTCAT). O escritório Hermano Sousa Advogados Associados analisa esses laudos com rigor técnico e, caso contenham erros ou omissões cometidos pelas empresas, ingressamos com as medidas adequadas para garantir o enquadramento do seu direito.'
        ]
      },
      {
        title: 'Benefícios por Incapacidade e BPC/LOAS no INSS',
        type: 'h2',
        content: [
          'Quando um cidadão é acometido por uma doença grave ou sofre um acidente que o impede temporariamente ou permanentemente de trabalhar, ele deve recorrer aos benefícios por incapacidade do INSS: Auxílio por Incapacidade Temporária (antigo auxílio-doença) ou Aposentadoria por Incapacidade Permanente (antiga invalidez). Contudo, a realização da perícia médica federal tem se mostrado um grande obstáculo para muitos segurados.',
          'Nossa atuação jurídica assegura a montagem de um dossiê médico completo e incontestável, reunindo laudos, exames de imagem, relatórios de evolução clínica e receitas atualizadas que comprovem a real limitação funcional. Paralelamente, prestamos assistência integral para a concessão do BPC/LOAS (Benefício de Prestação Continuada) para idosos acima de 65 anos ou pessoas com deficiência em situação de vulnerabilidade socioeconômica na região de Camaçari e municípios vizinhos, superando negativas do INSS baseadas em cálculos de renda familiar incorretos.'
        ]
      },
      {
        title: 'Revisão de Aposentadoria e Teses de Alto Valor',
        type: 'h2',
        content: [
          'Muitos aposentados recebem um valor mensal muito abaixo do que realmente deveriam. Isso ocorre porque o INSS frequentemente falha na aplicação das melhores regras de cálculo, deixa de computar salários de contribuição mais antigos, ignora sentenças de reclamações trabalhistas ganhas ou deixa de converter períodos especiais trabalhados em indústrias petroquímicas ou de manufatura da região.',
          'Realizamos auditorias de benefícios concedidos nos últimos 10 anos para identificar teses de revisão de aposentadoria viáveis, incluindo a inclusão de tempo especial, reconhecimento de atividade rural da infância, tempo de serviço militar, e inclusão de verbas trabalhistas reconhecidas judicialmente. Nosso compromisso é restabelecer a justiça financeira do segurado que contribuiu ao longo de toda uma vida ativa.'
        ]
      }
    ],
    faqs: [
      {
        question: 'O que mudou na Aposentadoria com a Reforma da Previdência?',
        answer: 'A Reforma da Previdência (EC 103/2019) extinguiu a antiga aposentadoria por tempo de contribuição pura e criou regras de transição (pedágio de 50%, pedágio de 100%, pontos, idade mínima progressiva). Agora, é obrigatório atingir uma idade mínima associada ao tempo de contribuição, e a fórmula de cálculo passou a considerar a média de 100% dos salários de contribuição desde julho de 1994, reduzindo drasticamente o valor final para quem se aposenta sem planejamento prévio.'
      },
      {
        question: 'Quem trabalhou no Polo Petroquímico de Camaçari tem direito a tempo especial?',
        answer: 'Sim. Quem atuou exposto a calor, ruído elevado, poeiras minerais ou agentes químicos nocivos inerentes ao refino e produção petroquímica tem direito a enquadramento de tempo especial. Esse tempo especial pode ser usado para obter a Aposentadoria Especial (aos 25 anos de exposição) ou ser convertido em tempo comum com acréscimo de 40% para homens e 20% para mulheres (para períodos trabalhados até 13/11/2019), antecipando consideravelmente a aposentadoria comum.'
      },
      {
        question: 'Como solicitar o benefício do BPC/LOAS em Camaçari e Salvador?',
        answer: 'Para ter direito ao BPC/LOAS (no valor de um salário mínimo mensal), o solicitante deve possuir idade igual ou superior a 65 anos ou deficiência física, mental, intelectual ou sensorial de longo prazo. Além disso, a família deve estar inscrita no CadÚnico com cadastro atualizado nos últimos 2 anos e possuir renda mensal por pessoa de até 1/4 do salário mínimo (embora a justiça aceite rendas superiores se houver gastos elevados com remédios e fraldas).'
      },
      {
        question: 'O INSS negou meu benefício por incapacidade (Auxílio-Doença). O que posso fazer?',
        answer: 'Se o INSS indeferiu o benefício sob a justificativa de "não constatação de incapacidade", você tem o direito de ingressar com uma ação judicial. Na justiça federal, você passará por uma perícia médica com um perito especialista na sua doença (diferente do INSS, onde o perito é clínico geral). O índice de reversão de negativas na via judicial é extremamente elevado quando o processo é instruído com o dossiê de laudos correto.'
      }
    ]
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
    whatsappMessage: 'Olá! Gostaria de conversar com um especialista em Direito Trabalhista.',
    seoTitle: 'Advogado Trabalhista em Camaçari - BA | Hermano Sousa',
    seoDescription: 'Defesa especializada dos direitos do trabalhador em Camaçari e Região Metropolitana. Reclamações trabalhistas, rescisões, horas extras e FGTS. Agende sua consulta.',
    sections: [
      {
        title: 'Direitos do Trabalhador e Ações Trabalhistas em Camaçari e Região',
        type: 'h2',
        content: [
          'A Consolidação das Leis do Trabalho (CLT) garante uma série de proteções essenciais ao trabalhador brasileiro, mas o descumprimento de direitos contratuais por parte dos empregadores ainda é muito frequente. Na Região Metropolitana de Salvador (RMS), o polo de comércio, serviços, saúde e indústrias apresenta dinâmicas contratuais complexas que muitas vezes mascaram abusos contra o trabalhador.',
          'Nossa equipe avalia contratos de trabalho com precisão cirúrgica. Atuamos na cobrança de verbas rescisórias não pagas, liberação do saldo do FGTS com a respectiva multa de 40%, seguro-desemprego, aviso prévio indenizado, férias vencidas e décimo terceiro proporcional. Elaboramos petições detalhadas com memória de cálculo exata para evitar discrepâncias e assegurar uma liquidação contratual justa na Justiça do Trabalho.'
        ]
      },
      {
        title: 'Horas Extras, Intervalos e Adicionais de Insalubridade e Periculosidade',
        type: 'h2',
        content: [
          'As jornadas de trabalho excessivas sem o devido pagamento de horas extras são um dos principais motivos de litígio trabalhista. Analisamos detalhadamente cartões de ponto, escalas de revezamento e relatórios de jornada para identificar fraudes comuns, como a proibição de registro de horas excedentes, banco de horas ilegal ou falsas enquadrações em "cargos de confiança" para burlar o pagamento de horas extras.',
          'Além disso, para profissionais do comércio, indústria petroquímica, metalúrgicos, eletricistas e vigilantes da região de Lauro de Freitas, Simões Filho e Camaçari, o recebimento do Adicional de Insalubridade ou do Adicional de Periculosidade é um direito fundamental. Mapeamos os riscos do ambiente ocupacional para comprovar a presença de agentes químicos, inflamáveis ou perigosos e garantir a incidência correta dos adicionais de 10%, 20%, 40% ou 30% sobre o salário do trabalhador.'
        ]
      },
      {
        title: 'Acidente de Trabalho e Doenças Ocupacionais Graves (LER/DORT)',
        type: 'h2',
        content: [
          'Um acidente ocorrido no exercício do trabalho ou o surgimento de uma doença profissional decorrente de esforço repetitivo ou estresse extremo (como Síndrome de Burnout, depressão grave, LER/DORT, hérnias de disco ou problemas articulares) geram graves reflexos físicos e profissionais na vida do trabalhador.',
          'A legislação trabalhista garante estabilidade provisória no emprego de no mínimo 12 meses após a alta médica do INSS, além do direito à reparação civil por danos materiais (como reembolso de gastos médicos e tratamentos) e danos morais pela falha da empresa em fornecer um ambiente de trabalho ergonomicamente seguro e salubre. Nossos profissionais lutam nos tribunais para restabelecer a dignidade do acidentado e assegurar as devidas pensões vitais e indenizações civis correspondentes.'
        ]
      },
      {
        title: 'Rescisão Indireta do Contrato de Trabalho: O Pedido de Demissão Sem Prejuízos',
        type: 'h2',
        content: [
          'Muitas vezes, o trabalhador enfrenta uma situação insustentável na empresa: atrasos constantes de salários, falta de recolhimento do FGTS por meses, assédio moral continuado, metas impossíveis ou exigência de tarefas alheias às contratadas. Sob essas condições, o trabalhador não é obrigado a pedir demissão comum e abrir mão de suas indenizações.',
          'A legislação prevê a Rescisão Indireta (popularmente conhecida como a "justa causa aplicada ao empregador"). Através de ação judicial específica, comprovamos as faltas graves cometidas pela chefia, o que possibilita a saída do trabalhador garantindo o saque integral do FGTS com a multa de 40%, recebimento de aviso prévio e seguro-desemprego, exatamente como se ele tivesse sido demitido sem justa causa.'
        ]
      }
    ],
    faqs: [
      {
        question: 'Qual o prazo limite para ingressar com uma ação trabalhista?',
        answer: 'De acordo com a Constituição Federal, o trabalhador tem o prazo de até 2 (dois) anos após a data da demissão ou saída da empresa para propor uma reclamação trabalhista. Dentro dessa ação, é possível cobrar os direitos referentes aos últimos 5 (cinco) anos contados a partir da data de protocolo do processo na justiça.'
      },
      {
        question: 'Como comprovar que sofro assédio moral no ambiente de trabalho?',
        answer: 'O assédio moral caracteriza-se por condutas abusivas, humilhações ou pressões psicológicas repetitivas promovidas por superiores ou colegas. Para comprovar em juízo, você pode utilizar mensagens de WhatsApp, e-mails corporativos, gravações de conversas onde você participa, testemunhas que presenciaram os fatos e prontuários médicos/psicológicos que demonstrem o adoecimento mental relacionado ao emprego.'
      },
      {
        question: 'O que é a estabilidade gestacional e quando ela começa?',
        answer: 'A empregada gestante tem direito à estabilidade provisória no emprego desde o momento da concepção (início da gravidez) até 5 (cinco) meses após o parto. Isso significa que ela não pode ser demitida sem justa causa durante este período. Caso ocorra a demissão sem que a empresa soubesse da gravidez, a gestante tem o direito de ser reintegrada ou receber indenização substitutiva correspondente a todos os salários do período.'
      },
      {
        question: 'Como funciona a indenização por acidente de trabalho?',
        answer: 'A indenização exige a comprovação do dano sofrido e do nexo de causalidade com o trabalho. Ela engloba: 1) Danos Morais pela dor física e abalo psíquico; 2) Danos Materiais (despesas médicas e medicamentos); 3) Lucros Cessantes ou Pensão Mensal Vitalícia proporcional à perda da capacidade de trabalho, calculada com base no salário que a vítima recebia.'
      }
    ]
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
    whatsappMessage: 'Olá! Gostaria de conversar com um especialista em Direito do Consumidor.',
    seoTitle: 'Direito do Consumidor e Fraudes | Camaçari - BA',
    seoDescription: 'Proteção integral contra abusos de bancos, juros abusivos, negativações indevidas e fraudes financeiras em Camaçari - BA. Fale com um especialista.',
    sections: [
      {
        title: 'Defesa contra Práticas Abusivas e Negativações Indevidas',
        type: 'h2',
        content: [
          'A inscrição do nome de um cidadão nos órgãos de proteção ao crédito como SPC e Serasa de forma injusta ou indevida gera severos constrangimentos. Muitas vezes, operadoras de telefonia, instituições financeiras, concessionárias de energia e água inserem restrições cadastrais sem que o cliente tenha qualquer contrato pendente ou com base em contas geradas após o pedido de cancelamento do serviço.',
          'Nossa equipe ingressa com ações judiciais imediatas contendo pedido de tutela de urgência (liminar) para determinar a retirada imediata do seu nome dos cadastros de restrição (limpar nome). Concomitantemente, postulamos a condenação da empresa infratora ao pagamento de indenização por danos morais pela restrição indevida do crédito, cuja ofensa é reconhecida presumidamente (dano moral in re ipsa) pela jurisprudência.'
        ]
      },
      {
        title: 'Fraudes Bancárias, Golpes do Pix e Empréstimos Consignados Indevidos',
        type: 'h2',
        content: [
          'Com a digitalização das contas bancárias, multiplicaram-se os golpes financeiros e vazamentos de dados de consumidores. Os alvos mais frequentes são aposentados e pensionistas do INSS de Camaçari e Salvador, que se deparam com descontos mensais em seus holerites referentes a "empréstimos consignados não solicitados". Essas operações financeiras são feitas sem anuência ou mediante assinaturas digitais fraudadas.',
          'Protegemos o patrimônio do consumidor exigindo judicialmente o cancelamento imediato do contrato fraudulento, a devolução em dobro de cada parcela descontada ilegalmente da aposentadoria, e a indenização correspondente aos transtornos gerados pela falha de segurança do banco. Também assessoramos vítimas do golpe do Pix, golpes do boleto falso e saques clonados em caixas eletrônicos, cobrando a responsabilidade objetiva das instituições.'
        ]
      },
      {
        title: 'Contratos Abusivos, Juros Elevados e Defesas nos Planos de Saúde',
        type: 'h2',
        content: [
          'Contratos de adesão oferecidos por concessionárias de veículos, cooperativas de crédito e imobiliárias de Camaçari e região metropolitana muitas vezes ocultam cláusulas ilegais, como taxas de corretagem indevidas, multas contratuais exorbitantes para rescisão, cumulação ilegal de tarifas e cobrança de juros capitalizados acima da média de mercado.',
          'Da mesma forma, atuamos com rapidez em face de abusos cometidos por operadoras de planos de saúde, obtendo liminares rápidas para assegurar cirurgias negadas, fornecimento de tratamentos especializados home care, terapias para autismo (método ABA) e cancelamento de reajustes abusivos por mudança de faixa etária ou reajustes anuais sem base técnica idônea.'
        ]
      }
    ],
    faqs: [
      {
        question: 'O que fazer se meu nome for negativado por uma dívida que já paguei ou desconheço?',
        answer: 'Você deve reunir os comprovantes de pagamento da fatura ou, caso desconheça o contrato, demonstrar a ausência de relação jurídica. Guarde números de protocolos de atendimento e acione imediatamente um advogado especialista. O ingresso de ação judicial com pedido de liminar garante a limpeza provisória do nome em poucos dias e a abertura de processo de indenização por danos morais.'
      },
      {
        question: 'O banco depositou um empréstimo consignado na minha conta sem eu pedir. O que faço?',
        answer: 'Não utilize o dinheiro depositado. A primeira medida é entrar em contato com o banco via SAC/Ouvidoria para solicitar o cancelamento e a emissão de boleto para devolução do valor. Caso o banco dificulte ou continue descontando parcelas do seu benefício do INSS, providenciamos judicialmente a suspensão dos descontos com pedido de indenização moral e restituição dobrada dos valores apropriados pelo banco.'
      },
      {
        question: 'Qual o prazo de arrependimento para compras feitas pela internet?',
        answer: 'De acordo com o Artigo 49 do Código de Defesa do Consumidor (CDC), para compras ou contratação de serviços realizadas fora do estabelecimento comercial físico (via internet, telefone ou em domicílio), o consumidor possui o prazo de até 7 (sete) dias, contados a partir da assinatura ou do recebimento do produto, para exercer o direito de arrependimento, cancelando a compra e recebendo a devolução integral de qualquer valor pago.'
      }
    ]
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
    whatsappMessage: 'Olá! Gostaria de conversar com um especialista em Direito de Família e Sucessões.',
    seoTitle: 'Inventários e Divórcios em Camaçari - BA | Hermano Sousa',
    seoDescription: 'Assessoria jurídica em divórcios, partilha de bens, pensão alimentícia e inventários em Camaçari - BA. Atendimento humanizado e especializado.',
    sections: [
      {
        title: 'Divórcio Consensual, Divórcio Litigioso e Partilha de Bens',
        type: 'h2',
        content: [
          'A dissolução de um casamento ou união estável é uma das etapas mais sensíveis na trajetória de uma família. Conduzimos esses processos pautados no respeito às pessoas envolvidas e na firmeza da divisão de bens. Quando há concordância mútua e não existem filhos menores ou incapazes, estruturamos o Divórcio Extrajudicial diretamente em cartório de Camaçari, Salvador ou Lauro de Freitas, garantindo rapidez e custos tributários reduzidos.',
          'Em situações litigiosas, onde há discordância sobre a partilha do patrimônio (imóveis, empresas, investimentos financeiro), defendemos zelosamente os direitos do nosso cliente. Realizamos investigações patrimoniais detalhadas para identificar possíveis ocultações de bens pelo ex-cônjuge e assegurar que a divisão seja feita em estrito alinhamento com o regime de bens acordado (comunhão parcial, comunhão universal ou separação total de bens).'
        ]
      },
      {
        title: 'Inventários Judiciais, Extrajudiciais e Planejamento Sucessório',
        type: 'h2',
        content: [
          'A perda de um familiar traz consigo a necessidade de regularizar a transmissão do patrimônio para os herdeiros legais por meio do inventário. O atraso na abertura do processo de inventário pode gerar multas tributárias elevadas de ITD (Imposto sobre Transmissão Causa Mortis e Doação) cobradas pela Fazenda Estadual da Bahia. Atuamos com celeridade para formalizar partilhas extrajudiciais e defender herdeiros em inventários judiciais complexos.',
          'Com foco preventivo, ajudamos famílias de produtores, empresários e detentores de patrimônio a desenhar instrumentos de Planejamento Sucessório, tais como doações em vida com reserva de usufruto, testamentos personalizados e a constituição de Holdings Familiares. Essas medidas reduzem custos cartorários futuros, evitam o desgaste de processos judiciais de inventário que arrastam-se por décadas e protegem o patrimônio de disputas familiares.'
        ]
      },
      {
        title: 'Pensão Alimentícia, Guarda de Filhos e Alienação Parental',
        type: 'h2',
        content: [
          'O bem-estar e o sustento material dos filhos são as maiores prioridades nas decisões após a separação dos pais. Assessoramos na fixação judicial de Pensão Alimentícia que equilibre as necessidades da criança com as possibilidades do genitor responsável pelo pagamento. Ingressamos prontamente com Execuções de Alimentos para cobrar mensalidades atrasadas sob pena de prisão civil do devedor ou penhora de seus bens.',
          'Adicionalmente, atuamos na definição do regime de Guarda Compartilhada e convivência familiar, sempre preservando o superior interesse da criança. Oferecemos defesa especializada em casos graves de Alienação Parental, atuando com assessoria de laudos psicológicos e periciais para restabelecer a convivência e proteger a integridade emocional e psicológica dos menores envolvidos.'
        ]
      }
    ],
    faqs: [
      {
        question: 'Quanto tempo leva para finalizar um divórcio extrajudicial em cartório?',
        answer: 'O divórcio extrajudicial em cartório é o método mais célere disponível. Caso o casal esteja em consenso, não possua filhos menores ou incapazes e já conte com a partilha de bens definida, a escritura pública de divórcio pode ser lavrada e assinada em poucos dias (geralmente entre 1 e 2 semanas).'
      },
      {
        question: 'Qual o valor padrão fixado pela Justiça para a pensão alimentícia?',
        answer: 'Não existe um percentual fixo definido em lei (como os frequentemente citados "30% do salário"). A justiça define o valor com base no binômio Necessidade (da criança) e Possibilidade (dos pais). Avalia-se o custo com moradia, alimentação, educação, saúde e lazer da criança, cruzando com a capacidade financeira de quem pagará a pensão.'
      },
      {
        question: 'Qual o prazo limite para iniciar o inventário após o falecimento?',
        answer: 'De acordo com o Código de Processo Civil, o inventário deve ser instaurado dentro do prazo de até 60 (sessenta) dias, contados a partir da data de abertura da sucessão (falecimento). O descumprimento desse prazo não impede a realização do inventário, mas sujeita os herdeiros ao pagamento de multa sobre o ITD calculada pelo Estado.'
      }
    ]
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
    whatsappMessage: 'Olá! Gostaria de conversar com um specialist em Direito Civil e Imobiliário.',
    seoTitle: 'Advogado Civil em Camaçari - BA | Hermano Sousa',
    seoDescription: 'Advocacia cível e imobiliária em Camaçari - BA. Contratos de alta complexidade, posse, usucapião e cobranças. Proteja seu patrimônio.',
    sections: [
      {
        title: 'Assessoria em Contratos Cíveis e Negócios Imobiliários',
        type: 'h2',
        content: [
          'Negócios imobiliários e transações comerciais exigem um alto nível de conformidade contratual para evitar prejuízos irreparáveis. Nas áreas em forte expansão urbana e comercial, como Lauro de Freitas, Camaçari (região de Alphaville e Linha Verde) e Salvador, assessoramos compradores e vendedores na realização de Due Diligence Imobiliária abrangente.',
          'Esta análise técnica preventiva consiste no levantamento minucioso de certidões cíveis, fiscais, trabalhistas e criminais dos proprietários e na auditoria do histórico de registros do imóvel para garantir que a aquisição seja segura e livre de passivos, prevenindo fraudes contra credores ou penhoras futuras. Redigimos e negociamos contratos sob medida de compra, venda, locação comercial e parcerias.'
        ]
      },
      {
        title: 'Ações Possessórias, Regularização de Imóveis e Usucapião',
        type: 'h2',
        content: [
          'A regularização da posse e propriedade de imóveis urbanos e rurais na Bahia é uma demanda técnica altamente específica. Atuamos na propositura e defesa de Ações de Reintegração de Posse, Imissão na Posse, Manutenção de Posse e Interdito Proibitório para defender a propriedade privada de invasões ou turbações de terceiros.',
          'Também somos especialistas na regularização da propriedade de imóveis sem escritura pública definitiva através de procedimentos de Usucapião (Judicial ou Extrajudicial em cartório), adjudicação compulsória e retificação de áreas. Garantimos a nossos clientes a conversão segura da mera posse em propriedade formal devidamente registrada no Cartório de Registro de Imóveis competente.'
        ]
      },
      {
        title: 'Cobrança de Dívidas, Execuções de Títulos e Responsabilidade Civil',
        type: 'h2',
        content: [
          'Recuperar créditos inadimplidos e cobrar obrigações contratuais vencidas exige agilidade e conhecimento técnico das vias judiciais mais eficientes. Ingressamos com Ações de Execução de Título Extrajudicial (cheques, notas promissórias, contratos assinados por testemunhas) e Ações Monitórias para obter o bloqueio eletrônico de contas e penhora de patrimônio de devedores.',
          'Além disso, atuamos na área de Responsabilidade Civil, demandando indenizações completas por danos materiais (danos emergentes e lucros cessantes) e danos morais resultantes de acidentes automobilísticos graves, erro médico de profissionais de saúde, vazamento de dados confidenciais e violação de obrigações contratuais na região de Camaçari e adjacências.'
        ]
      }
    ],
    faqs: [
      {
        question: 'O que é a Due Diligence Imobiliária e por que ela é importante?',
        answer: 'É uma auditoria jurídica preventiva realizada antes da compra de um imóvel. Ela serve para verificar se o imóvel possui gravames (como penhoras, hipotecas ou processos) e se o vendedor tem dívidas trabalhistas, fiscais ou cíveis que possam anular o negócio no futuro por "fraude à execução". A realização da due diligence é indispensável para comprovar a boa-fé do comprador.'
      },
      {
        question: 'Quais os requisitos básicos para ingressar com uma ação de Usucapião?',
        answer: 'Os requisitos básicos são: a posse do imóvel de forma mansa, pacífica (sem oposição de terceiros), contínua (sem interrupções) e com "animus domini" (comportar-se como se fosse o real dono). O tempo exigido de posse varia de 5 a 15 anos, a depender da modalidade de usucapião aplicável (urbano, rural, ordinário, extraordinário).'
      },
      {
        question: 'Como funciona o processo de cobrança judicial de um contrato inadimplido?',
        answer: 'Caso o contrato esteja assinado por duas testemunhas, ele é considerado um Título Extrajudicial. O processo de Execução intima o devedor para pagar a dívida em 3 (três) dias, sob pena de penhora imediata de dinheiro em contas bancárias via sistema SisbaJud, penhora de veículos via RenaJud ou leilão de imóveis de sua propriedade.'
      }
    ]
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
    whatsappMessage: 'Olá! Gostaria de conversar com um especialista em Direito Empresarial.',
    seoTitle: 'Advogado Empresarial em Camaçari - BA | Hermano Sousa',
    seoDescription: 'Assessoria jurídica societária, holding familiar e planejamento patrimonial para empresas em Camaçari - BA. Blindagem patrimonial de excelência.',
    sections: [
      {
        title: 'Assessoria Societária e Acordos de Sócios sob Medida',
        type: 'h2',
        content: [
          'A estruturação societária correta é a base para o crescimento sustentável de qualquer empreendimento. Nas cidades de Camaçari (que possui forte veia industrial), Salvador e Lauro de Freitas, assessoramos empresas de médio e grande porte desde a sua constituição, desenhando Contratos Sociais e Estatutos específicos para a natureza do negócio.',
          'Desenvolvemos Acordos de Sócios (ou Acordos de Acionistas) robustos para regulamentar a entrada e saída de parceiros comerciais, regras de votação para decisões críticas, fórmulas de avaliação e apuração de haveres em caso de retirada de sócios, e cláusulas de Tag-Along e Drag-Along. Esses contratos preventivos mitigam o risco de disputas corporativas internas que paralisam a empresa.'
        ]
      },
      {
        title: 'Holding Familiar e Blindagem Patrimonial de Excelência',
        type: 'h2',
        content: [
          'Muitos empresários expõem indevidamente seus bens pessoais (imóveis residenciais, investimentos e veículos) aos riscos inerentes às suas operações comerciais cotidianas. Através de um planejamento de Blindagem Patrimonial legal, estruturamos Holdings Familiares para segregar o patrimônio operacional dos ativos imobiliários da família.',
          'Essa modelagem empresarial, associada a cláusulas de inalienabilidade, incomunicabilidade e impenhorabilidade, confere uma barreira jurídica sólida que protege os bens particulares de riscos civis, trabalhistas e tributários do negócio. Além disso, a Holding funciona como o principal instrumento de Planejamento Sucessório, otimizando os custos com imposto ITD e facilitando a transmissão do comando corporativo para as próximas gerações.'
        ]
      },
      {
        title: 'Fusões, Aquisições (M&A), Contratos Comerciais e LGPD',
        type: 'h2',
        content: [
          'Apoiaremos sua empresa em processos de Fusões e Aquisições (M&A), realizando auditorias jurídicas de Due Diligence Corporativa para avaliar com exatidão os passivos trabalhistas, fiscais, previdenciários e cíveis ocultos do negócio-alvo antes da aquisição definitiva.',
          'Assessoramos ainda na conformidade jurídica com a LGPD (Lei Geral de Proteção de Dados), adequando termos de uso, políticas de privacidade, contratos com colaboradores e parceiros de tecnologia para prevenir multas administrativas severas aplicadas pela ANPD e proteger a reputação corporativa frente a vazamentos de dados de clientes.'
        ]
      }
    ],
    faqs: [
      {
        question: 'O que é uma Holding Familiar e quais as suas vantagens?',
        answer: 'É uma empresa constituída com o objetivo de administrar e controlar os bens de uma família (como imóveis, carros e outras empresas). Suas principais vantagens são: 1) Blindagem patrimonial contra riscos e processos do negócio operacional; 2) Redução da carga tributária sobre aluguéis e vendas de imóveis; 3) Facilidade na sucessão patrimonial, evitando litígios e os altos custos do processo judicial de inventário.'
      },
      {
        question: 'Como funciona o Acordo de Sócios e por que ele é indispensável?',
        answer: 'O Acordo de Sócios é um contrato parassocial e privado que disciplina a relação entre os proprietários da empresa. Nele são inseridos direitos de preferência em compra de cotas, regramento sobre dissolução da sociedade, distribuição de lucros, governança interna e critérios de avaliação de cotas (Valuation), evitando o fechamento da empresa ou processos intermináveis em caso de briga entre sócios.'
      },
      {
        question: 'A desconsideração da personalidade jurídica pode atingir meus bens pessoais?',
        answer: 'Sim. Em casos de abuso da personalidade jurídica, caracterizado pelo desvio de finalidade (uso da empresa para fraudar credores) ou pela confusão patrimonial (pagamento de contas de casa com o cartão da empresa), a justiça pode desconsiderar a personalidade jurídica da empresa e determinar a penhora direta de bens pessoais dos sócios para pagar as dívidas corporativas.'
      }
    ]
  }
}
