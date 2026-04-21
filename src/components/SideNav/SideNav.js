import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './SideNav.css';

const SideNav = () => {
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();

  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'features', label: 'Features' },
    { id: 'story', label: 'Our Story' },
    { id: 'collections', label: 'Collections' },
    { id: 'visit', label: 'Visit' },
    { id: 'app', label: 'Mobile App' },
  ];

  useEffect(() => {
    if (location.pathname !== '/') return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const scrollToSection = (id) => {
    if (location.pathname !== '/') {
      navigate(`/#${id}`);
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (location.pathname !== '/') return null;

  return (
    <div className="side-nav">
      {sections.map((section) => (
        <div 
          key={section.id} 
          className={`nav-dot-container ${activeSection === section.id ? 'active' : ''}`}
          onClick={() => scrollToSection(section.id)}
        >
          <span className="nav-label">{section.label}</span>
          <div className="nav-dot"></div>
        </div>
      ))}
    </div>
  );
};

export default SideNav;
