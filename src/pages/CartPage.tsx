import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const CartPage: React.FC = () => {
  const [step, setStep] = useState(1); // 1: Cart, 2: Address, 3: Payment
  
  return (
    <div className="max-w-7xl mx-auto w-full px-6 py-12">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left Side: Steps & Forms */}
        <div className="flex-1">
          {/* Progress Header */}
          <div className="flex items-center gap-4 mb-10">
            {[1, 2, 3].map((s) => (
              <React.Fragment key={s}>
                <div className={`flex items-center gap-2 ${step >= s ? 'text-primary' : 'text-slate-500'}`}>
                  <div className={`h-8 w-8 rounded-full flex items-center justify-center border-2 ${step >= s ? 'border-primary bg-primary/10' : 'border-slate-700'}`}>
                    <span className="text-xs font-bold">{s}</span>
                  </div>
                  <span className="text-sm font-bold uppercase tracking-wider hidden sm:block">
                    {s === 1 ? 'Cart' : s === 2 ? 'Address' : 'Payment'}
                  </span>
                </div>
                {s < 3 && <div className={`h-px flex-1 bg-slate-800 ${step > s ? 'bg-primary/50' : ''}`}></div>}
              </React.Fragment>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div 
                key="cart"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="space-y-6"
              >
                <h2 className="text-3xl font-black text-slate-100">Review Your Order</h2>
                <div className="space-y-4">
                  {[1, 2].map(i => (
                    <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 group hover:border-primary/30 transition-all">
                      <div className="h-20 w-20 rounded-xl bg-slate-800 overflow-hidden"></div>
                      <div className="flex-1">
                        <h4 className="font-bold text-slate-100">Signature Dish {i}</h4>
                        <p className="text-xs text-slate-500">Extra Spicy • No Onion</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <button className="h-8 w-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                          <span className="material-symbols-outlined text-sm">remove</span>
                        </button>
                        <span className="font-bold text-slate-100">1</span>
                        <button className="h-8 w-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                          <span className="material-symbols-outlined text-sm">add</span>
                        </button>
                      </div>
                      <div className="text-right ml-4">
                        <p className="font-bold text-slate-100">₹240</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-end pt-6">
                  <button 
                    onClick={() => setStep(2)}
                    className="bg-primary text-background-dark font-bold px-10 py-4 rounded-xl hover:scale-105 transition-transform"
                  >
                    Confirm Address
                  </button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div 
                key="address"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="space-y-8"
              >
                <h2 className="text-3xl font-black text-slate-100">Delivery Address</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-6 rounded-2xl bg-white/5 border-2 border-primary ring-4 ring-primary/10 flex flex-col gap-3">
                    <div className="flex justify-between">
                      <span className="material-symbols-outlined text-primary">home</span>
                      <span className="text-[10px] font-bold uppercase py-0.5 px-2 bg-primary text-white rounded">Active</span>
                    </div>
                    <p className="font-bold text-slate-100">Home</p>
                    <p className="text-sm text-slate-400">123 Tech Park, Jubilee Hills, Hyderabad</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all cursor-pointer flex flex-col gap-3">
                    <span className="material-symbols-outlined text-slate-500">work</span>
                    <p className="font-bold text-slate-100">Office</p>
                    <p className="text-sm text-slate-400">Cyber Towers, HITEC City</p>
                  </div>
                </div>
                <div className="flex justify-between pt-6">
                  <button onClick={() => setStep(1)} className="text-slate-500 font-bold px-6">Back</button>
                  <button 
                    onClick={() => setStep(3)}
                    className="bg-primary text-background-dark font-bold px-10 py-4 rounded-xl hover:scale-105 transition-transform"
                  >
                    Proceed to Payment
                  </button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div 
                key="payment"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="space-y-8"
              >
                <h2 className="text-3xl font-black text-slate-100">Payment Options</h2>
                <div className="space-y-4">
                  {['UPI', 'Credit Card', 'Cash on Delivery'].map((method) => (
                    <div key={method} className="flex items-center justify-between p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all cursor-pointer group">
                      <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                          <span className="material-symbols-outlined">payments</span>
                        </div>
                        <span className="font-bold text-slate-100">{method}</span>
                      </div>
                      <div className="h-6 w-6 rounded-full border-2 border-slate-700 group-hover:border-primary transition-colors"></div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between pt-6">
                  <button onClick={() => setStep(2)} className="text-slate-500 font-bold px-6">Back</button>
                  <Link 
                    to="/confirmation"
                    className="bg-primary text-background-dark font-bold px-10 py-4 rounded-xl block text-center hover:scale-105 transition-transform"
                  >
                    Place Order ₹480
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right Side: Order Summary */}
        <aside className="w-full lg:w-96">
          <div className="sticky top-28 p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl">
            <h3 className="text-xl font-bold text-slate-100 mb-6">Order Summary</h3>
            <div className="space-y-4">
              <div className="flex justify-between text-slate-400">
                <span>Subtotal</span>
                <span>₹480</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Delivery Fee</span>
                <span className="text-green-500">FREE</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Taxes & Charges</span>
                <span>₹12.50</span>
              </div>
              <div className="h-px bg-slate-800 my-4"></div>
              <div className="flex justify-between text-primary font-black text-2xl">
                <span>Total</span>
                <span>₹492.50</span>
              </div>
            </div>
            
            <div className="mt-8 p-4 rounded-xl bg-primary/10 border border-primary/20">
              <div className="flex gap-2">
                <span className="material-symbols-outlined text-primary text-sm">info</span>
                <p className="text-[10px] font-medium text-slate-400 leading-normal">
                  Our AI has applied the best available 15% discount coupon for you automatically.
                </p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default CartPage;
