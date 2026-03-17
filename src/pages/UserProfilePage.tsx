import React from 'react';
// import { motion } from 'framer-motion';

const UserProfilePage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto w-full px-6 py-12">
      <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
        <div className="relative">
          <div className="w-32 h-32 rounded-full border-4 border-primary p-1">
            <div className="w-full h-full rounded-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAV5QQzBdka6DlYlxcztircSUAjSwuWiJnM895teCGruS_m0ko2A7QO28Ww7453yBikkG9RFhVJkvZHnV_nzNrRaKdp8i6mI8gt89MdRvlm0ZGQyXHKMXT5F86b0vk8DxH_gaj96auarvDMqO7NjBr6thyG8qdXoVzGPiAbYEdE5nfaGw0KMH63KGWyUlueqYaxJRRp-2Bo2_CaRpfm4Mzi5Is6XHfXiMDSzqxuwomtHj5CylQ6XJn7xbZMwiCI338bS6hwWKFlZzgs')" }}></div>
          </div>
          <button className="absolute bottom-0 right-0 p-2 bg-primary rounded-full text-background-dark shadow-lg">
            <span className="material-symbols-outlined text-sm">edit</span>
          </button>
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-black text-slate-100 mb-1">Foodie Explorer</h1>
          <p className="text-primary font-bold flex items-center justify-center md:justify-start gap-1">
            <span className="material-symbols-outlined text-sm">verified</span>
            Premium Gourmet Member
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section className="space-y-6">
          <h2 className="text-xl font-bold text-slate-100 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">history</span>
            Order History
          </h2>
          {[1, 2].map(i => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-primary/30 transition-all">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase mb-1">Yesterday, 8:30 PM</p>
                  <h4 className="font-bold text-slate-100">Grand Plaza Special</h4>
                </div>
                <span className="text-primary font-bold">₹840</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="px-2 py-0.5 bg-green-500/10 text-green-500 text-[10px] font-bold rounded uppercase">Delivered</span>
                <button className="text-xs font-bold text-slate-400 hover:text-primary transition-colors">View Receipt</button>
              </div>
            </div>
          ))}
        </section>

        <section className="space-y-6">
          <h2 className="text-xl font-bold text-slate-100 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">settings</span>
            Preferences
          </h2>
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-slate-400">translate</span>
                <span className="text-slate-100 font-medium">Default Language</span>
              </div>
              <span className="text-primary font-bold">English (IN)</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-slate-400">notifications</span>
                <span className="text-slate-100 font-medium">Order Updates</span>
              </div>
              <div className="w-10 h-5 bg-primary rounded-full relative">
                <div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-slate-400">shield</span>
                <span className="text-slate-100 font-medium">Data Privacy</span>
              </div>
              <span className="material-symbols-outlined text-slate-500">chevron_right</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default UserProfilePage;
