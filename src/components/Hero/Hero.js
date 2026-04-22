import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section className="hero" ref={ref}>
      <div className="hero-background">
        <motion.div 
          className="hero-bg-image"
          style={{ 
            backgroundImage: `url(${process.env.PUBLIC_URL || ''}/assets/images/hero.png)`,
            y 
          }}
        />
        <div className="hero-overlay" />
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
              <motion.a 
                href="#collections" 
                className="cta-button primary"
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(212, 175, 55, 0.4)" }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Collections
                <span className="btn-line"></span>
              </motion.a>
              <motion.a 
                href="#bridal" 
                className="cta-button secondary"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }}
                whileTap={{ scale: 0.95 }}
              >
                View Bridal Edit
              </motion.a>
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
