import React, { useState, useEffect } from 'react';

const FeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  children?: React.ReactNode;
}> = ({ icon, title, description, children }) => (
  <div className="bg-white p-8 rounded-3xl border border-gray-200 flex flex-col shadow-sm">
    <div className="flex items-center mb-4">
      <div className="text-2xl mr-4">{icon}</div>
      <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
    </div>
    <p className="text-gray-600 mb-6 flex-grow">{description}</p>
    {children}
  </div>
);

const ArFilterMockup: React.FC = () => {
    const prompts = ["a tiny crown", "goofy glasses", "pixel heart freckles"];
    const [currentPrompt, setCurrentPrompt] = useState(prompts[0]);
    const [typedPrompt, setTypedPrompt] = useState("");
    const [showFilter, setShowFilter] = useState(false);
    const [promptIndex, setPromptIndex] = useState(0);

    useEffect(() => {
        const fullPrompt = prompts[promptIndex];
        // Fix: Replace NodeJS.Timeout with a browser-compatible type for timer IDs.
        // ReturnType<typeof setInterval> works in both Node and browser environments.
        let typingTimeout: ReturnType<typeof setInterval>;
        let mainInterval: ReturnType<typeof setInterval>;

        const typeEffect = () => {
            setTypedPrompt("");
            setShowFilter(false);
            let i = 0;
            typingTimeout = setInterval(() => {
                if (i < fullPrompt.length) {
                    setTypedPrompt(prev => prev + fullPrompt.charAt(i));
                    i++;
                } else {
                    clearInterval(typingTimeout);
                    setTimeout(() => setShowFilter(true), 500);
                }
            }, 100);
        };
        
        typeEffect();

        mainInterval = setInterval(() => {
            setPromptIndex(prev => (prev + 1) % prompts.length);
        }, 5000);


        return () => {
            clearInterval(typingTimeout);
            clearInterval(mainInterval);
        };
    }, [promptIndex]);

    const reactions = ['😂', '🔥', '😍', '🤯'];

    return (
        <div className="mt-auto bg-gray-100/50 p-1.5 rounded-xl aspect-[9/16] w-full max-w-[250px] mx-auto flex flex-col relative overflow-hidden shadow-lg border border-gray-200">
            <div className="relative w-full h-full rounded-lg overflow-hidden bg-cover bg-center" style={{backgroundImage: `url(https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop)`}}>
                {/* Generated Filter */}
                {showFilter && (
                    <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-500 animate-sparkle">
                        {promptIndex === 0 && <div className="text-4xl absolute top-1/4">👑</div>}
                        {promptIndex === 1 && <div className="text-6xl absolute top-1/2 -translate-y-1/2">🤓</div>}
                        {promptIndex === 2 && <div className="text-3xl text-pink-400 absolute top-1/2 left-1/4">💖</div>}
                        {promptIndex === 2 && <div className="text-3xl text-pink-400 absolute top-1/2 right-1/4">💖</div>}
                    </div>
                )}
                {/* Friend Reactions */}
                {showFilter && reactions.map((emoji, i) => (
                    <div key={i} className={`absolute text-2xl bg-white/70 backdrop-blur-sm rounded-full p-1 shadow-md animate-float`} style={{
                        top: `${20 + i*15}%`,
                        left: `${i % 2 === 0 ? 10 : 80}%`,
                        animationDelay: `${i*0.2}s`
                    }}>{emoji}</div>
                ))}
            </div>
            <div className="absolute bottom-2 left-2 right-2 p-2 bg-black/50 backdrop-blur-md rounded-lg text-white text-sm font-mono">
                &gt; {typedPrompt}<span className="animate-ping">|</span>
            </div>
        </div>
    )
}

