import React from 'react';
import { motion } from 'framer-motion';
import type { MenuItem } from '../lib/data';
import { Plus, Flame, Leaf, Wind } from 'lucide-react';

interface MenuProps {
  items: MenuItem[];
  onAdd: (item: MenuItem) => void;
}

export const Menu: React.FC<MenuProps> = ({ items, onAdd }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1 }}
          className="glass-card group overflow-hidden flex flex-col"
        >
          <div className="relative h-48 overflow-hidden">
            <img 
              src={item.image} 
              alt={item.name} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute top-4 left-4 flex gap-2">
              {item.isSpicy && (
                <div className="bg-red-500/80 backdrop-blur-md p-1.5 rounded-lg text-white">
                  <Flame size={14} />
                </div>
              )}
              {item.healthScore >= 8 && (
                <div className="bg-green-500/80 backdrop-blur-md p-1.5 rounded-lg text-white">
                  <Leaf size={14} />
                </div>
              )}
              {item.isCooling && (
                <div className="bg-blue-500/80 backdrop-blur-md p-1.5 rounded-lg text-white">
                  <Wind size={14} />
                </div>
              )}
            </div>
          </div>
          
          <div className="p-5 flex-1 flex flex-col">
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-bold text-lg">{item.name}</h4>
              <span className="text-violet-400 font-bold">₹{item.price}</span>
            </div>
            <p className="text-slate-400 text-xs mb-4 line-clamp-2">
              {item.description}
            </p>
            <div className="mt-auto flex justify-between items-center">
              <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">{item.category}</span>
              <button 
                onClick={() => onAdd(item)}
                className="bg-white/10 hover:bg-violet-500 text-white p-2 rounded-xl transition-all"
              >
                <Plus size={18} />
              </button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
