import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import AboutDoctor from './components/AboutDoctor/AboutDoctor';
import Services from './components/Services/Services';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import HowItWorks from './components/HowItWorks/HowItWorks';
import ServiceAreas from './components/ServiceAreas/ServiceAreas';
import Testimonials from './components/Testimonials/Testimonials';
import FAQ from './components/FAQ/FAQ';
import Contact from './components/Contact/Contact';

const App: React.FC = () => {
  return (
    <div className="font-body text-textPrimary">
      <Navbar />
      <main className="space-y-20">
        <Hero />
        <AboutDoctor />
        <Services />
        <WhyChooseUs />
        <HowItWorks />
        <ServiceAreas />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
