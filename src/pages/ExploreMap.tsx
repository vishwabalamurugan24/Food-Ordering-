import React from 'react';
// import { motion } from 'framer-motion';

const ExploreMap: React.FC = () => {
  return (
    <div className="relative flex flex-1 h-[calc(100vh-80px)] overflow-hidden">
      <aside className="absolute left-6 top-6 bottom-6 z-10 flex w-80 flex-col gap-4 pointer-events-none">
        <div className="flex gap-2 overflow-x-auto custom-scrollbar pointer-events-auto">
          <button className="flex items-center gap-1.5 whitespace-nowrap rounded-full bg-primary px-4 py-2 text-xs font-bold text-background-dark shadow-lg">
            <span className="material-symbols-outlined text-sm">star</span> Top Rated
          </button>
          <button className="flex items-center gap-1.5 whitespace-nowrap rounded-full bg-background-dark/90 px-4 py-2 text-xs font-bold text-slate-100 shadow-lg border border-primary/20 hover:border-primary">
            <span className="material-symbols-outlined text-sm">near_me</span> Near Me
          </button>
        </div>
        <div className="flex flex-1 flex-col gap-3 overflow-y-auto custom-scrollbar pointer-events-auto">
          {[1, 2, 3].map(i => (
            <div key={i} className="group flex flex-col gap-3 rounded-2xl bg-background-dark/90 p-3 shadow-xl border border-primary/10 hover:border-primary/40 transition-all backdrop-blur-sm">
              <div className="h-32 w-full overflow-hidden rounded-xl bg-slate-800"></div>
              <div>
                <h3 className="font-bold text-slate-100">Nearby Spot {i}</h3>
                <p className="text-xs text-primary/70 mb-2">Discovery • Location-based</p>
              </div>
            </div>
          ))}
        </div>
      </aside>

      <div className="relative flex-1 bg-background-dark/10 overflow-hidden">
        <div className="absolute inset-0 bg-[#1a1410]">
          <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, #f48525 1px, transparent 0)", backgroundSize: "40px 40px" }}></div>
          <div className="absolute left-[55%] top-[40%] flex flex-col items-center group cursor-pointer">
            <div className="relative flex items-center justify-center">
              <div className="absolute h-8 w-8 animate-ping rounded-full bg-primary/30"></div>
              <div className="z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary bg-background-dark text-primary shadow-lg shadow-primary/20">
                <span className="material-symbols-outlined">restaurant</span>
              </div>
            </div>
            <div className="mt-2 rounded-lg bg-background-dark/95 px-3 py-1 text-xs font-bold text-slate-100 shadow-xl border border-primary/30">Target Spot</div>
          </div>
        </div>
        
        <div className="absolute right-6 bottom-6 flex flex-col gap-2">
          <div className="flex flex-col gap-1 overflow-hidden rounded-xl bg-background-dark/90 shadow-2xl border border-primary/20 p-1">
            <button className="flex h-10 w-10 items-center justify-center text-slate-100 hover:bg-primary/20 rounded-lg">+</button>
            <button className="flex h-10 w-10 items-center justify-center text-slate-100 hover:bg-primary/20 rounded-lg">-</button>
          </div>
          <button className="flex h-10 w-10 items-center justify-center rounded-xl bg-background-dark/90 text-primary shadow-2xl border border-primary/20 hover:border-primary transition-colors">
            <span className="material-symbols-outlined">my_location</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExploreMap;
