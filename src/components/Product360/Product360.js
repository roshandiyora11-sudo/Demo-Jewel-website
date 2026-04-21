import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Rotate3D, Move, Sparkles, Box } from 'lucide-react';
import ImageWithFallback from '../Common/ImageWithFallback';
import './Product360.css';

const Product360 = () => {
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const rotation = useMotionValue(0);
  
  // Smooth spring for the rotation
  const springRotation = useSpring(rotation, { damping: 30, stiffness: 200 });
  
  // Transform the rotation value into degrees (multiplied for faster spin)
  const rotateY = useTransform(springRotation, [0, 1000], [0, 360 * 5]);

  // Derive shine opacity from rotateY — must be at component level (Rules of Hooks)
  const shineOpacity = useTransform(rotateY, [0, 180, 360], [0.1, 0.4, 0.1]);

  const handleDrag = (event, info) => {
    setIsAutoRotating(false);
    rotation.set(rotation.get() + info.delta.x);
  };

  return (
    <section id="interactive-viewer" className="product-360-section section-beige">
      <div className="container">
        <div className="viewer-layout">
          <div className="viewer-content">
            <span className="subtitle">INTERACTIVE 360° EXPERIENCE</span>
            <h2 className="title">The Signature <br/>Masterpiece</h2>
            <p className="description">
              Observe every angle of our flagship solitaire. Use your mouse to spin the 18k gold band and witness the symmetrical brilliance of our master-cut diamond.
            </p>
            
            <div className="viewer-specs">
              <div className="spec-item">
                <Sparkles size={16} />
                <span>FLAWLESS CLARITY</span>
              </div>
              <div className="spec-item">
                <Rotate3D size={16} />
                <span>IDEAL CUT</span>
              </div>
              <div className="spec-item">
                <Box size={16} />
                <span>DRAG TO ROTATE</span>
              </div>
            </div>

            <div className="viewer-controls">
                <button 
                    className={`control-btn ${isAutoRotating ? 'active' : ''}`}
                    onClick={() => setIsAutoRotating(!isAutoRotating)}
                >
                    {isAutoRotating ? 'PAUSE ROTATION' : 'RESUME AUTO-SPIN'}
                </button>
            </div>
          </div>

          <div className="viewer-display">
            <div className="viewer-platform">
              <motion.div 
                className="viewer-image-wrapper"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDrag={handleDrag}
                style={{
                  rotateY: rotateY,
                  perspective: 1000,
                  cursor: 'grab'
                }}
                whileTap={{ cursor: 'grabbing' }}
                animate={isAutoRotating ? { rotateY: [rotation.get(), rotation.get() + 360] } : {}}
                transition={isAutoRotating ? { duration: 10, repeat: Infinity, ease: "linear" } : {}}
              >
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=1200" 
                  alt="Luxury Gold Ring" 
                  className="viewer-product-image"
                  draggable="false"
                />
                
                {/* Dynamic Shine Effect */}
                <motion.div 
                  className="shine-effect-dynamic"
                  style={{ opacity: shineOpacity }}
                />
              </motion.div>
              
              <div className="platform-base">
                <div className="base-ring"></div>
                <div className="base-glow"></div>
              </div>
            </div>

            <div className="viewer-hint">
              <Move size={18} />
              <span>DRAG LEFT OR RIGHT TO SPIN</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product360;
