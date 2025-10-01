import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ServiceSlideshow from '../components/ServiceSlideshow';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const servicesList = {
  'Pre-Wedding': [
    { title: 'Drone Shot', image: 'https://images.pexels.com/photos/3993214/pexels-photo-3993214.jpeg', description: 'Aerial views of your special moments' },
    { title: 'Cinematic Shot', image: 'https://images.pexels.com/photos/3993215/pexels-photo-3993215.jpeg', description: 'Movie-style storytelling for your love story' }
  ],
  'Birthday': [
    { title: 'Party Shoot', image: 'https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg', description: 'Capture the joy and excitement of celebrations' },
    { title: 'Cake Cutting', image: 'https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg', description: 'Sweet moments to cherish forever' }
  ],
  'Wedding': [
    { title: 'Engagement', image: 'https://plus.unsplash.com/premium_photo-1682090789715-a1acbfe72404?w=900&auto=format&fit=crop&q=60', description: 'The beginning of your forever journey' },
    { title: 'Reception', image: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg', description: 'Grand celebrations with family and friends' }
  ]
};

// Client reviews
const clientReviews = [
  { name: 'Rahul Sharma', review: 'Amazing photography! Highly recommend.', rating: 5, avatar: 'https://randomuser.me/api/portraits/men/32.jpg' },
  { name: 'Priya Singh', review: 'Professional and timely delivery. Loved it!', rating: 5, avatar: 'https://randomuser.me/api/portraits/women/32.jpg' },
  { name: 'Amit Verma', review: 'Creative shots and excellent editing.', rating: 5, avatar: 'https://randomuser.me/api/portraits/men/64.jpg' }
];

function Services() {
  const [selectedCategory, setSelectedCategory] = useState('Pre-Wedding');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const sectionRefs = useRef([]);
  const reviewCardRefs = useRef([]);

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

  useEffect(() => {
    // Animate sections on scroll
    sectionRefs.current.forEach((section, i) => {
      if (!section) return;
      
      gsap.fromTo(section,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: i * 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );
    });

    // Animate review cards
    reviewCardRefs.current.forEach((card, i) => {
      if (!card) return;
      
      gsap.fromTo(card,
        { scale: 0.9, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          delay: i * 0.1,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
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
    arrows: true,
    prevArrow: <button className="slick-prev slick-arrow"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg></button>,
    nextArrow: <button className="slick-next slick-arrow"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg></button>,
    customPaging: () => (
      <div className="slick-dot">
        <span></span>
      </div>
    )
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Services Offered */}
        <section 
          ref={el => sectionRefs.current[0] = el}
          className="mb-24"
        >
          <div className="text-center mb-16">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-amber-600">
              Services Offered
            </h1>
            <p className="text-gray-400 max-w-3xl mx-auto text-lg">
              Sandeep Studio & Mixing Lab specializes in a wide array of photography and videography services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-8">
              <h3 className="text-xl font-semibold mb-4 text-amber-400">Photography</h3>
              <ul className="space-y-2">
                {['Wedding', 'Pre-Wedding', 'Candid', 'Maternity', 'Newborn', 'Birthday', 'Portfolio'].map((service, idx) => (
                  <li key={idx} className="flex items-center">
                    <svg className="w-5 h-5 text-amber-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {service} Shoots
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-8">
              <h3 className="text-xl font-semibold mb-4 text-amber-400">Videography & More</h3>
              <ul className="space-y-2">
                {['Cinematic Wedding Films', 'Drone Footage', 'Event Coverage', 'Studio Setup', 'Mixing & Editing'].map((service, idx) => (
                  <li key={idx} className="flex items-center">
                    <svg className="w-5 h-5 text-amber-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Category Dropdown */}
          <div className="max-w-md mx-auto mb-12">
            <div ref={dropdownRef} className="relative">
              <button
                onClick={toggleDropdown}
                className="w-full flex items-center justify-between bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 rounded-xl px-6 py-4 text-lg font-medium focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-300"
              >
                <span>{selectedCategory} Services</span>
                <svg 
                  className={`w-5 h-5 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              
              {dropdownOpen && (
                <div className="absolute z-10 w-full mt-2 bg-gray-800 border border-gray-700 rounded-xl shadow-xl overflow-hidden transition-all duration-300 transform origin-top">
                  <ul>
                    {Object.keys(servicesList).map(category => (
                      <li key={category}>
                        <button
                          onClick={() => selectCategory(category)}
                          className={`w-full text-left px-6 py-3 transition-colors duration-200 ${
                            selectedCategory === category 
                              ? 'bg-amber-500/20 text-amber-400' 
                              : 'hover:bg-gray-700/50'
                          }`}
                        >
                          {category}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Slideshow */}
          <div className="max-w-4xl mx-auto">
            <ServiceSlideshow images={servicesList[selectedCategory]} />
          </div>
        </section>

        {/* Client Reviews */}
        <section 
          ref={el => sectionRefs.current[1] = el}
          className="mb-24"
        >
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Client Reviews</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Hear what our clients have to say about our services
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Slider {...sliderSettings}>
              {clientReviews.map((client, idx) => (
                <div key={idx} className="px-4">
                  <div 
                    ref={el => reviewCardRefs.current[idx] = el}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-8"
                  >
                    <div className="flex flex-col md:flex-row items-center gap-6">
                      <div className="flex-shrink-0">
                        <img 
                          src={client.avatar} 
                          alt={client.name}
                          className="w-24 h-24 rounded-full object-cover border-4 border-amber-500/30"
                        />
                      </div>
                      <div className="text-center md:text-left">
                        <h3 className="text-xl font-bold mb-2">{client.name}</h3>
                        <div className="flex justify-center md:justify-start mb-3">
                          {[...Array(5)].map((_, i) => (
                            <svg 
                              key={i} 
                              className="w-5 h-5 text-amber-400" 
                              fill="currentColor" 
                              viewBox="0 0 20 20" 
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <p className="text-gray-300 italic">"{client.review}"</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </section>

        {/* Online Presence */}
        <section 
          ref={el => sectionRefs.current[2] = el}
          className="mb-12"
        >
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Online Presence</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Check out our work online
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            {/* YouTube video */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <iframe
                width="400"
                height="225"
                src="https://www.youtube.com/embed/qTMec_bSYNA?autoplay=1&mute=1&loop=1&playlist=qTMec_bSYNA"
                title="YouTube Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="transform transition-transform duration-500 group-hover:scale-105"
              ></iframe>
              <div className="absolute bottom-4 left-4 z-20">
                <div className="flex items-center bg-red-600 px-3 py-1 rounded-full">
                  <svg className="w-4 h-4 text-white mr-1" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                  </svg>
                  <span className="text-white text-sm font-medium">YouTube</span>
                </div>
              </div>
            </div>

            {/* Instagram block */}
            <a
              href="https://www.instagram.com/sandeepstudioazamgarh/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-full max-w-md h-56 rounded-2xl overflow-hidden shadow-xl group"
            >
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: 'url("https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg")' }}
              ></div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 z-10">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full mb-4 transform transition-transform duration-500 group-hover:scale-110">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Visit Instagram</h3>
                <p className="text-gray-300 text-center">Follow us for daily updates and behind-the-scenes content</p>
              </div>
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Services;