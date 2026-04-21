import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { products } from '../../data/products';
import ImageWithFallback from '../Common/ImageWithFallback';
import './ProductGrid.css';

const ProductGrid = () => {
  return (
    <section className="product-section section-beige">
      <div className="container">
        <div className="grid-header">
          <div>
            <span className="subtitle">CURATED SELECTION</span>
            <h2 className="title">Iconic Pieces</h2>
          </div>
          <Link to="/collections" className="view-all">View All Products</Link>
        </div>

        <div className="product-grid">
          {products.slice(0, 4).map((product) => (
            <motion.div 
              key={product.id} 
              className="product-card"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <Link to={`/product/${product.id}`} className="product-card-link">
                <div className="product-image-container">
                  <ImageWithFallback src={product.img} alt={product.name} className="main-img" />
                  <div className="card-actions">
                    <button className="quick-add">VIEW DETAILS</button>
                  </div>
                  {product.category && <span className="cat-tag">{product.category}</span>}
                </div>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p className="price">{product.price}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
