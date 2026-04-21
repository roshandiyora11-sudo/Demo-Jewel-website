import React from 'react';
import { Smartphone } from 'lucide-react';
import './AppPromo.css';

const AppPromo = () => {
  return (
    <section className="app-promo section-dark">
      <div className="container">
        <div className="promo-container">
          <div className="promo-text">
            <span className="subtitle" style={{ color: 'var(--color-gold)' }}>MOBILE EXPERIENCE</span>
            <h2 className="title">Luxury at Your Fingertips</h2>
            <p>
              Download the Shree Sukhram mobile app to try on pieces virtually and stay updated on our exclusive collections.
            </p>
          </div>
          
          <div className="promo-qr">
            <div className="qr-box">
              <div className="qr-inner">
                <img 
                  src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://shreesukhram.com" 
                  alt="QR Code" 
                  className="qr-image"
                />
                <Smartphone className="qr-icon-overlay" size={24} />
              </div>
            </div>
            <p className="qr-label">SCAN TO DOWNLOAD</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPromo;
