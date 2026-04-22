import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search, ChevronDown, SlidersHorizontal } from 'lucide-react';
import { products } from '../data/products';
import ImageWithFallback from '../components/Common/ImageWithFallback';
import './Collections.css';

const Collections = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [isFilterOpen, setIsFilterOpen] = useState(true);

  const materialParam = searchParams.get('material');
  const typeParam = searchParams.get('type');
  const occasionParam = searchParams.get('occasion');
  const genderParam = searchParams.get('gender');

  useEffect(() => {
    let result = [...products];

    // Search Filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(p => 
        p.name.toLowerCase().includes(term) || 
        p.material.toLowerCase().includes(term) || 
        p.type.toLowerCase().includes(term) ||
        p.description?.toLowerCase().includes(term)
      );
    }

    // Sidebar Filters
    if (materialParam) {
      result = result.filter(p => p.material.toLowerCase() === materialParam.toLowerCase());
    }
    if (typeParam) {
      result = result.filter(p => p.type.toLowerCase() === typeParam.toLowerCase());
    }
    if (occasionParam) {
      result = result.filter(p => p.occasion.toLowerCase() === occasionParam.toLowerCase());
    }
    if (genderParam) {
      result = result.filter(p => p.gender.toLowerCase() === genderParam.toLowerCase());
    }

    // Sorting
    const parsePrice = (priceStr) => parseFloat(priceStr.replace(/[^0-9.]/g, ''));
    
    if (sortBy === 'price-low') {
      result.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
    } else if (sortBy === 'newest') {
      result.sort((a, b) => b.id - a.id);
    }

    setFilteredProducts(result);
  }, [materialParam, typeParam, occasionParam, genderParam, searchTerm, sortBy]);

  const clearFilters = () => {
    setSearchParams({});
    setSearchTerm('');
  };

  const removeFilter = (key) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.delete(key);
    setSearchParams(newParams);
  };

  const updateParam = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (newParams.get(key) === value) {
        newParams.delete(key);
    } else {
        newParams.set(key, value);
    }
    setSearchParams(newParams);
  };

  return (
    <motion.main 
      className="collections-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        {/* Page Header */}
        <header className="collections-header">
          <div className="breadcrumb">HOME / COLLECTIONS</div>
          <div className="header-flex">
            <h1>
              {materialParam ? `${materialParam} ` : ''}
              {typeParam ? `${typeParam}s` : 'All Jewellery'}
            </h1>
            <div className="search-wrapper">
              <Search className="search-icon" size={18} />
              <input 
                type="text" 
                placeholder="Search masterpieces..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="premium-search-input"
              />
            </div>
          </div>
        </header>

        {/* Toolbar */}
        <div className="collections-toolbar">
          <button className="mobile-filter-toggle" onClick={() => setIsFilterOpen(!isFilterOpen)}>
            <SlidersHorizontal size={18} />
            {isFilterOpen ? 'Hide Filters' : 'Show Filters'}
          </button>
          
          <div className="results-count">
            {filteredProducts.length} DESIGNS FOUND
          </div>

          <div className="sort-dropdown-wrapper">
            <span className="sort-label">SORT BY:</span>
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className="premium-select"
            >
              <option value="newest">Newest First</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
            <ChevronDown className="select-arrow" size={16} />
          </div>
        </div>

        <div className="collections-layout">
          {/* Sidebar Filters */}
          <AnimatePresence>
            {isFilterOpen && (
              <motion.aside 
                className="filters-sidebar"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                {/* Material Filter */}
                <div className="filter-group">
                  <h4>Material</h4>
                  <div className="filter-options">
                    {['Gold', 'Diamond', 'Silver', 'Platinum'].map(m => (
                      <div 
                        key={m} 
                        className={`filter-option ${materialParam === m.toLowerCase() ? 'active' : ''}`}
                        onClick={() => updateParam('material', m.toLowerCase())}
                      >
                        <span className="checkbox"></span>
                        {m}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Category Filter */}
                <div className="filter-group">
                  <h4>Category</h4>
                  <div className="filter-options">
                    {['Ring', 'Bangle', 'Necklace', 'Earring', 'Pendant'].map(t => (
                      <div 
                        key={t} 
                        className={`filter-option ${typeParam === t.toLowerCase() ? 'active' : ''}`}
                        onClick={() => updateParam('type', t.toLowerCase())}
                      >
                        <span className="checkbox"></span>
                        {t}s
                      </div>
                    ))}
                  </div>
                </div>

                {/* Occasion Filter */}
                <div className="filter-group">
                  <h4>Occasion</h4>
                  <div className="filter-options">
                    {['Wedding', 'Daily Wear', 'Gifting', 'Party'].map(o => (
                      <div 
                        key={o} 
                        className={`filter-option ${occasionParam === o.toLowerCase() ? 'active' : ''}`}
                        onClick={() => updateParam('occasion', o.toLowerCase())}
                      >
                        <span className="checkbox"></span>
                        {o}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Gender Filter */}
                <div className="filter-group">
                  <h4>Gender</h4>
                  <div className="filter-options">
                    {['Women', 'Men', 'Kids'].map(g => (
                      <div 
                        key={g} 
                        className={`filter-option ${genderParam === g.toLowerCase() ? 'active' : ''}`}
                        onClick={() => updateParam('gender', g.toLowerCase())}
                      >
                        <span className="checkbox"></span>
                        {g}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.aside>
            )}
          </AnimatePresence>

          {/* Main Content */}
          <main className={`collections-main ${!isFilterOpen ? 'full-width' : ''}`}>
            {/* Active Tags */}
            <div className="active-filters-row">
              <div className="active-tags">
                <AnimatePresence>
                  {materialParam && (
                    <motion.span className="tag" layout>
                      {materialParam} <X size={14} onClick={() => removeFilter('material')} />
                    </motion.span>
                  )}
                  {typeParam && (
                    <motion.span className="tag" layout>
                      {typeParam} <X size={14} onClick={() => removeFilter('type')} />
                    </motion.span>
                  )}
                  {occasionParam && (
                    <motion.span className="tag" layout>
                      {occasionParam} <X size={14} onClick={() => removeFilter('occasion')} />
                    </motion.span>
                  )}
                  {genderParam && (
                    <motion.span className="tag" layout>
                      {genderParam} <X size={14} onClick={() => removeFilter('gender')} />
                    </motion.span>
                  )}
                  {searchTerm && (
                    <motion.span className="tag" layout>
                      Search: {searchTerm} <X size={14} onClick={() => setSearchTerm('')} />
                    </motion.span>
                  )}
                </AnimatePresence>
                {(materialParam || typeParam || occasionParam || genderParam || searchTerm) && (
                    <button className="clear-all" onClick={clearFilters}>Clear All</button>
                )}
              </div>
            </div>

            {/* Grid */}
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
                        {product.category === 'NEW' && <span className="badge-new">NEW</span>}
                        {product.category === 'BEST SELLER' && <span className="badge-bestseller">BEST SELLER</span>}
                      </div>
                      <div className="product-info">
                        <h3>{product.name}</h3>
                        <p className="product-meta-desc">{product.material} • {product.type}</p>
                        <p className="price">{product.price}</p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="no-results">
                <Search size={48} className="no-results-icon" />
                <h3>No masterpieces found.</h3>
                <p>Try adjusting your filters or search term.</p>
                <button onClick={clearFilters} className="cta-button primary">Reset All Filters</button>
              </div>
            )}
          </main>
        </div>
      </div>
    </motion.main>
  );
};

export default Collections;
