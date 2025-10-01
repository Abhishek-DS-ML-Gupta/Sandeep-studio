import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ImageGrid from '../components/ImageGrid';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('all');
  const portfolioRef = useRef(null);
  const headerRef = useRef(null);
  const filterRef = useRef(null);

  useEffect(() => {
    // Header animation
    gsap.fromTo(headerRef.current, 
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    );

    // Filter buttons animation
    gsap.fromTo(filterRef.current.children,
      { y: 30, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8,
        stagger: 0.1,
        delay: 0.3,
        ease: 'power3.out'
      }
    );

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={portfolioRef} className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div ref={headerRef} className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-amber-600">
            Our Portfolio
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Explore our collection of captured moments, each telling a unique story through our lens
          </p>
        </div>

        {/* Filter Section */}
        <div ref={filterRef} className="flex flex-wrap justify-center gap-3 mb-12">
          {['all', 'wedding', 'maternity', 'portrait', 'candid', 'events'].map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-black shadow-lg shadow-amber-500/20'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <ImageGrid activeCategory={activeCategory} />
      </div>
    </div>
  );
}

export default Portfolio;