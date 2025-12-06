import React, { useState } from 'react';
import { Send, Loader2 } from 'lucide-react';
import { PLANS } from '../constants';
import { openWhatsApp } from '../services/whatsappService';
import { FormData } from '../types';

const ContactForm: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    birthDate: '',
    planType: 'Plano Familiar',
    message: '',
    agreeTerms: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, agreeTerms: e.target.checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreeTerms) {
      alert('Você precisa concordar com os termos de privacidade.');
      return;
    }

    setIsLoading(true);
    
    // Simulate loading for better UX
    setTimeout(() => {
      openWhatsApp(formData);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <section id="contato" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          
          {/* Info Side */}
          <div className="lg:w-1/2 space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-[#006d77] mb-4">Solicite Sua Cotação Gratuita</h2>
              <p className="text-gray-600 text-lg">
                Preencha o formulário e um de nossos especialistas entrará em contato via WhatsApp em instantes com a melhor proposta para você.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-[#e63946]">
              <h4 className="font-bold text-gray-800 mb-2">Por que cotar conosco?</h4>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Atendimento humanizado</li>
                <li>✓ Melhor custo-benefício do mercado</li>
                <li>✓ Pós-venda dedicado</li>
              </ul>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-1/2">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#006d77] to-[#d9ed92]"></div>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#006d77] focus:border-transparent outline-none transition-all"
                    placeholder="Seu nome aqui"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">WhatsApp</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#006d77] outline-none"
                      placeholder="(DD) 99999-9999"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nascimento</label>
                    <input
                      type="date"
                      name="birthDate"
                      required
                      value={formData.birthDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#006d77] outline-none text-gray-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#006d77] outline-none"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Tipo de Plano</label>
                  <select
                    name="planType"
                    value={formData.planType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#006d77] outline-none bg-white"
                  >
                    {PLANS.map(plan => (
                      <option key={plan.id} value={plan.title}>{plan.title}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Mensagem (Opcional)</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#006d77] outline-none resize-none"
                    placeholder="Alguma dúvida específica?"
                  ></textarea>
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="terms"
                    required
                    checked={formData.agreeTerms}
                    onChange={handleCheckbox}
                    className="mt-1 w-4 h-4 text-[#006d77] rounded focus:ring-[#006d77]"
                  />
                  <label htmlFor="terms" className="text-xs text-gray-500">
                    Concordo em receber contato da EHS Planos de Saúde via WhatsApp e E-mail. 
                    Seus dados estão seguros e não serão compartilhados com terceiros.
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-[#006d77] hover:bg-[#005a63] text-white font-bold py-4 rounded-xl shadow-lg transition-all hover:shadow-xl flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed group"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="animate-spin" /> Processando...
                    </>
                  ) : (
                    <>
                      ENVIAR PARA WHATSAPP
                      <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;