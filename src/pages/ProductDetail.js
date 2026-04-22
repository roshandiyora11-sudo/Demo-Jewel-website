import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ShieldCheck, Truck, RotateCcw } from 'lucide-react';
import { products } from '../data/products';
import ImageWithFallback from '../components/Common/ImageWithFallback';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (product) {
      setSelectedImage(product.gallery?.[0] || product.img);
    }
  }, [id, product]);

  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Product not found</h2>
        <Link to="/">Back to Home</Link>
      </div>
    );
  }

  const gallery = product.gallery || [product.img];

  return (
    <motion.main 
      className="product-detail-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <div className="container">
        <Link to="/" className="back-link">
          <ArrowLeft size={16} /> <span>BACK TO COLLECTIONS</span>
        </Link>
        
        <div className="detail-container">
          <motion.div 
            className="product-gallery-section"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Main Featured Image */}
            <div className="main-image-viewport">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="full-img-container"
                >
                  <ImageWithFallback src={selectedImage} alt={product.name} />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Thumbnail Strip */}
            <div className="thumbnail-strip">
              {gallery.map((img, idx) => (
                <div 
                  key={idx}
                  className={`thumbnail-box ${selectedImage === img ? 'active' : ''}`}
                  onClick={() => setSelectedImage(img)}
                >
                  <img src={img} alt={`${product.name} view ${idx + 1}`} />
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="product-info-sticky"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="info-header">
              <span className="product-brand">Shree Sukhram Jewellers</span>
              <h1 className="product-detail-name">{product.name}</h1>
              <p className="product-detail-price">{product.price}</p>
            </div>

            <div className="product-detail-desc">
              <p>{product.description}</p>
            </div>

            <div className="spec-table">
              {product.details.map((spec, index) => (
                <div key={index} className="spec-row">
                  <span className="spec-label">{spec.label}</span>
                  <span className="spec-value">{spec.value}</span>
                </div>
              ))}
            </div>

            <div className="actions-group">
              <button className="add-to-cart-btn">ADD TO BAG</button>
              <button className="consultation-btn">BOOK A PRIVATE CONSULTATION</button>
            </div>

            <div className="trust-badges">
              <div className="badge">
                <ShieldCheck size={18} />
                <span>Certified Authenticity</span>
              </div>
              <div className="badge">
                <Truck size={18} />
                <span>Insured Global Shipping</span>
              </div>
              <div className="badge">
                <RotateCcw size={18} />
                <span>30-Day Returns</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Recommended Section (Simplified) */}
      <section className="recommended-section">
        <div className="container">
          <h2 className="title-small">Complementary Pieces</h2>
          <div className="product-grid">
            {products.filter(p => p.id !== product.id).slice(0, 3).map(p => (
              <Link to={`/product/${p.id}`} key={p.id} className="product-card">
                 <div className="product-image-container">
                  <ImageWithFallback src={p.img} alt={p.name} />
                </div>
                <div className="product-info">
                  <h3>{p.name}</h3>
                  <p className="price">{p.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </motion.main>
  );
};

export default ProductDetail;
