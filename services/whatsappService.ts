import { COMPANY_INFO } from '../constants';
import { FormData } from '../types';

export const generateWhatsAppLink = (data?: FormData): string => {
  const baseUrl = `https://api.whatsapp.com/send?phone=${COMPANY_INFO.whatsapp}`;

  if (!data) {
    return `${baseUrl}&text=${encodeURIComponent("Olá! Gostaria de saber mais sobre os planos de saúde.")}`;
  }

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

export const openWhatsApp = (data?: FormData) => {
  const url = generateWhatsAppLink(data);
  window.open(url, '_blank');
};