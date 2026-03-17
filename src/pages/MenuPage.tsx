import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { fetchMenu, type MenuItem } from '../lib/data';

const MenuPage: React.FC = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMenu()
      .then(data => {
        setMenuItems(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="flex-1 flex items-center justify-center text-primary">Loading Gourmet Menu...</div>;

  return (
    <div className="flex-1 px-6 lg:px-20 py-8">
      <div className="flex flex-col gap-8 text-slate-100">
        <section>
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold">Explore Categories</h1>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4 custom-scrollbar">
            {['South Indian', 'Lunch', 'Dinner', 'Desserts', 'Drinks'].map((cat, i) => (
              <button key={cat} className="flex shrink-0 flex-col items-center gap-2 group">
                <div className={`size-20 rounded-2xl flex items-center justify-center transition-all ${i === 0 ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-primary/10 text-primary hover:bg-primary hover:text-white'}`}>
                  <span className="material-symbols-outlined text-3xl">restaurant</span>
                </div>
                <span className={`text-sm font-semibold ${i === 0 ? '' : 'opacity-70'}`}>{cat}</span>
              </button>
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center gap-2 mb-8">
            <span className="material-symbols-outlined text-primary">token</span>
            <h2 className="text-2xl font-bold text-slate-100">Interactive Menu</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.food_id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="group relative flex flex-col bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300"
              >
                <div className="relative aspect-square w-full overflow-hidden bg-gradient-to-br from-primary/10 to-transparent flex items-center justify-center">
                  <img src={item.image_url} alt={item.food_name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg">{item.food_name}</h3>
                    <span className="text-primary font-bold text-lg">₹{item.price}</span>
                  </div>
                  <p className="text-xs text-slate-400 mb-4 line-clamp-2">{item.description}</p>
                  <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-colors">
                    <span className="material-symbols-outlined">add_shopping_cart</span>
                    Add to Cart
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default MenuPage;
