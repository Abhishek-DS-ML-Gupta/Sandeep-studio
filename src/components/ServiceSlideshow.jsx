import React, { useState, useEffect } from 'react';

function ServiceSlideshow({ images }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images]);

  if (!images || images.length === 0) return null;

  return (
    <div className="slideshow-container">
      {images.map((item, index) => (
        <div
          key={index}
          className={`slide ${index === current ? 'active' : ''}`}
          style={{ backgroundImage: `url(${item.image})` }}
        >
          <div className="slide-content">
            <h2>{item.title}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ServiceSlideshow;
