import React from 'react';
import GradientButton from './GradientButton';

const CallToActionSection: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="text-6xl mb-6 animate-bounce">📱</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Don't wait.
            <br />
            <span className="gradient-text">Flik the Moment!</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Be part of the next big thing. Download Flik and start playing with your friends today.
          </p>
          <GradientButton className="cta-flik-btn text-xl px-10 py-4" data-cta="flik" href="https://docs.google.com/forms/d/1tsJOdnOUH9skMKROcuevlgHmf-sxjenV9UcyzaXDBhU/edit">Flik을 가장 먼저 플레이하세요!</GradientButton>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;