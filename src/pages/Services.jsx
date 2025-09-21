import React, { useState, useRef, useEffect } from 'react';
import ServiceSlideshow from '../components/ServiceSlideshow';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const servicesList = {
  'Pre-Wedding': [
    { title: 'Drone Shot', image: 'https://images.pexels.com/photos/3993214/pexels-photo-3993214.jpeg' },
    { title: 'Cinematic Shot', image: 'https://images.pexels.com/photos/3993215/pexels-photo-3993215.jpeg' }
  ],
  'Birthday': [
    { title: 'Party Shoot', image: 'https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg' },
    { title: 'Cake Cutting', image: 'https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg' }
  ],
  'Wedding': [
    { title: 'Engagement', image: 'https://plus.unsplash.com/premium_photo-1682090789715-a1acbfe72404?w=900&auto=format&fit=crop&q=60' },
    { title: 'Reception', image: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg' }
  ]
};

// Client reviews (placeholder avatars)
const clientReviews = [
  { name: 'Rahul Sharma', review: 'Amazing photography! Highly recommend.', rating: 5, avatar: '' },
  { name: 'Priya Singh', review: 'Professional and timely delivery. Loved it!', rating: 5, avatar: '' },
  { name: 'Amit Verma', review: 'Creative shots and excellent editing.', rating: 5, avatar: '' }
];

function Services() {
  const [selectedCategory, setSelectedCategory] = useState('Pre-Wedding');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setDropdownOpen(prev => !prev);
  const selectCategory = (category) => {
    setSelectedCategory(category);
    setDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false
  };

  return (
    <div className="services-page">
      {/* Services Offered */}
      <section className="services-offered">
        <h1> Services Offered</h1>
        <p>
          Sandeep Studio & Mixing Lab specializes in a wide array of photography and videography services, including:
        </p>
        <ul>
          <li><strong>Photography:</strong> Wedding, pre-wedding, candid, maternity, newborn, birthday, and portfolio shoots</li>
          <li><strong>Videography:</strong> Cinematic wedding films, drone footage, and event coverage</li>
          <li><strong>Studio Setup:</strong> Indoor/outdoor setups, LED walls, plasma TVs, and Zimmi zip crane</li>
          <li><strong>Mixing & Editing:</strong> Professional video and photo editing services</li>
        </ul>

        {/* Category Dropdown */}
        <div ref={dropdownRef} className={`custom-select-container ${dropdownOpen ? 'open' : ''}`}>
          <div className="custom-select-display" onClick={toggleDropdown}>
            {selectedCategory} <span className="custom-select-arrow"></span>
          </div>
          {dropdownOpen && (
            <ul className="custom-select-options">
              {Object.keys(servicesList).map(category => (
                <li
                  key={category}
                  onClick={() => selectCategory(category)}
                  className={selectedCategory === category ? 'selected' : ''}
                >
                  {category}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Slideshow */}
        <ServiceSlideshow images={servicesList[selectedCategory]} />
      </section>

      {/* Client Reviews */}
      <section className="client-reviews">
        <h2> Client Reviews</h2>
        <Slider {...sliderSettings}>
          {clientReviews.map((client, idx) => (
            <div key={idx} className="review-card" style={{ display: 'flex', backgroundColor: '#fff', color: '#000', padding: '1.5rem', borderRadius: '12px', alignItems: 'center', gap: '1rem' }}>
              <div className="review-avatar" style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                backgroundColor: '#ccc',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem'
              }}>👤</div>
              <div className="review-texts" style={{ textAlign: 'left' }}>
                <h3>{client.name}</h3>
                <p>{'⭐'.repeat(client.rating)}</p>
                <p>"{client.review}"</p>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* Online Presence */}
      <section className="online-presence">
        <h2> Online Presence</h2>
        <p>Check out our work online:</p>
        <div className="social-embed" style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
          {/* YouTube auto-play video */}
          <iframe
            width="350"
            height="200"
            src="https://www.youtube.com/embed/qTMec_bSYNA?autoplay=1&mute=1&loop=1&playlist=qTMec_bSYNA"
            title="YouTube Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          {/* Instagram block with blur effect and Visit Instagram text */}
          <a
            href="https://www.instagram.com/sandeepstudioazamgarh/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: '350px',
              height: '200px',
              borderRadius: '12px',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textDecoration: 'none'
            }}
          >
            {/* Blurred background */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: 'url("https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'blur(4px) brightness(0.5)',
                zIndex: 1,
              }}
            ></div>

            {/* Text overlay */}
            <span
              style={{
                position: 'relative',
                zIndex: 2,
                color: '#fff',
                fontWeight: 'bold',
                fontSize: '1.2rem',
                textAlign: 'center'
              }}
            >
              Visit Instagram
            </span>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Services;