const CalendarView: React.FC = () => {
    // A few photos of the same person for the mockup
    const photoUrls = [
        'https://images.unsplash.com/photo-1545996124-0501ebae8450?q=80&w=200&h=200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1558280139-cc28013b838c?q=80&w=200&h=200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1582894119106-f35a4358a923?q=80&w=200&h=200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1558280139-b3a696a5c106?q=80&w=200&h=200&auto=format&fit=crop',
    ];

    // Simple seeded random to keep photo distribution consistent on reload
    let seed = 1;
    const random = () => {
        const x = Math.sin(seed++) * 10000;
        return x - Math.floor(x);
    };
    
    return (
        <div className="mt-auto bg-gray-100/50 p-3 rounded-xl">
            <div className="text-center font-bold mb-2 text-gray-900">September</div>
            <div className="grid grid-cols-7 gap-1 text-xs text-center text-gray-500 font-bold mb-2">
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(day => <div key={day}>{day}</div>)}
            </div>
            <div className="grid grid-cols-7 gap-1">
                {/* September 2024 starts on a Sunday. Looping 30 days. */}
                {Array.from({ length: 30 }, (_, i) => i + 1).map((day) => {
                    const hasPhoto = random() > 0.4;
                    if (hasPhoto) {
                        const photoIndex = Math.floor(random() * photoUrls.length);
                        return (
                            <div
                                key={day}
                                className="aspect-square w-full rounded-md bg-cover bg-center border-2 border-purple-500"
                                style={{ backgroundImage: `url(${photoUrls[photoIndex]})` }}
                                title={`Day ${day}`}
                            ></div>
                        );
                    } else {
                        return (
                            <div
                                key={day}
                                className="aspect-square w-full rounded-md flex items-center justify-center text-xs font-bold bg-gray-200 text-gray-500"
                            >
                                {day}
                            </div>
                        );
                    }
                })}
            </div>
        </div>
    );
}

const CommunityFeedMockup: React.FC = () => {
  return (
    <div className="mt-auto bg-white p-1 rounded-xl aspect-[9/16] w-full max-w-[250px] mx-auto flex flex-col relative overflow-hidden shadow-lg border border-gray-200">
      <div className="relative w-full h-full rounded-lg overflow-hidden">
        <img src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=400&auto=format&fit=crop" alt="Friends having fun" className="absolute inset-0 w-full h-full object-cover"/>
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 to-transparent"></div>

        <div className="relative z-10 flex flex-col justify-end flex-grow text-white p-2 h-full">
            <div className="mt-auto">
                <div className="mb-2">
                    <div className="flex items-center gap-2">
                        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop" alt="User avatar" className="w-10 h-10 rounded-full border-2 border-white"/>
                        <div>
                            <p className="font-bold text-sm drop-shadow-md">@jess_plays</p>
                            <p className="text-xs text-gray-300 drop-shadow-md">Mission: Dance Challenge! 💃</p>
                        </div>
                    </div>
                </div>
                <div className="text-xs space-y-1 backdrop-blur-sm bg-black/30 p-2 rounded-lg">
                    <p><span className="font-bold text-gray-300">@mike_w:</span> LOL amazing 😂</p>
                    <p><span className="font-bold text-gray-300">@sarah_b:</span> you nailed it!! 🔥</p>
                </div>
            </div>
        </div>
            
        <div className="absolute right-3 bottom-12 z-10 flex flex-col items-center gap-4 text-white">
            <div className="text-center">
                <button className="w-10 h-10 rounded-full bg-black/40 flex items-center justify-center text-xl backdrop-blur-sm hover:bg-black/60 transition-colors">❤️</button>
                <span className="text-xs font-bold drop-shadow-md">1.2k</span>
            </div>
            <div className="text-center">
                <button className="w-10 h-10 rounded-full bg-black/40 flex items-center justify-center text-xl backdrop-blur-sm hover:bg-black/60 transition-colors">💬</button>
                <span className="text-xs font-bold drop-shadow-md">88</span>
            </div>
            <div className="text-center">
                <button className="w-10 h-10 rounded-full bg-black/40 flex items-center justify-center text-xl backdrop-blur-sm hover:bg-black/60 transition-colors">🌀</button>
                <span className="text-xs font-bold drop-shadow-md">Remix</span>
            </div>
        </div>
      </div>
    </div>
  );
};


const FeaturesSection: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">More Ways to Play</h2>
          <p className="text-lg text-gray-600">Flik is packed with features to keep the fun rolling.</p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
            <FeatureCard
                icon={
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 gradient-text" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
                }
                title="Instant AR Filters"
                description="Type a prompt and watch our AI create a hilarious AR filter for you and your friends to use instantly."
            >
                <ArFilterMockup />
            </FeatureCard>

            <FeatureCard
                icon={
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 gradient-text" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                }
                title="Calendar View"
                description="Your daily submissions build a visual archive of your fun moments. Look back on your streak and relive your favorite challenges."
            >
                 <CalendarView />
            </FeatureCard>

            <FeatureCard
                icon={
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 gradient-text" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                }
                title="Community & Sharing"
                description="See your friends' results, vote for the best submissions, comment, and remix their AI-generated filters."
            >
                <CommunityFeedMockup />
            </FeatureCard>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;