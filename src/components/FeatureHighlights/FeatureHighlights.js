import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Truck, Star } from 'lucide-react';
import './FeatureHighlights.css';

const FeatureHighlights = () => {
  const features = [
    { icon: <ShieldCheck size={32} />, title: 'Certified Quality', desc: 'BIS Hallmarked Gold & GIA Certified Diamonds' },
    { icon: <Truck size={32} />, title: 'Secure Delivery', desc: 'Fully insured shipping to your doorstep' },
    { icon: <Star size={32} />, title: 'Timeless Artistry', desc: 'Master artisans with decades of heritage' }
  ];

  return (
    <section className="features-section section-light">
      <div className="container">
        <div className="features-grid">
          {features.map((f, i) => (
            <motion.div 
              key={i} 
              className="feature-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <div className="feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlights;
