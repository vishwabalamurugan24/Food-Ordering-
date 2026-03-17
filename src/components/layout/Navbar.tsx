import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/10 bg-background-dark/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-10">
          <Link to="/" className="flex items-center gap-2 text-primary">
            <span className="material-symbols-outlined text-3xl">restaurant</span>
            <h2 className="text-xl font-black tracking-tight text-slate-100">AI DINE</h2>
          </Link>
          <nav className="hidden items-center gap-8 md:flex">
            <Link to="/" className="text-sm font-semibold text-primary">Home</Link>
            <Link to="/menu" className="text-sm font-medium text-slate-400 hover:text-primary transition-colors">Menu</Link>
            <Link to="/assistant" className="text-sm font-medium text-slate-400 hover:text-primary transition-colors">AI Assistant</Link>
            <Link to="/recommendations" className="text-sm font-medium text-slate-400 hover:text-primary transition-colors">Personalized</Link>
            <Link to="/weather-health" className="text-sm font-medium text-slate-400 hover:text-primary transition-colors">Weather/Health</Link>
            <Link to="/map" className="text-sm font-medium text-slate-400 hover:text-primary transition-colors">Discovery</Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative hidden sm:block">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">search</span>
            <input 
              className="w-64 rounded-full border-none bg-primary/10 py-2 pl-10 pr-4 text-sm text-slate-100 placeholder-slate-400 focus:ring-2 focus:ring-primary" 
              placeholder="Craving something?" 
              type="text"
            />
          </div>
          <Link to="/cart" className="p-2 hover:bg-primary/10 rounded-full transition-colors relative text-slate-100">
            <span className="material-symbols-outlined">shopping_cart</span>
            <span className="absolute top-1 right-1 bg-primary text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">3</span>
          </Link>
          <Link to="/checkout" className="p-2 hover:bg-primary/10 rounded-full transition-colors text-slate-100">
            <span className="material-symbols-outlined">payments</span>
          </Link>
          <Link to="/profile">
            <div className="h-10 w-10 overflow-hidden rounded-full border-2 border-primary/20 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAV5QQzBdka6DlYlxcztircSUAjSwuWiJnM895teCGruS_m0ko2A7QO28Ww7453yBikkG9RFhVJkvZHnV_nzNrRaKdp8i6mI8gt89MdRvlm0ZGQyXHKMXT5F86b0vk8DxH_gaj96auarvDMqO7NjBr6thyG8qdXoVzGPiAbYEdE5nfaGw0KMH63KGWyUlueqYaxJRRp-2Bo2_CaRpfm4Mzi5Is6XHfXiMDSzqxuwomtHj5CylQ6XJn7xbZMwiCI338bS6hwWKFlZzgs')" }}></div>
          </Link>
        </div>
      </div>
    </header>
  );
};
