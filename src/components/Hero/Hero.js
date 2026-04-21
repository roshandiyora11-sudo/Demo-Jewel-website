import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <motion.img 
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          src="/assets/images/hero.png" 
          alt="Luxury Jewelry Hero" 
        />
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container hero-container">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
          >
            <span className="hero-subtitle">ESTABLISHED 1985</span>
            <h1 className="hero-title">
              Refined <br />
              <span className="indent">Elegance</span>
            </h1>
            <p className="hero-desc">
              Discover masterpieces crafted with precision and a legacy of trust. 
              The ultimate expression of luxury for your most cherished moments.
            </p>
            <div className="hero-cta-group">
              <a href="#collections" className="cta-button primary">
                Explore Collections
                <span className="btn-line"></span>
              </a>
              <a href="#bridal" className="cta-button secondary">
                View Bridal Edit
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span className="scroll-text">SCROLL TO EXPLORE</span>
        <div className="scroll-line"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
