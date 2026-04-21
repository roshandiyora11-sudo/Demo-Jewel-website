import React from 'react';
import { motion } from 'framer-motion';
import './StorySection.css';

const StorySection = () => {
  return (
    <section className="story-section">
      <div className="container">
        <div className="story-layout">
          <motion.div 
            className="story-image"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <img src="/assets/images/bridal.png" alt="Craftsmanship" />
            <div className="image-caption">STUDIO SERIES 01</div>
          </motion.div>
          
          <motion.div 
            className="story-content"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="subtitle">OUR LEGACY</span>
            <h2 className="title">A Heritage of Precision</h2>
            <div className="divider"></div>
            <p>
              For over three decades, Shree Sukhram Jewellers has been a sanctuary for those who appreciate the finer things. Every piece in our collection is a testament to the skill of our master artisans, who blend centuries-old techniques with modern design sensibilities.
            </p>
            <p>
              We believe that jewelry is not just an accessory, but a storyteller of life's most precious milestones. Our commitment to using only the finest ethically sourced materials ensures that your legacy remains as brilliant as the day it was created.
            </p>
            <a href="#" className="story-btn">Read Our Story</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
