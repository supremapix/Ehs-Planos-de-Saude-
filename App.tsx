import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
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
import BackToTop from './components/BackToTop';
import LocationPage from './components/LocationPage';
import Sitemap from './components/Sitemap';
import Curiosities from './components/Curiosities';

// Home Component wrapper to keep clean routing
const HomePage = () => (
  <>
    <Hero />
    <Benefits />
    <LeadMagnet />
    <Plans />
    <Urgency />
    <Networks />
    <Stats />
    <Testimonials />
    <Curiosities />
    <FAQ />
    <ContactForm />
  </>
);

const App: React.FC = () => {
  const { pathname, hash } = useLocation();

  // Handle Scroll to Anchor logic with React Router
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden selection:bg-[#006d77] selection:text-white">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sitemap" element={<Sitemap />} />
          {/* Rotas Dinâmicas de SEO */}
          <Route path="/plano-de-saude/:slug" element={<LocationPage type="bairro" />} />
          <Route path="/cidade/:slug" element={<LocationPage type="cidade" />} />
        </Routes>
      </main>
      <Footer />
      <FloatingWhatsApp />
      <BackToTop />
      <CookieBanner />
      <ExitPopup />
    </div>
  );
};

export default App;