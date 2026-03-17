// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import HomePage from './pages/HomePage';
import AIAssistantPage from './pages/AIAssistantPage';
import MenuPage from './pages/MenuPage';
import RecommendationPage from './pages/RecommendationPage';
import MapDiscoveryPage from './pages/MapDiscoveryPage';
import WeatherHealthPage from './pages/WeatherHealthPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import OrderConfirmationPage from './pages/OrderConfirmationPage';
import UserProfilePage from './pages/UserProfilePage';
import ChatBot from './components/ChatBot/ChatBot';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-background-dark text-slate-100 font-display">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/assistant" element={<AIAssistantPage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/recommendations" element={<RecommendationPage />} />
            <Route path="/weather-health" element={<WeatherHealthPage />} />
            <Route path="/map" element={<MapDiscoveryPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/confirmation" element={<OrderConfirmationPage />} />
            <Route path="/profile" element={<UserProfilePage />} />
          </Routes>
        </div>
        <Footer />
        <ChatBot />
      </div>
    </Router>
  );
}

export default App;
