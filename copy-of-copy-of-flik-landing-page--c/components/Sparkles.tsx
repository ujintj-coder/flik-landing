
import React from 'react';

const Sparkle: React.FC<{ style: React.CSSProperties }> = ({ style }) => (
  <div
    className="absolute rounded-full bg-gray-800 animate-sparkle"
    style={style}
  ></div>
);

const Sparkles: React.FC = () => {
  const sparkleData = [
    { top: '10%', left: '10%', size: '3px', delay: '0s' },
    { top: '20%', left: '80%', size: '2px', delay: '0.2s' },
    { top: '50%', left: '15%', size: '4px', delay: '0.5s' },
    { top: '80%', left: '90%', size: '3px', delay: '0.8s' },
    { top: '30%', left: '30%', size: '2px', delay: '0.3s' },
    { top: '65%', left: '50%', size: '3px', delay: '0.6s' },
    { top: '90%', left: '20%', size: '2px', delay: '1s' },
    { top: '5%', left: '50%', size: '4px', delay: '0.1s' },
  ];

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
      {sparkleData.map((s, i) => (
        <Sparkle
          key={i}
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            animationDelay: s.delay,
          }}
        />
      ))}
    </div>
  );
};

export default Sparkles;
