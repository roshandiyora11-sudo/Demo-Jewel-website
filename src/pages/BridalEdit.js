import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, Heart, Star, ChevronRight } from 'lucide-react';
import { products } from '../data/products';
import ImageWithFallback from '../components/Common/ImageWithFallback';
import './BridalEdit.css';

const BridalEdit = () => {
  const bridalProducts = products.filter(p => p.occasion.toLowerCase() === 'wedding');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="bridal-edit-page">
      {/* Hero Section */}
      <section className="bridal-hero">
        <div className="bridal-hero-bg">
          <img 
            src="https://images.unsplash.com/photo-1511551203424-9b25d007c571?auto=format&fit=crop&q=80&w=2000" 
            alt="Bridal Collection" 
            className="hero-img"
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="container">
          <motion.div 
            className="bridal-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            <span className="editorial-label">EDITORIAL SERIES 2024</span>
            <h1 className="bridal-title">The Bridal <br /><span>Edit</span></h1>
            <p className="bridal-subtitle">
              A curation of timeless masterpieces designed for your most cherished moments. 
              From heritage gold to contemporary diamonds.
            </p>
            <div className="scroll-hint">
              <span className="line"></span>
              <span>SCROLL TO DISCOVER</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Editorial Section */}
      <section className="bridal-editorial">
        <div className="container">
          <div className="editorial-grid">
            <motion.div 
              className="editorial-image"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=1200" 
                alt="Editorial" 
              />
              <div className="editorial-caption">ETERNAL PROMISE</div>
            </motion.div>
            <motion.div 
              className="editorial-text"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="section-title">A Legacy of Love</h2>
              <div className="title-divider"></div>
              <p>
                Every piece in our Bridal Edit is more than just jewellery; it's a testament to the 
                craftsmanship that has defined Shree Sukhram Jewellers for generations. 
                Our artisans spend hundreds of hours perfecting every curve and setting, 
                ensuring that your special day is marked by unparalleled brilliance.
              </p>
              <div className="editorial-features">
                <div className="feature">
                  <Sparkles size={20} className="icon" />
                  <span>Conflict-Free Diamonds</span>
                </div>
                <div className="feature">
                  <Star size={20} className="icon" />
                  <span>22k Hallmark Gold</span>
                </div>
                <div className="feature">
                  <Heart size={20} className="icon" />
                  <span>Lifetime Exchange</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="bridal-collection-grid">
        <div className="container">
          <div className="grid-header">
            <h2 className="section-title">The Collection</h2>
            <p>Handpicked selections for the modern bride.</p>
          </div>

          <motion.div 
            className="bridal-products"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {bridalProducts.map((product) => (
              <motion.div 
                key={product.id} 
                className="bridal-product-card"
                variants={itemVariants}
              >
                <Link to={`/product/${product.id}`} className="card-link">
                  <div className="product-img-wrapper">
                    <ImageWithFallback src={product.img} alt={product.name} />
                    <div className="hover-overlay">
                      <span>VIEW DETAILS</span>
                    </div>
                  </div>
                  <div className="product-meta">
                    <h3>{product.name}</h3>
                    <p className="material">{product.material} • {product.type}</p>
                    <p className="price">{product.price}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bridal-cta">
        <div className="container">
          <motion.div 
            className="cta-glass-box"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h3>Personalized Consultation</h3>
            <p>Let our experts help you find the perfect piece for your journey.</p>
            <button className="gold-btn">
              Book an Appointment <ChevronRight size={18} />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BridalEdit;
