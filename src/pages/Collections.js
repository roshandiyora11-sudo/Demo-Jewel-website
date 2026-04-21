import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { products } from '../data/products';
import ImageWithFallback from '../components/Common/ImageWithFallback';
import './Collections.css';

const Collections = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState(products);
  
  const materialParam = searchParams.get('material');
  const typeParam = searchParams.get('type');
  const occasionParam = searchParams.get('occasion');

  useEffect(() => {
    let result = products;

    if (materialParam) {
      result = result.filter(p => p.material.toLowerCase() === materialParam.toLowerCase());
    }
    if (typeParam) {
      result = result.filter(p => p.type.toLowerCase() === typeParam.toLowerCase());
    }
    if (occasionParam) {
      result = result.filter(p => p.occasion.toLowerCase() === occasionParam.toLowerCase());
    }

    setFilteredProducts(result);
    window.scrollTo(0, 0);
  }, [materialParam, typeParam, occasionParam]);

  const clearFilters = () => {
    setSearchParams({});
  };

  const removeFilter = (key) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.delete(key);
    setSearchParams(newParams);
  };

  return (
    <div className="collections-page">
      <div className="container">
        <header className="collections-header">
          <div className="breadcrumb">HOME / COLLECTIONS</div>
          <h1>
            {materialParam ? `${materialParam} ` : ''}
            {typeParam ? `${typeParam}s` : 'All Jewellery'}
          </h1>
        </header>

        <div className="collections-layout">
          {/* Sidebar */}
          <aside className="filters-sidebar">
            <div className="filter-group">
              <h4>Material</h4>
              <div className="filter-options">
                {['Gold', 'Diamond', 'Silver', 'Platinum'].map(m => (
                  <div 
                    key={m} 
                    className={`filter-option ${materialParam === m.toLowerCase() ? 'active' : ''}`}
                    onClick={() => {
                        const newParams = new URLSearchParams(searchParams);
                        newParams.set('material', m.toLowerCase());
                        setSearchParams(newParams);
                    }}
                  >
                    {m}
                  </div>
                ))}
              </div>
            </div>

            <div className="filter-group">
              <h4>Category</h4>
              <div className="filter-options">
                {['Ring', 'Bangle', 'Necklace', 'Earring', 'Pendant'].map(t => (
                  <div 
                    key={t} 
                    className={`filter-option ${typeParam === t.toLowerCase() ? 'active' : ''}`}
                    onClick={() => {
                        const newParams = new URLSearchParams(searchParams);
                        newParams.set('type', t.toLowerCase());
                        setSearchParams(newParams);
                    }}
                  >
                    {t}s
                  </div>
                ))}
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="collections-main">
            <div className="active-filters-bar">
              <div className="active-tags">
                <AnimatePresence>
                  {materialParam && (
                    <motion.span 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="tag"
                    >
                      {materialParam} <X size={14} onClick={() => removeFilter('material')} />
                    </motion.span>
                  )}
                  {typeParam && (
                    <motion.span 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="tag"
                    >
                      {typeParam} <X size={14} onClick={() => removeFilter('type')} />
                    </motion.span>
                  )}
                </AnimatePresence>
                {(materialParam || typeParam) && (
                    <button className="clear-all" onClick={clearFilters}>Clear All</button>
                )}
              </div>
              <div className="results-info">
                Showing {filteredProducts.length} results
              </div>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="product-grid">
                {filteredProducts.map((product) => (
                  <motion.div 
                    key={product.id} 
                    className="product-card"
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Link to={`/product/${product.id}`} className="product-card-link">
                      <div className="product-image-container">
                        <ImageWithFallback src={product.img} alt={product.name} className="main-img" />
                        <div className="card-actions">
                          <button className="quick-add">VIEW DETAILS</button>
                        </div>
                      </div>
                      <div className="product-info">
                        <h3>{product.name}</h3>
                        <p className="price">{product.price}</p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="no-results">
                <h3>No products found in this category.</h3>
                <p>Try adjusting your filters or browse our other collections.</p>
                <button onClick={clearFilters} className="cta-button primary">View All Items</button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Collections;
