import React from 'react';
import { User, Users, Briefcase, Building2, HeartPulse } from 'lucide-react';
import { PlanType, FAQItem, StatItem } from './types';

export const COMPANY_INFO = {
  name: 'EHS Planos de Saúde',
  // Substitua este link pela URL da sua logo real ou coloque o arquivo na pasta public
  logo: 'https://placehold.co/250x80/transparent/006d77?text=EHS+Corretora&font=roboto', 
  logoWhite: 'https://placehold.co/250x80/transparent/white?text=EHS+Corretora&font=roboto',
  phone: '(41) 99245-7239',
  whatsapp: '5541992457239', // Format for API
  whatsappDisplay: '(41) 99245-7239',
  address: 'Estrada Velha do Barigui, 407 - Cidade Industrial de Curitiba - PR, 81250-460',
  schedule: 'Seg-Sex: 08h-18h | Sáb: 08h-12h',
  email: 'contato@ehsplanosdesaude.com.br',
  siteUrl: 'https://www.ehssaude.com.br'
};

export const COLORS = {
  primary: '#006d77',
  secondary: '#003f44',
  accent: '#e63946',
  light: '#f2f2f2',
  lightGreen: '#d9ed92',
};

// --- LISTAS DE SEO LOCAL ---

export const BAIRROS_CURITIBA = [
  "Vila Parolin", "Vila Torres", "Jardim Schaffer", "Vila Sabará", "Boqueirão de Baixo", 
  "Boqueirão de Cima", "Tanguá", "Vila Zumbi", "Abranches de Baixo", "Abranches de Cima", 
  "Vila Nossa Senhora da Luz", "Vila Tecnológica", "Vila Oficinas", "Vila Fanny", "Vila Hauer", 
  "Batel Soho", "Alto da Rua XV", "CIC Norte", "CIC Central", "CIC Sul", "Vila Guaíra", 
  "Centro Histórico", "Ecoville", "Carmo Abranches", "Água Verde", "Ahú (Alto da Glória)", 
  "Alto Boqueirão", "Alto da Glória", "Alto da XV", "Atuba", "Augusta", "Bacacheri", 
  "Bairro Alto", "Barreirinha", "Batel", "Bigorrilho (Champagnat)", "Boa Vista", "Bom Retiro", 
  "Boqueirão", "Butiatuvinha", "Cabral", "Cachoeira", "Cajuru", "Campina do Siqueira", 
  "Campo Comprido", "Campo de Santana", "Capão da Imbuia", "Capão Raso", "Cascatinha", 
  "Caximba", "Centro", "Centro Cívico", "Cidade Industrial de Curitiba (CIC)", "Cristo Rei", 
  "Fanny", "Fazendinha", "Ganchinho", "Guabirotuba", "Guaíra", "Hauer", "Hugo Lange", 
  "Jardim Botânico", "Jardim das Américas", "Jardim Social", "Juvevê", "Lamenha Pequena", 
  "Lindóia", "Mercês", "Mossunguê", "Novo Mundo", "Orleans", "Parolin", "Pilarzinho", 
  "Pinheirinho", "Portão", "Prado Velho", "Rebouças", "Riviera", "Santa Cândida", 
  "Santa Felicidade", "Santa Quitéria", "Santo Inácio", "São Braz", "São Francisco", 
  "São João", "São Lourenço", "São Miguel", "Vila Pantanal", "Seminário", "Sítio Cercado", 
  "Taboão", "Tarumã", "Tatuquara", "Tingui", "Uberaba", "Umbará", "Vila Izabel", 
  "Vista Alegre", "Xaxim", "Santa Quitéria Velha", "Portão Velho", "Guaíra Velho", 
  "Uberaba de Cima", "Uberaba de Baixo", "São Braz Velho", "Vila Verde", "Vila Barigui", 
  "Caiuá", "Xaxim Velho", "Fazendinha-Portão", "Campo Comprido Velho", "Bacacheri Velho", 
  "Capão da Imbuia Velho", "Pinheirinho Velho", "Vila São Pedro (Uberaba)", 
  "Vila Osternack (Sítio Cercado)", "Conjunto Caiuá (CIC)", "Conjunto Parigot de Souza (CIC)", 
  "Vila Reno (CIC)", "Vila Audi (CIC)"
];

export const CIDADES_RMC = [
  "Adrianópolis", "Agudos do Sul", "Almirante Tamandaré", "Araucária", "Balsa Nova", 
  "Bocaiúva do Sul", "Campina Grande do Sul", "Campo do Tenente", "Campo Largo", 
  "Campo Magro", "Cerro Azul", "Colombo", "Contenda", "Doutor Ulysses", "Fazenda Rio Grande", 
  "Itaperuçu", "Lapa", "Mandirituba", "Piên", "Pinhais", "Piraquara", "Quatro Barras", 
  "Quitandinha", "Rio Branco do Sul", "Rio Negro", "São José dos Pinhais", 
  "Tijucas do Sul", "Tunas do Paraná", "Curitiba"
];

// --- FIM SEO LOCAL ---

