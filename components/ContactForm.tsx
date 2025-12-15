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
              <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#0f0f23] via-[#22c55e] to-[#0f0f23] animate-gradient-text">Solicite Sua Cotação Gratuita</h2>
              <p className="text-gray-600 text-lg">
                Preencha o formulário e um de nossos especialistas entrará em contato via WhatsApp em instantes com a melhor proposta para você.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-[#22c55e]">
              <h4 className="font-bold text-gray-800 mb-2">Por que cotar conosco?</h4>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Atendimento humanizado</li>
                <li>✓ Melhor custo-benefício do mercado</li>
                <li>✓ Pós-venda dedicado</li>
              </ul>
            </div>

            {/* Google Maps Embed - Placeholder as per request integration */}
            <div className="rounded-xl overflow-hidden shadow-sm h-64 border border-gray-200">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.441951502476!2d-49.349607824610115!3d-25.45691237754593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce1f1c7e96b51%3A0x6a0c0e0e0e0e0e0e!2sEstr.%20Velha%20do%20Barigui%2C%20407%20-%20Cidade%20Industrial%20de%20Curitiba%2C%20Curitiba%20-%20PR%2C%2081250-460!5e0!3m2!1spt-BR!2sbr!4v1709900000000!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização EHS Planos de Saúde"
              ></iframe>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-1/2">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#0f0f23] to-[#22c55e]"></div>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#22c55e] focus:border-transparent outline-none transition-all"
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
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#22c55e] outline-none"
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
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#22c55e] outline-none text-gray-600"
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
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#22c55e] outline-none"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Tipo de Plano</label>
                  <select
                    name="planType"
                    value={formData.planType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#22c55e] outline-none bg-white"
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
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#22c55e] outline-none resize-none"
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
                    className="mt-1 w-4 h-4 text-[#22c55e] rounded focus:ring-[#22c55e]"
                  />
                  <label htmlFor="terms" className="text-xs text-gray-500">
                    Concordo em receber contato da EHS Planos de Saúde via WhatsApp e E-mail. 
                    Seus dados estão seguros e não serão compartilhados com terceiros.
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold py-4 rounded-xl shadow-lg transition-all hover:shadow-xl flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed group"
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