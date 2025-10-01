import React, { useState, useEffect, useCallback } from 'react';

function ServiceSlideshow({ images }) {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState('next');

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [images]);

  // Handle navigation to next slide
  const handleNext = useCallback(() => {
    if (isTransitioning || !images || images.length === 0) return;
    setIsTransitioning(true);
    setDirection('next');
    setTimeout(() => {
      setCurrent(prev => (prev + 1) % images.length);
      setIsTransitioning(false);
    }, 300);
  }, [isTransitioning, images]);

  // Handle navigation to previous slide
  const handlePrev = useCallback(() => {
    if (isTransitioning || !images || images.length === 0) return;
    setIsTransitioning(true);
    setDirection('prev');
    setTimeout(() => {
      setCurrent(prev => (prev - 1 + images.length) % images.length);
      setIsTransitioning(false);
    }, 300);
  }, [isTransitioning, images]);

  // Handle navigation to specific slide
  const goToSlide = useCallback((index) => {
    if (isTransitioning || !images || images.length === 0) return;
    setIsTransitioning(true);
    setDirection(index > current ? 'next' : 'prev');
    setTimeout(() => {
      setCurrent(index);
      setIsTransitioning(false);
    }, 300);
  }, [isTransitioning, images, current]);

  if (!images || images.length === 0) return null;

  return (
    <div className="relative w-full h-96 md:h-[500px] overflow-hidden rounded-xl shadow-lg">
      {/* Slides */}
      <div className="relative w-full h-full">
        {images.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-all duration-500 ease-in-out transform ${
              index === current 
                ? 'opacity-100 scale-100 z-10' 
                : 'opacity-0 scale-105 z-0'
            } ${direction === 'next' && index === current ? 'translate-x-0' : ''} ${
              direction === 'prev' && index === current ? 'translate-x-0' : ''
            }`}
            style={{ backgroundImage: `url(${item.image})` }}
          >
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            
            {/* Slide content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-20">
              <div className="max-w-3xl">
                <h2 className="text-2xl md:text-4xl font-bold text-white mb-2 transform transition-transform duration-300 hover:translate-x-1">
                  {item.title}
                </h2>
                {item.description && (
                  <p className="text-gray-200 text-sm md:text-base max-w-2xl transform transition-transform duration-300 hover:translate-x-1">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all duration-300 hover:scale-110"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
        </svg>
      </button>
      
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all duration-300 hover:scale-110"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === current 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div className="absolute top-4 right-4 z-30 bg-black/30 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-full">
        {current + 1} / {images.length}
      </div>
    </div>
  );
}

export default ServiceSlideshow;