export const PLANS: PlanType[] = [
  {
    id: 'individual',
    title: 'Plano Individual',
    icon: <User className="w-10 h-10" />,
    description: 'Para você que busca cuidado personalizado e total atenção à sua saúde.',
  },
  {
    id: 'familiar',
    title: 'Plano Familiar',
    icon: <Users className="w-10 h-10" />,
    description: 'Proteção completa para toda a família com descontos progressivos.',
    highlight: true,
  },
  {
    id: 'senior',
    title: 'Plano Sênior',
    icon: <HeartPulse className="w-10 h-10" />,
    description: 'Atendimento especializado e carinhoso para a terceira idade.',
  },
  {
    id: 'mei',
    title: 'Plano MEI',
    icon: <Briefcase className="w-10 h-10" />,
    description: 'Condições especiais e redução de carência para microempreendedores.',
  },
  {
    id: 'empresarial',
    title: 'Plano Empresarial',
    icon: <Building2 className="w-10 h-10" />,
    description: 'Saúde para toda sua equipe, aumentando a produtividade da sua empresa.',
  },
];

export const FAQS: FAQItem[] = [
  {
    question: 'Como contratar um plano de saúde individual?',
    answer: 'Para contratar, basta apresentar RG, CPF e comprovante de residência. Nossos consultores guiam você por todo o processo digitalmente, sem necessidade de sair de casa.',
  },
  {
    question: 'Quem pode aderir ao Plano Familiar?',
    answer: 'Cônjuges, filhos (naturais ou adotivos) e enteados. Em alguns casos, dependentes financeiros também podem ser incluídos, garantindo proteção para todos que você ama.',
  },
  {
    question: 'O que é preciso para contratar o plano MEI?',
    answer: 'É necessário ter um CNPJ MEI ativo há pelo menos 6 meses. O plano MEI oferece tabelas de preços até 40% mais baratas que o pessoa física e ampla rede credenciada.',
  },
  {
    question: 'Posso aproveitar a carência do meu plano anterior?',
    answer: 'Sim! Realizamos o processo de compra de carência (portabilidade) se você já possui um plano ativo. Analisamos seu caso para reduzir ou isentar totalmente os prazos.',
  },
  {
    question: 'O que é carência de plano de saúde?',
    answer: 'É o período que você precisa aguardar para utilizar determinados procedimentos após a contratação. Em urgências e emergências, a carência é de apenas 24h conforme lei.',
  },
  {
    question: 'O plano cobre parto e obstetrícia?',
    answer: 'Sim, dependendo da segmentação contratada (Hospitalar com Obstetrícia). Nossos consultores podem indicar as melhores opções para quem planeja aumentar a família.',
  },
  {
    question: 'Como funciona o reajuste das mensalidades?',
    answer: 'Os reajustes ocorrem anualmente (aniversário do contrato) e por mudança de faixa etária. Tudo é regulamentado pela ANS e consta claramente no contrato.',
  },
  {
    question: 'O que é rede credenciada?',
    answer: 'É o conjunto de médicos, laboratórios, clínicas e hospitais que atendem pelo seu plano sem custo adicional (dependendo da categoria).',
  },
  {
    question: 'Existe fidelidade no contrato?',
    answer: 'Para planos empresariais e MEI, geralmente há um contrato de 12 meses. Planos individuais podem ter regras específicas. Consulte nossa equipe para detalhes do seu plano de interesse.',
  },
  {
    question: 'Como recebo minha carteirinha?',
    answer: 'Hoje a maioria das operadoras trabalha com carteirinha digital via aplicativo, que fica disponível logo após a implantação do contrato. Você acessa tudo pelo celular.',
  },
];

export const STATS: StatItem[] = [
  { label: 'Famílias Atendidas', value: 10000, suffix: '+', duration: 2000 },
  { label: 'Hospitais Credenciados', value: 50, suffix: '+', duration: 2000 },
  { label: 'Satisfação dos Clientes', value: 98, suffix: '%', duration: 2000 },
];

export const NAV_LINKS = [
  { name: 'Início', href: '/' },
  { name: 'Benefícios', href: '/#beneficios' },
  { name: 'Planos', href: '/#planos' },
  { name: 'Depoimentos', href: '/#depoimentos' },
  { name: 'FAQ', href: '/#faq' },
  { name: 'Mapa do Site', href: '/sitemap' },
  { name: 'Contato', href: '/#contato' },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Roberto Almeida',
    role: 'Plano Familiar',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    text: 'A contratação foi super rápida! O atendimento via WhatsApp me ajudou a tirar todas as dúvidas e escolhi o melhor plano para minha esposa e filhos.',
  },
  {
    id: 2,
    name: 'Ana Cláudia Souza',
    role: 'Plano MEI',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80',
    text: 'Como microempreendedora, precisava de um custo acessível. A EHS conseguiu reduzir minha carência e o preço ficou excelente.',
  },
  {
    id: 3,
    name: 'Carlos Oliveira',
    role: 'Plano Sênior',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
    text: 'Fui muito bem atendido. O respeito e a paciência da equipe em explicar os detalhes para a terceira idade fizeram toda a diferença.',
  },
  {
    id: 4,
    name: 'Mariana Costa',
    role: 'Plano Individual',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
    text: 'A rede credenciada é ótima, consegui marcar meus exames no laboratório perto de casa na mesma semana que contratei.',
  }
];