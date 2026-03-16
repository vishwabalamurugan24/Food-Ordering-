// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import Home from './pages/Home';
import AIAssistant from './pages/AIAssistant';
import MenuView from './pages/MenuView';
import Recommendations from './pages/Recommendations';
import ExploreMap from './pages/ExploreMap';
import Cart from './pages/Cart';
import OrderConfirmation from './pages/OrderConfirmation';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-background-dark text-slate-100 font-display">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/assistant" element={<AIAssistant />} />
            <Route path="/menu" element={<MenuView />} />
            <Route path="/recommendations" element={<Recommendations />} />
            <Route path="/map" element={<ExploreMap />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/confirmation" element={<OrderConfirmation />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
