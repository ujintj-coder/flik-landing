
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import HowItWorksSection from './components/HowItWorksSection';
import FeaturesSection from './components/FeaturesSection';
import CreativeHubSection from './components/CreativeHubSection';
import CallToActionSection from './components/CallToActionSection';
import Footer from './components/Footer';
import Sparkles from './components/Sparkles';

const App: React.FC = () => {
  return (
    <div className="bg-white text-[#121212] overflow-x-hidden antialiased relative">
      <Sparkles />
      <Header />
      <main>
        <HeroSection />
        <HowItWorksSection />
        <FeaturesSection />
        <CreativeHubSection />
        <CallToActionSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
