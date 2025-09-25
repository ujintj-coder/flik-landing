
import React from 'react';

const UserProfileScreen: React.FC = () => {
    const submissions = [
        'https://images.unsplash.com/photo-1545996124-0501ebae8450?q=80&w=200&h=200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1558280139-cc28013b838c?q=80&w=200&h=200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1582894119106-f35a4358a923?q=80&w=200&h=200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1558280139-b3a696a5c106?q=80&w=200&h=200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=200&h=200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?q=80&w=200&h=200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=200&h=200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=200&h=200&auto=format&fit=crop',
    ];

    return (
        <div className="w-full aspect-[9/16] max-w-[280px] bg-white rounded-3xl shadow-lg p-3 flex flex-col border border-gray-200">
            <div className="flex items-center gap-4 px-2 pt-2">
                <img src="https://images.unsplash.com/photo-1545996124-0501ebae8450?q=80&w=200&h=200&auto=format&fit=crop" alt="User Avatar" className="w-16 h-16 rounded-full border-4 border-purple-300" />
                <div>
                    <h4 className="font-bold text-xl font-poppins text-gray-800">@alexa_rae</h4>
                    <p className="text-sm text-gray-500">Joined 2024</p>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center my-4">
                <div>
                    <p className="font-bold text-lg text-gray-800">12</p>
                    <p className="text-xs text-gray-500">🏆 Wins</p>
                </div>
                <div>
                    <p className="font-bold text-lg text-gray-800">45</p>
                    <p className="text-xs text-gray-500">🔥 Streak</p>
                </div>
                <div>
                    <p className="font-bold text-lg text-gray-800">8</p>
                    <p className="text-xs text-gray-500">✨ Filters</p>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-1 flex-grow">
                {submissions.map((src, i) => (
                    <div key={i} className="aspect-square w-full rounded-lg bg-cover bg-center" style={{ backgroundImage: `url(${src})` }}></div>
                ))}
            </div>
        </div>
    );
};

const FilterDiscoveryScreen: React.FC = () => {
    const filters = [
        { name: 'Cosmic Kitty', creator: '@jess_plays', color: 'from-indigo-500 to-purple-500' },
        { name: 'Goofy Pizza Hat', creator: '@mike_w', color: 'from-yellow-400 to-orange-500' },
        { name: 'Retro VHS Glitch', creator: '@sarah_b', color: 'from-pink-500 to-red-500' },
        { name: 'Sparkle Bomb', creator: '@chloe_p', color: 'from-blue-400 to-teal-400' },
    ];
    return (
        <div className="w-full aspect-[9/16] max-w-[280px] bg-gray-50 rounded-3xl shadow-lg p-3 flex flex-col border border-gray-200">
            <h4 className="font-bold text-2xl text-center gradient-text font-poppins mb-4">Discover Filters</h4>
            <div className="relative mb-4">
                <input type="text" placeholder="Search filters..." className="w-full bg-white rounded-lg px-4 py-2 text-gray-900 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF4BC3]" />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
            </div>
            <div className="space-y-3 overflow-y-auto flex-grow">
                {filters.map(filter => (
                    <div key={filter.name} className="flex items-center p-3 rounded-xl bg-white border border-gray-200/80 gap-4">
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${filter.color} flex items-center justify-center text-2xl text-white`}>✨</div>
                        <div className="flex-grow">
                            <p className="font-semibold text-sm text-gray-800">{filter.name}</p>
                            <p className="text-xs text-gray-500">by {filter.creator}</p>
                        </div>
                        <button className="text-xs font-bold bg-gray-200 text-gray-700 px-3 py-1 rounded-full hover:bg-gray-300 transition-colors">Try</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

const CreativeHubSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Your Creative Hub</h2>
          <p className="text-lg text-gray-600">
            From your personal profile to an endless library of community-made fun, Flik is your playground.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12">
            <div className="flex flex-col items-center text-center">
                <div className="transform transition-transform duration-300 hover:-translate-y-2 hover:scale-105 mb-6">
                    <UserProfileScreen />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-gray-900">Build Your Profile</h3>
                <p className="text-gray-600 max-w-xs">Track your wins, streaks, and show off your collection of hilarious moments.</p>
            </div>
            <div className="flex flex-col items-center text-center">
                <div className="transform transition-transform duration-300 hover:-translate-y-2 hover:scale-105 mb-6">
                    <FilterDiscoveryScreen />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-gray-900">Discover & Create</h3>
                <p className="text-gray-600 max-w-xs">Explore thousands of AI-powered filters made by the community, or create your own.</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default CreativeHubSection;
