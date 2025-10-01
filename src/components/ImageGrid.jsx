import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useState } from 'react';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const imageData = [
  { 
    id: 1, 
    url: 'https://plus.unsplash.com/premium_photo-1682092632793-c7d75b23718e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8SW5kaWFuJTIwd2VkZGluZyUyMHBob3RvfGVufDB8fDB8fHww', 
    alt: 'Wedding photo',
    category: 'wedding',
    title: 'Traditional Wedding Ceremony',
    description: 'Capturing the sacred moments of a traditional Indian wedding'
  },
  { 
    id: 2, 
    url: 'https://images.unsplash.com/photo-1729107861458-559daeaf2133?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8SW5kaWFuJTIwTWF0ZXJuaXR5JTIwUGhvdG98ZW58MHx8MHx8fDA%3D', 
    alt: 'Maternity photo',
    category: 'maternity',
    title: 'Maternity Glow',
    description: 'Celebrating the beauty of motherhood'
  },
  { 
    id: 3, 
    url: 'https://media.istockphoto.com/id/1148565327/photo/family-celebrating-kids-birthday.webp?a=1&b=1&s=612x612&w=0&k=20&c=zmreiKu8NJr1NE7RkOsqYbZp-9Y8SWD6AgqG4NBJBew=', 
    alt: 'Birthday photo',
    category: 'events',
    title: 'Birthday Celebration',
    description: 'Joyful moments of a birthday party'
  },
  { 
    id: 4, 
    url: 'https://media.istockphoto.com/id/1277971635/photo/portrait-of-a-smiling-man-of-indian-ethnicity.jpg?s=612x612&w=0&k=20&c=CnPwvagPlklsAjejUNkuKv_QXtaXPYFQ64AQYb-IAjA=', 
    alt: 'Portrait photo',
    category: 'portrait',
    title: 'Professional Portrait',
    description: 'Corporate headshot with natural lighting'
  },
  { 
    id: 5, 
    url: 'https://media.istockphoto.com/id/1254346911/photo/comfortable-baby.jpg?s=612x612&w=0&k=20&c=YuGs2W72IKYaN9ta-iZikz5GhO7x1sJWV4vUBsl_8nU=', 
    alt: 'Newborn photo',
    category: 'maternity',
    title: 'Newborn Photography',
    description: 'Gentle moments with a newborn'
  },
  { 
    id: 6, 
    url: 'https://media.istockphoto.com/id/2164408668/photo/tamil-pickers-collecting-tea-leaves-on-plantation-southern-india.jpg?s=612x612&w=0&k=20&c=Y22caeejrXxYQMsAOuRO3gzjGlrYEg0CdpBvriAI4Zc=', 
    alt: 'Candid photo',
    category: 'candid',
    title: 'Tea Plantation Workers',
    description: 'Candid moments from a tea plantation'
  },
  { 
    id: 7, 
    url: 'https://images.unsplash.com/photo-1743685102554-ef8e4eb11415?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwcHJlJTIwd2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D', 
    alt: 'Pre-wedding photo',
    category: 'wedding',
    title: 'Pre-Wedding Shoot',
    description: 'Romantic pre-wedding photography'
  },
  { 
    id: 8, 
    url: 'https://images.unsplash.com/photo-1743685334937-fff33b849384?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwZW5nYWdlbWVudHxlbnwwfHwwfHx8MA%3D%3D', 
    alt: 'Engagement',
    category: 'wedding',
    title: 'Engagement Ceremony',
    description: 'Capturing the joy of engagement'
  },
  { 
    id: 9, 
    url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGluZGlhbiUyMGZhbWlseSUyMHBob3RvZ3JhcGh5fGVufDB8fDB8fHww', 
    alt: 'Family photo',
    category: 'portrait',
    title: 'Family Portrait',
    description: 'Multi-generational family photography'
  },
  { 
    id: 10, 
    url: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW5kaWFuJTIwZmVzdGl2YWx8ZW58MHx8MHx8fDA%3D', 
    alt: 'Festival photo',
    category: 'events',
    title: 'Festival Celebration',
    description: 'Vibrant colors of Indian festivals'
  },
  { 
    id: 11, 
    url: 'https://images.unsplash.com/photo-1604537466158-719b1972feb8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGluZGlhbiUyMHdlZGRpbmclMjBjZXJlbW9ueXxlbnwwfHwwfHx8MA%3D%3D', 
    alt: 'Wedding ceremony',
    category: 'wedding',
    title: 'Wedding Ceremony',
    description: 'Traditional wedding rituals'
  },
  { 
    id: 12, 
    url: 'https://images.unsplash.com/photo-1519225421980-715cb021e582?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGluZGlhbiUyMGN1bHR1cmFsJTIwZXZlbnR8ZW58MHx8MHx8fDA%3D', 
    alt: 'Cultural event',
    category: 'events',
    title: 'Cultural Event',
    description: 'Traditional dance performance'
  }
];

function ImageGrid({ activeCategory }) {
  const gridRef = useRef(null);
  const itemRefs = useRef([]);
  const [filteredImages, setFilteredImages] = useState(imageData);

  useEffect(() => {
    // Filter images based on active category
    if (activeCategory === 'all') {
      setFilteredImages(imageData);
    } else {
      setFilteredImages(imageData.filter(image => image.category === activeCategory));
    }
  }, [activeCategory]);

  useEffect(() => {
    // Animate grid items when they come into view
    itemRefs.current.forEach((item, i) => {
      if (!item) return;
      
      gsap.fromTo(item,
        { 
          y: 50, 
          opacity: 0,
          scale: 0.9
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          delay: i * 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );
    });

    // Parallax effect on hover
    const handleMouseMove = (e) => {
      const cards = document.querySelectorAll('.grid-item');
      cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateY = (x - centerX) / 25;
        const rotateX = (centerY - y) / 25;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1, 1, 1)`;
      });
    };

    const handleMouseLeave = () => {
      const cards = document.querySelectorAll('.grid-item');
      cards.forEach(card => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
      });
    };

    if (gridRef.current) {
      gridRef.current.addEventListener('mousemove', handleMouseMove);
      gridRef.current.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (gridRef.current) {
        gridRef.current.removeEventListener('mousemove', handleMouseMove);
        gridRef.current.removeEventListener('mouseleave', handleMouseLeave);
      }
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [filteredImages]);

  return (
    <div 
      ref={gridRef}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
    >
      {filteredImages.map((image, index) => (
        <div
          key={image.id}
          ref={el => itemRefs.current[index] = el}
          className="grid-item group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-500 cursor-pointer"
        >
          {/* Image */}
          <div className="relative h-64 md:h-80 overflow-hidden">
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
              <div className="flex items-center mb-2">
                <span className="inline-block px-3 py-1 text-xs font-semibold bg-amber-500/90 text-black rounded-full">
                  {image.category}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-1">{image.title}</h3>
              <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {image.description}
              </p>
            </div>
            
            {/* Zoom icon */}
            <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path>
              </svg>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ImageGrid;