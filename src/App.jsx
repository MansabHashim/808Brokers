import { Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import Search from './pages/Search';
import Cloud from './pages/Cloud';
import Messages from './pages/Messages';
import Shop from './pages/Shop';
import Profile from './pages/Profile';
import Studio from './pages/Studio';
import ForYou from './pages/ForYou';
import PremiumStats from './pages/PremiumStats';
import Landing from './pages/Landing';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css';
import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Landing />} />
        <Route path="/foryou" element={<ForYou />} />
        <Route path="/search" element={<Search />} />
        <Route path="/cloud" element={<Cloud />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/studio" element={<Studio />} />
        <Route path="/premium-stats" element={<PremiumStats />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/foryou" replace />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App; 