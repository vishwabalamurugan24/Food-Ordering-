import React from 'react';

const WeatherWidget: React.FC = () => {
  return (
    <div className="relative p-6 bg-gradient-to-br from-blue-500/20 to-indigo-600/20 backdrop-blur-xl rounded-3xl border border-white/10 shadow-[0_15px_35px_rgba(0,0,0,0.2)] overflow-hidden group">
      <div className="absolute -right-4 -top-4 size-24 bg-yellow-400/20 blur-3xl animate-pulse"></div>
      
      <div className="flex items-center justify-between mb-4">
        <div className="size-12 rounded-2xl bg-white/10 flex items-center justify-center">
          <span className="material-symbols-outlined text-yellow-400 text-3xl animate-bounce duration-[2000ms]">wb_sunny</span>
        </div>
        <span className="text-xs font-black uppercase tracking-widest text-white/40">Real-time</span>
      </div>

      <div className="space-y-1">
        <h3 className="text-3xl font-black text-white tracking-tighter">25°C</h3>
        <p className="text-blue-200 font-bold">Partly Sunny</p>
      </div>

      <div className="mt-6 p-3 bg-white/5 rounded-2xl border border-white/5">
        <p className="text-[10px] text-white/70 leading-relaxed italic">"A refreshing cold beverage or a light salad would be perfect for this climate."</p>
      </div>
    </div>
  );
};

export default WeatherWidget;
