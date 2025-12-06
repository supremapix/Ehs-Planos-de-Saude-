import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Plans from './components/Plans';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import Networks from './components/Networks';
import Urgency from './components/Urgency';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import CookieBanner from './components/CookieBanner';
import LeadMagnet from './components/LeadMagnet';
import ExitPopup from './components/ExitPopup';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden selection:bg-[#006d77] selection:text-white">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <LeadMagnet />
        <Plans />
        <Urgency />
        <Networks />
        <Stats />
        <Testimonials />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <CookieBanner />
      <ExitPopup />
    </div>
  );
};

export default App;