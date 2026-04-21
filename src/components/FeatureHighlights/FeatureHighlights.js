import React from 'react';
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
            <div key={i} className="feature-item">
              <div className="feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlights;
