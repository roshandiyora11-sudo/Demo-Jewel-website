import React from 'react';
import './InfiniteLoop.css';

const InfiniteLoop = () => {
  const products = [
    { id: 1, img: '/assets/images/p1.png', name: 'Solitaire D' },
    { id: 2, img: '/assets/images/p2.png', name: 'Legacy Gold' },
    { id: 3, img: '/assets/images/p3.png', name: 'Pearl Drop' },
    { id: 4, img: '/assets/images/hero.png', name: 'Signature' },
    { id: 5, img: '/assets/images/bridal.png', name: 'Eternal' },
  ];

  // Double the array for seamless looping
  const loopItems = [...products, ...products, ...products];

  return (
    <section className="infinite-loop-section">
      <div className="section-header container">
        <span className="subtitle">LATEST CREATIONS</span>
        <h2 className="title">The Showcase</h2>
      </div>
      
      <div className="loop-container">
        <div className="loop-track">
          {loopItems.map((item, index) => (
            <div key={index} className="loop-item">
              <div className="image-wrapper">
                <img src={`${process.env.PUBLIC_URL || ''}${item.img}`} alt={item.name} />
                <div className="item-overlay">
                  <span>{item.name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfiniteLoop;
