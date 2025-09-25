
import React from 'react';

const DailyMissionScreen: React.FC = () => (
    <div className="w-full aspect-[9/16] max-w-[280px] bg-gradient-to-br from-pink-50 to-purple-100 rounded-3xl p-6 flex flex-col items-center justify-center text-center shadow-inner border border-white">
      <span className="text-7xl animate-bounce">💃</span>
      <h4 className="font-bold text-2xl text-gray-800 mt-4 font-poppins">Dance Challenge!</h4>
      <p className="text-gray-600 text-sm mt-1">Show off your best moves in 15 seconds!</p>
      <div className="bg-white/60 rounded-full px-4 py-1 font-bold text-purple-700 mt-6 text-sm backdrop-blur-sm">
        03:00 MINUTE TIMER
      </div>
      <button className="w-full bg-gradient-to-r from-[#FF4BC3] to-[#C04BFF] text-white font-bold py-3 px-8 rounded-full shadow-lg mt-6 transition-transform transform hover:scale-105">
        Start
      </button>
    </div>
);

const LiveFeedScreen: React.FC = () => (
  <div className="w-full aspect-[9/16] max-w-[280px] bg-gray-900 rounded-3xl overflow-hidden shadow-lg relative border-4 border-gray-200">
    <img src="https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?q=80&w=400&auto=format&fit=crop" alt="User video" className="absolute inset-0 w-full h-full object-cover"/>
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
    
    {/* Floating Reactions */}
    <span className="absolute top-1/2 left-4 text-3xl opacity-80 animate-ping">❤️</span>
    <span className="absolute top-2/3 right-4 text-3xl opacity-80 animate-pulse">😂</span>
    <span className="absolute top-1/3 left-8 text-3xl opacity-80 animate-pulse" style={{animationDelay: '0.5s'}}>🔥</span>

    <div className="absolute bottom-0 left-0 right-0 p-4 text-white z-10">
      <div className="flex items-center gap-2 mb-3">
        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop" alt="User avatar" className="w-10 h-10 rounded-full border-2 border-white"/>
        <div>
            <p className="font-bold text-sm drop-shadow-md">@sarah_b</p>
            <p className="text-xs text-gray-300 drop-shadow-md">is live!</p>
        </div>
      </div>
      <div className="text-xs space-y-1 backdrop-blur-sm bg-black/40 p-2 rounded-lg">
        <p><span className="font-bold text-gray-300">@mike_w:</span> So cool!</p>
        <p><span className="font-bold text-gray-300">@jess:</span> OMG 🔥</p>
      </div>
    </div>
  </div>
);

const LeaderboardScreen: React.FC = () => {
    const topUser = { rank: 1, name: '@jenny_ L', avatar: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=400&auto=format&fit=crop', votes: 1245, submission: 'https://images.unsplash.com/photo-1512435284840-e2d53823f2f0?q=80&w=400&auto=format&fit=crop' };
    const otherUsers = [
        { rank: 2, name: '@marc.us', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop', votes: 1102, icon: '🥈' },
        { rank: 3, name: '@chloe_p', avatar: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=100&auto=format&fit=crop', votes: 987, icon: '🥉' },
    ];
    return (
      <div className="w-full aspect-[9/16] max-w-[280px] bg-gray-900 rounded-3xl shadow-lg border-4 border-gray-200 overflow-hidden relative">
          <img src={topUser.submission} alt="Top submission" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20"></div>

          <div className="relative z-10 flex flex-col h-full text-white p-4">
              <div className="text-center">
                  <h4 className="font-bold text-2xl text-white drop-shadow-lg font-poppins">Today's #1</h4>
                  <p className="text-sm text-yellow-300 drop-shadow-lg font-bold">👑 WINNER 👑</p>
              </div>

              <div className="mt-auto">
                  <div className="flex items-center gap-3">
                      <img src={topUser.avatar} alt={topUser.name} className="w-12 h-12 rounded-full border-2 border-yellow-300"/>
                      <div>
                          <p className="font-bold text-lg drop-shadow-md">{topUser.name}</p>
                          <p className="text-sm font-bold text-white drop-shadow-md">{topUser.votes.toLocaleString()} Votes ❤️</p>
                      </div>
                  </div>
              </div>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 p-3 bg-black/30 backdrop-blur-lg">
              <p className="text-white text-xs font-bold mb-2 ml-1">Up Next:</p>
              <div className="space-y-1">
                  {otherUsers.map(user => (
                      <div key={user.rank} className="flex items-center p-1.5 rounded-lg bg-white/10">
                          <span className="font-bold text-lg w-8 text-white text-center">{user.icon}</span>
                          <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full border-2 border-white/50"/>
                          <div className="ml-2 flex-grow">
                              <p className="font-semibold text-xs text-white">{user.name}</p>
                              <p className="text-xs text-gray-300">{user.votes.toLocaleString()} votes</p>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </div>
    );
};


const StepCard: React.FC<{ title: string; description: string; children: React.ReactNode }> = ({ title, description, children }) => (
    <div className="bg-transparent p-0 md:p-4 rounded-3xl text-center flex flex-col items-center">
      <div className="mb-6 transform transition-transform duration-300 hover:-translate-y-2 hover:scale-105">
        {children}
      </div>
      <h3 className="text-2xl font-bold mb-3 text-gray-900 px-4">{title}</h3>
      <p className="text-gray-600 px-4">{description}</p>
    </div>
);


const HowItWorksSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">How Flik Works</h2>
            <p className="text-lg text-gray-600">Jump into daily fun in three simple steps. It's all about <span className="gradient-text font-bold">participation, not perfection!</span></p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 items-start">
            <StepCard 
                title="Instant Daily Missions" 
                description="Get a new, spontaneous 3-5 minute challenge every day. No time to overthink, just have fun!" 
            >
              <DailyMissionScreen />
            </StepCard>
            <StepCard 
                title="Real-time Participation" 
                description="Everyone plays at the same time. See your friends' hilarious submissions as they happen." 
            >
              <LiveFeedScreen />
            </StepCard>
            <StepCard 
                title="Climb the Ranks" 
                description="Vote for your favorites and see who makes it to the Top 10 leaderboard each day." 
            >
              <LeaderboardScreen />
            </StepCard>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
