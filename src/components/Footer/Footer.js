import React from 'react';
import { Camera, MessageCircle, Send, Play } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer section-dark">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <h2 className="brand-logo">SHREE SUKHRAM</h2>
            <p className="brand-tagline">Crafting Legacies Since 1985</p>
            <div className="social-links">
              <a href="#"><Camera size={20} /></a>
              <a href="#"><MessageCircle size={20} /></a>
              <a href="#"><Send size={20} /></a>
              <a href="#"><Play size={20} /></a>
            </div>
          </div>
          
          <div className="footer-links">
            <div className="link-col">
              <h4>COLLECTIONS</h4>
              <ul>
                <li><a href="#">Bridal Edit</a></li>
                <li><a href="#">Gold Heritage</a></li>
                <li><a href="#">Diamond Masterpieces</a></li>
                <li><a href="#">Limited Edition</a></li>
              </ul>
            </div>
            <div className="link-col">
              <h4>SERVICES</h4>
              <ul>
                <li><a href="#">Custom Design</a></li>
                <li><a href="#">Jewellery Care</a></li>
                <li><a href="#">Virtual Viewing</a></li>
                <li><a href="#">Gifting</a></li>
              </ul>
            </div>
            <div className="link-col">
              <h4>ASSISTANCE</h4>
              <ul>
                <li><a href="#">Track Order</a></li>
                <li><a href="#">Care & Repairs</a></li>
                <li><a href="#">Book Appointment</a></li>
                <li><a href="#">FAQ</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2026 Shree Sukhram Jewellers. All rights reserved.</p>
          <div className="legal-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
