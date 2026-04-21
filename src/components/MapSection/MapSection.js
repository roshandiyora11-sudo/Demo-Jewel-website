import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import './MapSection.css';

const MapSection = () => {
  return (
    <section className="map-section section-beige">
      <div className="container">
        <div className="map-grid">
          <div className="info-side">
            <span className="subtitle">VISIT OUR SHOWROOM</span>
            <h2 className="title">Personal Consultation</h2>
            <p className="description">
              Experience the brilliance of our collection in person. Our experts are ready to guide you through a private viewing.
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <MapPin className="gold-icon" size={24} />
                <div>
                  <h4>Location</h4>
                  <p>123 Luxury Avenue, Diamond District<br />Mumbai, MH 400001</p>
                </div>
              </div>
              <div className="contact-item">
                <Phone className="gold-icon" size={24} />
                <div>
                  <h4>Phone</h4>
                  <p>+91 98765 43210</p>
                </div>
              </div>
              <div className="contact-item">
                <Clock className="gold-icon" size={24} />
                <div>
                  <h4>Hours</h4>
                  <p>Mon - Sat: 10:30 AM - 8:30 PM<br />Sun: By Appointment</p>
                </div>
              </div>
            </div>
            
            <button className="book-btn">Book an Appointment</button>
          </div>
          
          <div className="map-side">
            <div className="map-card-styled">
              <div className="map-placeholder-bg">
                {/* Visual representation of a luxury map */}
                <div className="grid-overlay"></div>
                <div className="pin-highlight">
                  <div className="pulse"></div>
                  <MapPin className="main-pin" size={48} />
                </div>
              </div>
              <div className="map-footer">
                <span>View on Google Maps</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
