import React, { useState, useEffect } from 'react';
import GradientButton from './GradientButton';

const PhoneMockup: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(2 * 60 + 45); // 2 minutes 45 seconds

  useEffect(() => {
    if (timeLeft === 0) return;

    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60).toString().padStart(2, '0');
  const seconds = (timeLeft % 60).toString().padStart(2, '0');

  return (
    <div className="relative w-64 h-[500px] md:w-80 md:h-[580px] bg-gray-100 rounded-[40px] border-8 border-gray-200 shadow-2xl overflow-hidden animate-float">
      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-5 bg-gray-100 rounded-b-xl"></div>
      <div className="absolute top-0 left-0 w-full h-full p-2">
        <div className="w-full h-full bg-cover bg-center rounded-[32px] flex flex-col items-center justify-between p-6" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1513690229444-538411a84f37?q=80&w=400&h=800&auto=format&fit=crop)` }}>
          <div className="bg-white/50 backdrop-blur-md rounded-xl p-3 text-center w-full">
              <p className="text-sm font-bold text-gray-600">DAILY MISSION</p>
              <h3 className="text-xl font-bold text-black">Snap a funniest face you can make!</h3>
          </div>
          <div className="w-36 h-36 rounded-full border-4 border-dashed border-white/60 flex items-center justify-center bg-white/20 backdrop-blur-sm">
              <span className="text-6xl">🤪</span>
          </div>
          <div className="bg-white/50 backdrop-blur-md rounded-xl p-3 text-center w-full">
              <div className="text-lg font-bold text-black">{minutes}:{seconds} remaining</div>
          </div>
        </div>
      </div>
    </div>
  );
};


const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center pt-24 pb-12 relative">
      <div className="container mx-auto px-6 text-center lg:text-left">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 flex flex-col items-center lg:items-start z-10">
            <h1 className="text-5xl md:text-7xl font-extrabold font-poppins leading-tight mb-4">
              Join the Moment.
              <br/>
              <span className="gradient-text">Play Together.</span>
              <br/>
              Flik Now!
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-lg mb-4">
              내가 만든 AR 필터로 친구들과 동시에 참여하는 실시간 챌린지!
            </p>
            <p className="text-lg md:text-xl text-gray-600 max-w-lg mb-8">
              Flik이 나오면 알려드릴게요.
            </p>
            <GradientButton className="text-lg" href="https://docs.google.com/forms/d/1tsJOdnOUH9skMKROcuevlgHmf-sxjenV9UcyzaXDBhU/edit">Flik을 가장 먼저 플레이하세요!</GradientButton>
          </div>
          <div className="lg:w-1/2 flex justify-center lg:justify-end z-10">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;