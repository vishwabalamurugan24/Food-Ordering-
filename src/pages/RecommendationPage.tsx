import React from 'react';
// import { motion } from 'framer-motion';

const RecommendationPage: React.FC = () => {
  return (
    <main className="flex-1 max-w-7xl mx-auto w-full p-4 md:p-8">
      <div className="flex flex-col gap-6 mb-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tight text-slate-100">Hi, Foodie!</h1>
            <p className="text-lg text-primary/70">It's a cozy rainy day. How about something warm?</p>
          </div>
          <div className="flex items-center gap-3 bg-primary/10 p-3 rounded-xl border border-primary/20">
            <span className="material-symbols-outlined text-primary text-3xl">rainy</span>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-primary">Weather Match</p>
              <p className="font-semibold text-slate-100">Rainy • 24°C</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary/20 to-transparent p-6 rounded-2xl border-l-4 border-primary">
          <div className="flex gap-3 items-start">
            <span className="material-symbols-outlined text-primary">auto_awesome</span>
            <div>
              <h3 className="font-bold text-slate-100">AI Pick: Why these?</h3>
              <p className="text-sm text-slate-300 mt-1 leading-relaxed">
                We've balanced your <span className="text-primary font-semibold">budget</span> with today's <span className="text-primary font-semibold">rainy weather</span>. 
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex border-b border-primary/10 mb-8 overflow-x-auto whitespace-nowrap scrollbar-hide">
        <button className="px-6 py-3 border-b-2 border-primary text-primary font-bold text-sm">Weather Picks</button>
        <button className="px-6 py-3 border-b-2 border-transparent text-slate-500 hover:text-primary transition-colors font-bold text-sm">Under ₹500</button>
      </div>

      <section className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold flex items-center gap-2 text-slate-100">
            <span className="material-symbols-outlined text-primary">coffee</span>
            Rainy Day Specials
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2].map((id) => (
            <div key={id} className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 group hover:shadow-xl transition-all">
              <div className="h-48 bg-center bg-cover relative" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=2071&auto=format&fit=crop')" }}>
                <div className="absolute top-3 left-3 bg-primary text-white text-xs font-bold px-2 py-1 rounded">RAINY MATCH</div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg text-slate-100">Hot Specialty {id}</h3>
                <p className="text-sm text-slate-400 mb-4">Perfect for keeping warm today.</p>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-bold">₹180</span>
                  <button className="bg-primary hover:bg-primary/90 text-white font-bold py-2 px-4 rounded-lg text-xs">Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default RecommendationPage;
