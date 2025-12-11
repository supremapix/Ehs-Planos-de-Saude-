import React, { useState, useRef, useEffect } from 'react';
import { Send, Loader2, AlertCircle } from 'lucide-react';
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
  
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const validateField = (name: string, value: any) => {
    let error = '';
    
    switch (name) {
      case 'name':
        if (!value.trim()) error = 'Nome completo é obrigatório.';
        else if (value.trim().split(' ').length < 2) error = 'Digite seu nome e sobrenome.';
        break;
      case 'phone':
        const phoneDigits = value.replace(/\D/g, '');
        if (!value) error = 'WhatsApp é obrigatório.';
        else if (phoneDigits.length < 10) error = 'Número de telefone inválido.';
        break;
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value) error = 'E-mail é obrigatório.';
        else if (!emailRegex.test(value)) error = 'Digite um e-mail válido.';
        break;
      case 'birthDate':
        if (!value) error = 'Data de nascimento é obrigatória.';
        break;
      case 'agreeTerms':
        if (!value) error = 'Você deve concordar com os termos.';
        break;
      default:
        break;
    }
    return error;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error immediately on change
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    if (error) {
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setFormData(prev => ({ ...prev, agreeTerms: checked }));
    if (checked && errors.agreeTerms) {
      setErrors(prev => ({ ...prev, agreeTerms: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors: { [key: string]: string } = {};
    Object.keys(formData).forEach(key => {
      // @ts-ignore
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);
    
    // Simulate loading for better UX
    setTimeout(() => {
      openWhatsApp(formData);
      setIsLoading(false);
      setFormData({
          name: '',
          phone: '',
          email: '',
          birthDate: '',
          planType: 'Plano Familiar',
          message: '',
          agreeTerms: false
      });
    }, 1500);
  };

  return (
    <section id="contato" className="py-20 bg-gray-100" ref={sectionRef}>
      <div className={`container mx-auto px-4 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          
          {/* Info Side */}
          <div className="lg:w-1/2 space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#006d77] via-[#003f44] to-[#006d77] animate-gradient-text">Solicite Sua Cotação Gratuita</h2>
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

            {/* Google Maps Embed */}
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
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#006d77] to-[#d9ed92]"></div>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nome Completo *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-[#006d77] focus:border-transparent outline-none transition-all ${errors.name ? 'border-red-500 bg-red-50' : 'border-gray-300'}`}
                    placeholder="Seu nome e sobrenome"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12}/> {errors.name}</p>}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">WhatsApp *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-[#006d77] outline-none ${errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-300'}`}
                      placeholder="(DD) 99999-9999"
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12}/> {errors.phone}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nascimento *</label>
                    <input
                      type="date"
                      name="birthDate"
                      value={formData.birthDate}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-[#006d77] outline-none text-gray-600 ${errors.birthDate ? 'border-red-500 bg-red-50' : 'border-gray-300'}`}
                    />
                     {errors.birthDate && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12}/> {errors.birthDate}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">E-mail *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-[#006d77] outline-none ${errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'}`}
                    placeholder="seu@email.com"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12}/> {errors.email}</p>}
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

                <div>
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="terms"
                      checked={formData.agreeTerms}
                      onChange={handleCheckbox}
                      className={`mt-1 w-4 h-4 text-[#006d77] rounded focus:ring-[#006d77] ${errors.agreeTerms ? 'border-red-500 ring-1 ring-red-500' : ''}`}
                    />
                    <label htmlFor="terms" className={`text-xs ${errors.agreeTerms ? 'text-red-500' : 'text-gray-500'}`}>
                      Concordo em receber contato da EHS Planos de Saúde via WhatsApp e E-mail. 
                      Seus dados estão seguros e não serão compartilhados com terceiros.
                    </label>
                  </div>
                  {errors.agreeTerms && <p className="text-red-500 text-xs mt-1 ml-7">{errors.agreeTerms}</p>}
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