import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import './styles/global.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import SmoothScroll from './components/SmoothScroll';
import SideNav from './components/SideNav/SideNav';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Collections from './pages/Collections';

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/collections" element={<Collections />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <SmoothScroll>
        <div className="App">
          <Navbar />
          <SideNav />
          <AnimatedRoutes />
          <Footer />
        </div>
      </SmoothScroll>
    </Router>
  );
}

export default App;
