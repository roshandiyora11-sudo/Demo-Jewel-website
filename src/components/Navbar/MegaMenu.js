import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Gem, Disc, Watch, Sparkles, Star, Gift, Heart } from 'lucide-react';
import './MegaMenu.css';

const MegaMenu = ({ type, isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('Category');

  const contentMap = {
    'Category': {
      DIAMOND: [
        { name: 'All Jewellery', type: '', material: 'diamond', icon: <Gem size={20} /> },
        { name: 'Finger Rings', type: 'ring', material: 'diamond', icon: <Disc size={20} /> },
        { name: 'Nose Pin', type: 'pendant', material: 'diamond', icon: <Sparkles size={20} /> },
        { name: 'Bangles', type: 'bangle', material: 'diamond', icon: <Watch size={20} /> },
        { name: 'Earrings', type: 'earring', material: 'diamond', icon: <Sparkles size={20} /> },
        { name: 'Mangalsutra', type: 'necklace', material: 'diamond', icon: <Gem size={20} /> },
        { name: 'Necklaces', type: 'necklace', material: 'diamond', icon: <Gem size={20} /> },
        { name: 'Bracelets', type: 'bangle', material: 'diamond', icon: <Watch size={20} /> },
        { name: 'Pendants', type: 'pendant', material: 'diamond', icon: <Star size={20} /> },
        { name: 'Chains', type: 'necklace', material: 'diamond', icon: <Disc size={20} /> },
        { name: 'Necklace Set', type: 'necklace', material: 'diamond', icon: <Gem size={20} /> },
        { name: 'Pendants & Earring Set', type: 'necklace', material: 'diamond', icon: <Gift size={20} /> },
      ],
      GOLD: [
        { name: 'All Jewellery', type: '', material: 'gold', icon: <Gem size={20} /> },
        { name: 'Finger Rings', type: 'ring', material: 'gold', icon: <Disc size={20} /> },
        { name: 'Bangles', type: 'bangle', material: 'gold', icon: <Watch size={20} /> },
        { name: 'Earrings', type: 'earring', material: 'gold', icon: <Sparkles size={20} /> },
        { name: 'Necklaces', type: 'necklace', material: 'gold', icon: <Gem size={20} /> },
        { name: 'Chains', type: 'necklace', material: 'gold', icon: <Disc size={20} /> },
        { name: 'Bracelets', type: 'bangle', material: 'gold', icon: <Watch size={20} /> },
        { name: 'Pendants', type: 'pendant', material: 'gold', icon: <Star size={20} /> },
      ]
    },
    'Occasion': {
      DIAMOND: [
        { name: 'Wedding / Bridal', to: '/bridal-edit', icon: <Heart size={20} /> },
        { name: 'Daily Wear', type: '', material: 'diamond', icon: <Sparkles size={20} /> },
        { name: 'Gifting', type: '', material: 'diamond', icon: <Gift size={20} /> },
      ],
      GOLD: [
        { name: 'Wedding / Bridal', to: '/bridal-edit', icon: <Heart size={20} /> },
        { name: 'Daily Wear', type: '', material: 'gold', icon: <Sparkles size={20} /> },
        { name: 'Gifting', type: '', material: 'gold', icon: <Gift size={20} /> },
      ]
    }
  };

  if (!isOpen) return null;

  const currentItems = contentMap[activeTab]?.[type] || contentMap['Category']?.[type] || [];

  return (
    <motion.div 
      className="mega-menu-overlay"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      onMouseLeave={onClose}
    >
      <div className="mega-container">
        {/* Left Sidebar - Tabbed Navigation */}
        <div className="mega-sidebar">
          {['Category', 'Price', 'Occasion', 'Gender'].map((tab) => (
            <div 
              key={tab}
              className={`mega-tab ${activeTab === tab ? 'active' : ''}`}
              onMouseEnter={() => setActiveTab(tab)}
            >
              <span>{tab}</span>
            </div>
          ))}
        </div>

        {/* Dynamic Content Area */}
        <div className="mega-content-grid-area">
          <div className="mega-items-container">
            <div className="mega-items-grid">
              {currentItems.length > 0 ? currentItems.map((item, idx) => (
                <Link 
                  key={idx}
                  to={item.to || `/collections?material=${item.material || ''}&type=${item.type || ''}`}
                  className="mega-item-link"
                  onClick={onClose}
                >
                  <div className="mega-item-icon">
                    {item.icon || <Sparkles size={18} />}
                  </div>
                  <span className="mega-item-name">{item.name}</span>
                </Link>
              )) : (
                <div className="coming-soon-msg">More {activeTab} filters coming soon...</div>
              )}
            </div>
          </div>
          
          {/* Bottom Promotional Banner */}
          <div className="mega-bottom-banner">
            <div className="banner-visuals">
              <img src={`${process.env.PUBLIC_URL || ''}/assets/images/p1.png`} alt="thumb" />
              <img src={`${process.env.PUBLIC_URL || ''}/assets/images/p2.png`} alt="thumb" />
            </div>
            <div className="banner-text">
              <h3>Jewellery for Every Moment—See It All Here!</h3>
              <p>20,000+ designs to choose from</p>
            </div>
            <Link to="/collections" className="banner-view-all-btn" onClick={onClose}>
              View All
            </Link>
          </div>
        </div>

        {/* Right Featured Image / Editorial */}
        <div className="mega-editorial-section">
          <div className="editorial-card">
            <div className="editorial-img-container">
              <img 
                src={type === 'DIAMOND' 
                  ? "https://images.unsplash.com/photo-1627250329059-04d7776106c5?auto=format&fit=crop&q=80&w=800" 
                  : "https://images.unsplash.com/photo-1510006780316-2699baa1abb7?auto=format&fit=crop&q=80&w=800"
                } 
                alt="Editorial" 
              />
            </div>
            <div className="editorial-text">
              <h4>Elan - My World. My Story.</h4>
              <Link to="/collections" className="explore-link">Explore Now <ChevronRight size={14} /></Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MegaMenu;
