import { COMPANY_INFO } from '../constants';
import { FormData } from '../types';

export const generateWhatsAppLink = (data?: FormData | string): string => {
  const baseUrl = `https://api.whatsapp.com/send?phone=${COMPANY_INFO.whatsapp}`;

  // Se passar apenas uma string (para CTAs diretos e iscas)
  if (typeof data === 'string') {
    return `${baseUrl}&text=${encodeURIComponent(data)}`;
  }

  if (!data) {
    // Mensagem padrão atualizada conforme solicitação
    const defaultMessage = "Olá achei seu *site no Google!*";
    return `${baseUrl}&text=${encodeURIComponent(defaultMessage)}`;
  }

  // Se for o objeto FormData completo
  const message = `
Olá! Vim do site e gostaria de solicitar uma cotação.

*Meus dados:*
👤 Nome: ${data.name}
📱 Telefone: ${data.phone}
📧 E-mail: ${data.email}
🎂 Data Nascimento: ${data.birthDate}
📋 Plano de Interesse: ${data.planType}
💬 Mensagem: ${data.message || 'Sem mensagem adicional'}

Aguardo retorno!
`.trim();

  return `${baseUrl}&text=${encodeURIComponent(message)}`;
};

export const openWhatsApp = (data?: FormData | string) => {
  const url = generateWhatsAppLink(data);
  window.open(url, '_blank');
};