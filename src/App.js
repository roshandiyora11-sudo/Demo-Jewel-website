import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/global.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import SmoothScroll from './components/SmoothScroll';
import SideNav from './components/SideNav/SideNav';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Collections from './pages/Collections';

function App() {
  return (
    <Router>
      <SmoothScroll>
        <div className="App">
          <Navbar />
          <SideNav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/collections" element={<Collections />} />
          </Routes>
          <Footer />
        </div>
      </SmoothScroll>
    </Router>
  );
}

export default App;
