import React from 'react';

interface GradientButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
}

const GradientButton: React.FC<GradientButtonProps> = ({ children, className = '', onClick, href }) => {
  const baseClasses = 'bg-gradient-to-r from-[#FF4BC3] to-[#C04BFF] text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-pink-300 whitespace-nowrap';

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClasses} inline-block text-center ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${className}`}
    >
      {children}
    </button>
  );
};

export default GradientButton;