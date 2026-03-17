import React from 'react';

const ChatBot: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 w-96 h-[500px] bg-slate-900/80 backdrop-blur-xl rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col p-6 border border-white/10 ring-1 ring-white/5 overflow-hidden animate-in fade-in slide-in-from-bottom-10 duration-500">
      <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
        <div className="size-10 rounded-full bg-gradient-to-tr from-primary to-blue-400 flex items-center justify-center shadow-lg shadow-primary/20">
          <span className="material-symbols-outlined text-white text-xl">smart_toy</span>
        </div>
        <div>
          <h3 className="font-bold text-white">AI DINE Concierge</h3>
          <p className="text-[10px] text-primary font-bold uppercase tracking-wider">Online & Ready</p>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto mb-6 space-y-4 custom-scrollbar pr-2">
        <div className="bg-white/5 rounded-2xl p-4 text-sm text-slate-300 border border-white/5">
          <p>Vanakkam! I'm your AI host. I can recommend food based on your **local weather (OpenWeather)**, **nearby spots (Google Maps)**, or your specific health goals.</p>
        </div>
        <div className="bg-primary/20 self-end ml-10 rounded-2xl p-4 text-sm text-slate-200 border border-primary/10">
          <p>Find me some health-conscious lunch options nearby!</p>
        </div>
      </div>

      <div className="relative">
        <input 
          type="text" 
          placeholder="Ask me anything..." 
          className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-6 pr-14 text-sm text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
        />
        <button className="absolute right-2 top-1/2 -translate-y-1/2 size-10 rounded-xl bg-primary text-white flex items-center justify-center hover:scale-105 active:scale-95 transition-transform">
          <span className="material-symbols-outlined">send</span>
        </button>
      </div>
    </div>
  );
};

export default ChatBot;
