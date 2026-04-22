import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Heart, ShoppingBag, User, Menu, X } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import MegaMenu from './MegaMenu';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveMegaMenu(null);
  }, [location]);

  const navLinks = [
    { name: 'All Jewellery', href: '/collections' },
    { name: 'Gold', href: '/collections?material=gold', type: 'GOLD' },
    { name: 'Diamond', href: '/collections?material=diamond', type: 'DIAMOND' },
    { name: 'Collections', href: '/collections' },
  ];

  return (
    <nav
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
      onMouseLeave={() => setActiveMegaMenu(null)}
    >
      <div className="navbar-container container">
        {/* Left: Mobile Toggle */}
        <button
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Center: Logo */}
        <div className="navbar-logo">
          <Link to="/">SHREE SUKHRAM</Link>
          <span className="logo-subtitle">JEWELLERS</span>
        </div>

        {/* Center-Right: Main Links */}
        <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          {navLinks.map((link) => (
            <li
              key={link.name}
              onMouseEnter={() => link.type && setActiveMegaMenu(link.type)}
            >
                <Link to={link.href} className="nav-link-item">
                  {link.name}
                  <span className="link-underline"></span>
                </Link>
            </li>
          ))}
        </ul>

        {/* Right: Actions */}
        <div className="nav-actions">
          <button className="nav-icon-btn"><Search size={20} /></button>
          <button className="nav-icon-btn wishlist-btn"><Heart size={20} /></button>
          <button className="nav-icon-btn"><ShoppingBag size={20} /></button>
          <button className="nav-icon-btn"><User size={20} /></button>
        </div>
      </div>

      {/* Advanced Mega Menu Render */}
      <AnimatePresence>
        {activeMegaMenu && (
          <MegaMenu
            type={activeMegaMenu}
            isOpen={true}
            onClose={() => setActiveMegaMenu(null)}
          />
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
