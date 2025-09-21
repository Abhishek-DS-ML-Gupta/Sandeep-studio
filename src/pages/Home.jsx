import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1 className="hero-title">Sandeep Studio & Mixing Lab</h1>
        <p className="hero-subtitle">
          Capturing cinematic moments, one frame at a time.
        </p>
        <Link to="/portfolio" className="cta-button">View Our Portfolio</Link>
      </div>

      <div className="preview-section services-preview">
        <h2>Our Services</h2>
        <p>We specialize in a wide array of photography and videography services, including:</p>
        <ul>
          <li>Wedding & Pre-Wedding Shoots</li>
          <li>Cinematic Films & Drone Footage</li>
          <li>Maternity, Newborn & Portrait Sessions</li>
        </ul>
        <Link to="/services" className="secondary-button">See All Services</Link>
      </div>

      <div className="preview-section about-preview">
        <h2>About Sandeep Gandhi Nehal</h2>
        <p>
          The creative force behind the studio is also a celebrated poet, blending a love for art with a passion for storytelling.
        </p>
        <Link to="/about" className="secondary-button">Learn More About Us</Link>
      </div>

      <div className="contact-cta">
        <h2>Ready to Capture Your Story?</h2>
        <Link to="/contact" className="cta-button">Get in Touch</Link>
      </div>
    </div>
  );
}

export default Home;