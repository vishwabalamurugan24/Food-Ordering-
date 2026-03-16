import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// import { parseVoiceCommand, getSmartRecommendations } from '../lib/AgentLogic';

const AIAssistant: React.FC = () => {
  const [messages, setMessages] = useState([
    { role: 'ai', text: 'Vanakkam! Hello! I can help you order in English or Tamil. What would you like to eat today?' }
  ]);
  const [inputText, setInputText] = useState('');
  const [isListening, setIsListening] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = (text: string) => {
    if (!text.trim()) return;
    setMessages(prev => [...prev, { role: 'user', text }]);
    setInputText('');

    // Mock processing
    setTimeout(() => {
      const response = "I've noted that! Anything else?";
      setMessages(prev => [...prev, { role: 'ai', text: response }]);
    }, 600);
  };

  return (
    <div className="flex h-[calc(100vh-80px)] overflow-hidden relative bg-[radial-gradient(circle_at_center,rgba(244,133,37,0.05)_0%,transparent_70%)]">
      {/* Sidebar - Desktop */}
      <aside className="hidden lg:flex w-64 flex-col border-r border-primary/10 p-6 bg-background-dark/50 backdrop-blur-md">
        <nav className="flex flex-col gap-2">
          <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary text-background-dark shadow-lg">
            <span className="material-symbols-outlined text-background-dark font-bold">chat_bubble</span>
            <span className="font-semibold">Chat</span>
          </div>
          <div className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:bg-primary/5 hover:text-primary transition-all">
            <span className="material-symbols-outlined">receipt_long</span>
            <span className="font-medium">Recent Orders</span>
          </div>
        </nav>
        <div className="mt-auto p-4 rounded-2xl bg-primary/5 border border-primary/10">
          <p className="text-xs text-primary font-bold uppercase tracking-wider mb-2">Tamil Support Active</p>
          <p className="text-xs text-slate-500">You can speak in English or தமிழ்.</p>
        </div>
      </aside>

      {/* Main Chat Area */}
      <section className="flex flex-1 flex-col overflow-hidden">
        <div className="flex-1 overflow-y-auto p-6 space-y-8 scroll-smooth">
          <AnimatePresence>
            {messages.map((msg, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex items-end gap-3 ${msg.role === 'user' ? 'flex-row-reverse ml-auto max-w-2xl' : 'max-w-2xl'}`}
              >
                <div className={`h-10 w-10 shrink-0 rounded-full flex items-center justify-center border ${msg.role === 'ai' ? 'bg-primary/20 border-primary/30' : 'border-primary'}`}>
                  <span className="material-symbols-outlined text-primary">{msg.role === 'ai' ? 'smart_toy' : 'person'}</span>
                </div>
                <div className={`flex flex-col gap-1.5 ${msg.role === 'user' ? 'items-end' : ''}`}>
                  <span className="text-xs font-semibold text-primary uppercase tracking-tight">{msg.role === 'ai' ? 'FoodieAI' : 'You'}</span>
                  <div className={`p-4 rounded-2xl shadow-xl ${msg.role === 'ai' ? 'bg-white/5 border border-white/10 rounded-bl-none text-slate-200' : 'bg-primary text-background-dark font-medium rounded-br-none'}`}>
                    <p className="leading-relaxed">{msg.text}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          <div ref={scrollRef} />
        </div>

        {/* Controls */}
        <div className="p-6 bg-background-dark/80 backdrop-blur-2xl border-t border-primary/10">
          <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
            {isListening && (
              <div className="flex items-center gap-1 h-8">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="w-1 bg-primary rounded-full animate-pulse" style={{ height: Math.random() * 20 + 8 + 'px' }}></div>
                ))}
              </div>
            )}
            
            <form 
              onSubmit={(e) => { e.preventDefault(); handleSend(inputText); }}
              className="flex w-full items-center gap-4"
            >
              <div className="relative flex-1">
                <input 
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  className="w-full bg-background-dark/50 border border-primary/20 rounded-2xl py-4 px-6 text-slate-100 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all pr-12" 
                  placeholder="Type or use voice command..." 
                  type="text"
                />
                <button type="submit" className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-primary transition-colors">
                  <span className="material-symbols-outlined">send</span>
                </button>
              </div>
              <button 
                type="button"
                onClick={() => setIsListening(!isListening)}
                className={`h-14 w-14 flex items-center justify-center rounded-2xl transition-all ${isListening ? 'bg-red-500 shadow-red-500/30 animate-pulse' : 'bg-primary shadow-primary/30'} text-background-dark shadow-xl hover:scale-105`}
              >
                <span className="material-symbols-outlined font-bold text-3xl">mic</span>
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIAssistant;
