import React from 'react';
import Header from './components/layout/Header';
import StatsSection from './components/stats/StatsSection';
import ServicesSection from './components/services/ServicesSection';
import TestimonialsSection from './components/testimonials/TestimonialsSection';
import FAQSection from './components/faq/FAQSection';
import LocationsSection from './components/locations/LocationsSection';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <StatsSection />
      <ServicesSection />
      <TestimonialsSection />
      <FAQSection />
      <LocationsSection />
      <Footer />
    </div>
  );
}

export default App;