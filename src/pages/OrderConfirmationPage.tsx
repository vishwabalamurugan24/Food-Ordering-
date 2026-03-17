import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const OrderConfirmationPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-160px)] px-6 text-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="w-24 h-24 bg-primary rounded-full flex items-center justify-center text-background-dark mb-8 shadow-[0_0_50px_rgba(244,133,37,0.4)]"
      >
        <span className="material-symbols-outlined text-5xl font-black">check</span>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h1 className="text-4xl md:text-5xl font-black text-slate-100 mb-4 tracking-tight">Order Confirmed!</h1>
        <p className="text-slate-400 text-lg mb-10 max-w-md mx-auto">
          Your delicious meal is being prepared. Our AI agent is monitoring the chef to ensure perfection.
        </p>
        
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 mb-10 max-w-sm mx-auto text-left">
          <div className="flex justify-between mb-4">
            <span className="text-slate-500 font-bold text-xs uppercase">Order ID</span>
            <span className="text-primary font-bold">#AID-8829-X</span>
          </div>
          <div className="flex justify-between mb-4">
            <span className="text-slate-500 font-bold text-xs uppercase">Est. Delivery</span>
            <span className="text-slate-100 font-bold">25 - 30 mins</span>
          </div>
          <div className="h-px bg-slate-800 my-4"></div>
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary">delivery_dining</span>
            </div>
            <div>
              <p className="text-xs text-slate-500 font-bold uppercase">Rider Info</p>
              <p className="text-slate-100 font-bold">Karthik R. is on his way</p>
            </div>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/" className="bg-primary text-background-dark font-bold px-8 py-3 rounded-xl hover:scale-105 transition-transform">
            Back to Home
          </Link>
          <Link to="/map" className="border border-primary/20 bg-primary/5 text-primary font-bold px-8 py-3 rounded-xl hover:bg-primary/10 transition-colors">
            Track Order
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default OrderConfirmationPage;
