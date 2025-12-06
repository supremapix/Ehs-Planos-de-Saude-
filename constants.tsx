import React from 'react';
import { User, Users, Briefcase, Building2, HeartPulse } from 'lucide-react';
import { PlanType, FAQItem, StatItem } from './types';

export const COMPANY_INFO = {
  name: 'EHS Planos de Saúde',
  phone: '(41) 98738-1792',
  whatsapp: '5541987381792', // Format for API
  whatsappDisplay: '(41) 98738-1792',
  address: 'Estrada Velha do Barigui, 407 - Cidade Industrial de Curitiba - PR, 81250-460',
  schedule: 'Seg-Sex: 08h-18h | Sáb: 08h-12h',
  email: 'contato@ehsplanosdesaude.com.br'
};

export const COLORS = {
  primary: '#006d77',
  secondary: '#003f44',
  accent: '#e63946',
  light: '#f2f2f2',
  lightGreen: '#d9ed92',
};

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
  { name: 'Início', href: '#hero' },
  { name: 'Benefícios', href: '#beneficios' },
  { name: 'Planos', href: '#planos' },
  { name: 'Depoimentos', href: '#depoimentos' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contato', href: '#contato' },
];