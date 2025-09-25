import React from 'react';
import GradientButton from './GradientButton';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200/50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold font-poppins gradient-text">
          Flik!
        </h1>
        <div className="hidden sm:block">
            <GradientButton href="https://docs.google.com/forms/d/1tsJOdnOUH9skMKROcuevlgHmf-sxjenV9UcyzaXDBhU/edit">Flik을 가장 먼저 플레이하세요!</GradientButton>
        </div>
      </div>
    </header>
  );
};

export default Header;