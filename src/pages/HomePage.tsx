import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col">
      <div className="fixed inset-0 bg-gradient-to-br from-primary/10 via-background-dark to-background-dark -z-10 opacity-50"></div>
      
      <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-6 py-8">
        {/* Hero Section */}
        <section className="grid grid-cols-1 items-center gap-12 py-10 lg:grid-cols-2">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col gap-8"
          >
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-primary/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
              <span className="material-symbols-outlined text-sm">wb_sunny</span>
              It's Sunny 78°F in your area
            </div>
            <h1 className="text-5xl font-black leading-[1.1] tracking-tight text-slate-100 sm:text-7xl">
              Gourmet food <span className="text-primary">tailored</span> to your vibe.
            </h1>
            <p className="max-w-lg text-lg leading-relaxed text-slate-400">
              Experience our signature dishes. Today's bright weather calls for something fresh and energizing. Let our AI curate your perfect meal.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/menu" className="flex h-14 items-center justify-center gap-2 rounded-xl bg-primary px-8 text-base font-bold text-background-dark hover:scale-105 transition-transform">
                Order Now
              </Link>
              <Link to="/assistant" className="flex h-14 items-center justify-center gap-2 rounded-xl border border-primary/30 bg-primary/5 px-8 text-base font-bold text-slate-100 hover:bg-primary/10 transition-colors">
                <span className="material-symbols-outlined">smart_toy</span>
                AI Assistant
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative aspect-square w-full"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-4/5 w-4/5 rounded-full bg-primary/20 blur-[100px]"></div>
            </div>
            <div 
              className="relative z-10 h-full w-full rounded-3xl bg-contain bg-center bg-no-repeat drop-shadow-2xl" 
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCb1FpZ7quIBFKdLOjLXqGuFWXq7agcLHEA6-P-qdK7w5VIywxqxGrhTjSgxg_1DBEbKtIqPRGp91yL1JS_JgGUMAGKCA8Y-yx9pYI_6rQJVEaRMrsZJjgS4mnT5dsWlA84fOlkGCR4N54n7q-OY_pTvuci6L9jJ6D40Csx1uD-aGGo8OxeTNyeCYSVbzFZH9EPMe3TQXpUBxAiiO-xIKQnlOm2Gw_uIhinYWhuUWLNZVsNojm0PecIGHQi1B_----rCNXX5bqtexN7')" }}
            >
            </div>
            {/* 3D Hint */}
            <div className="absolute bottom-10 right-10 flex flex-col items-center gap-2 rounded-full bg-background-dark/60 p-4 backdrop-blur-xl border border-primary/20">
              <span className="material-symbols-outlined animate-bounce text-primary">swipe</span>
              <span className="text-[10px] font-bold uppercase text-slate-400">Rotate View</span>
            </div>
          </motion.div>
        </section>

        {/* Quick Features */}
        <section className="mt-20 flex flex-col gap-8">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-100">AI Specials</h2>
              <p className="mt-2 text-slate-400">Refreshing picks for this sunny afternoon</p>
            </div>
            <Link to="/menu" className="text-sm font-bold text-primary hover:underline">View All</Link>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div key={item} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md transition-all hover:border-primary/50">
                <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-cover bg-center transition-transform group-hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDfQZ66OlhMYUpcU6OSg5SYgqvvosqBUTbBLn7A8UrI8WOt8yHAyTllWIAwCtqnD5rKhe6DgWCbFor_KRATyrxicwuPXQwjxDekg4SifnN4VWyjeeSAKYY_3j7pwN9A9AAeFqRKjPdXylxetdGUlSs-D9T-lgRcNyfyM2MeTwj6jQYmlvC5eH-apGug3d3aTsafI0bUOaJT8LshA5jwD1o0xGpulPB2kn1-3XI_lxQmcjucfJ37YbgqyWpl31xX9MqoganYYhVM5POu')" }}></div>
                <div className="mt-4 flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-slate-100">Dish {item}</h3>
                    <span className="text-lg font-bold text-primary">₹120</span>
                  </div>
                  <p className="text-sm text-slate-400">Perfectly balanced for your health and taste.</p>
                  <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-primary/10 py-2.5 text-sm font-bold text-primary hover:bg-primary hover:text-background-dark transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Floating AI Button */}
      <div className="fixed bottom-8 right-8 z-[100]">
        <Link to="/assistant" className="flex h-16 items-center gap-4 rounded-full bg-primary px-6 text-background-dark shadow-[0_0_30px_rgba(244,133,37,0.4)] transition-all hover:scale-110 active:scale-95">
          <span className="material-symbols-outlined text-3xl">chat_bubble</span>
          <span className="text-lg font-black tracking-tight">Talk to AI</span>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
