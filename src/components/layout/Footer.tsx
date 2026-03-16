import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-auto border-t border-primary/10 bg-background-dark py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 md:flex-row">
        <div className="flex items-center gap-2 text-primary opacity-50 grayscale hover:grayscale-0 transition-all">
          <span className="material-symbols-outlined">restaurant</span>
          <h2 className="text-lg font-bold tracking-tight">AI DINE</h2>
        </div>
        <p className="text-sm text-slate-500">© 2024 AI Dine. Smart food for a smart future.</p>
        <div className="flex gap-6">
          <a className="text-slate-500 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">social_leaderboard</span></a>
          <a className="text-slate-500 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">share</span></a>
          <a className="text-slate-500 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">alternate_email</span></a>
        </div>
      </div>
    </footer>
  );
};
