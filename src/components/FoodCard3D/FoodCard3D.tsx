import React from 'react';

const FoodCard3D: React.FC<{ name: string; price: number }> = ({ name, price }) => {
  return (
    <div className="group relative bg-white/5 backdrop-blur-sm p-6 rounded-3xl border border-white/10 hover:border-primary/50 transition-all duration-500 cursor-pointer overflow-hidden transform hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(var(--primary-rgb),0.15)]">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      
      <div className="relative h-48 bg-gradient-to-br from-white/5 to-white/0 rounded-2xl mb-6 flex flex-col items-center justify-center text-slate-500 overflow-hidden ring-1 ring-white/5 shadow-inner">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(var(--primary-rgb),0.1),transparent)] group-hover:opacity-100 transition-opacity"></div>
        <span className="material-symbols-outlined text-5xl mb-2 opacity-20 group-hover:scale-110 transition-transform duration-700">view_in_ar</span>
        <p className="text-[10px] uppercase tracking-[0.2em] font-black opacity-30">AR Preview {name}</p>
      </div>

      <div className="flex justify-between items-end">
        <div className="space-y-1">
          <h3 className="font-black text-xl text-white tracking-tight">{name}</h3>
          <p className="text-xs text-slate-400 font-medium">Gourmet Experience</p>
        </div>
        <div className="text-right">
          <p className="text-primary font-black text-2xl tracking-tighter">₹{price}</p>
        </div>
      </div>
    </div>
  );
};

export default FoodCard3D;
