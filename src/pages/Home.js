import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero/Hero';
import InfiniteLoop from '../components/InfiniteLoop/InfiniteLoop';
import ProductGrid from '../components/ProductGrid/ProductGrid';
import StorySection from '../components/StorySection/StorySection';
import FeatureHighlights from '../components/FeatureHighlights/FeatureHighlights';
import MapSection from '../components/MapSection/MapSection';
import AppPromo from '../components/AppPromo/AppPromo';
import Product360 from '../components/Product360/Product360';

const Home = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <div id="home"><Hero /></div>
      <div id="features"><FeatureHighlights /></div>
      <InfiniteLoop />
      <div id="story"><StorySection /></div>
      <Product360 />
      <div id="collections"><ProductGrid /></div>
      <div id="visit"><MapSection /></div>
      <div id="app"><AppPromo /></div>
    </motion.main>
  );
};

export default Home;
