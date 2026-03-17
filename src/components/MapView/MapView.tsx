import React from 'react';

const MapView: React.FC = () => {
  return (
    <div className="relative w-full h-96 bg-slate-900 rounded-3xl overflow-hidden border border-white/10 group shadow-2xl">
      <div className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/dark-v11/static/0,0,1/400x400?access_token=mock')] bg-cover opacity-30 grayscale group-hover:grayscale-0 transition-all duration-1000"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
      
      <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
        <div className="size-20 rounded-full bg-primary/20 backdrop-blur-xl border border-primary/30 flex items-center justify-center mb-6 shadow-[0_0_50px_rgba(var(--primary-rgb),0.3)] animate-pulse">
          <span className="material-symbols-outlined text-primary text-4xl">location_on</span>
        </div>
        <h3 className="text-xl font-bold text-white mb-2">Discovery Map</h3>
        <p className="text-sm text-slate-400 max-w-xs">Integrating Google Maps API to find the best dining spots around you.</p>
      </div>

      <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center pointer-events-none">
        <span className="text-[10px] text-white/20 font-mono tracking-widest uppercase italic">Advanced Spatial Engine active</span>
        <div className="size-2 rounded-full bg-primary animate-ping"></div>
      </div>
    </div>
  );
};

export default MapView;
