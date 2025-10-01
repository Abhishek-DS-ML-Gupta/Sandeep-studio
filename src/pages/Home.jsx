import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function Home() {
  // Create refs for elements we want to animate
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonsRef = useRef(null);
  const servicesRef = useRef(null);
  const serviceCardsRef = useRef([]);
  const aboutSectionRef = useRef(null);
  const aboutContentRef = useRef(null);
  const aboutImageRef = useRef(null);
  const testimonialRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    // Hero section animations
    const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    
    heroTl
      .fromTo(heroRef.current, 
        { opacity: 0 }, 
        { opacity: 1, duration: 1 }
      )
      .fromTo(titleRef.current, 
        { y: 50, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1 }, 
        '-=0.5'
      )
      .fromTo(subtitleRef.current, 
        { y: 30, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.8 }, 
        '-=0.4'
      )
      .fromTo(buttonsRef.current.children, 
        { y: 20, opacity: 0 }, 
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.6, 
          stagger: 0.2 
        }, 
        '-=0.3'
      );

    // Service cards animation on scroll
    gsap.fromTo(serviceCardsRef.current,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: servicesRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none none'
        }
      }
    );

    // About section animation
    gsap.fromTo(aboutContentRef.current,
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: aboutSectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none'
        }
      }
    );

    gsap.fromTo(aboutImageRef.current,
      { x: 50, opacity: 0, scale: 0.9 },
      {
        x: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: aboutSectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none'
        }
      }
    );

    // Testimonial animation
    gsap.fromTo(testimonialRef.current,
      { scale: 0.9, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: testimonialRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    );

    // CTA section animation
    gsap.fromTo(ctaRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ctaRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    );

    // Parallax effect for service cards
    serviceCardsRef.current.forEach((card) => {
      gsap.to(card, {
        y: -20,
        scrollTrigger: {
          trigger: card,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <div 
        ref={heroRef}
        className="relative min-h-[100vh] flex items-center justify-center overflow-hidden"
      >
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 via-black to-gray-900 z-0"></div>
        
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-indigo-600/20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-indigo-400/20 blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-64 h-64 rounded-full bg-white/5 blur-3xl animate-pulse"></div>
        
        {/* Centered content */}
        <div className="relative z-10 flex flex-col items-center justify-center p-8 md:p-16 lg:p-24 text-center max-w-4xl mx-auto">
          <div>
            <h1 
              ref={titleRef}
              className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="block text-white">Sandeep Studio</span>
              <span className="block text-indigo-300 mt-2">& Mixing Lab</span>
            </h1>
            <p 
              ref={subtitleRef}
              className="text-xl md:text-2xl text-indigo-100 mb-12 max-w-2xl mx-auto"
            >
              Capturing cinematic moments, one frame at a time.
            </p>
            <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                to="/portfolio" 
                className="bg-gradient-to-r from-indigo-500 to-indigo-700 hover:from-indigo-600 hover:to-indigo-800 text-white font-semibold py-4 px-10 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/30 text-center flex items-center justify-center group"
              >
                View Our Portfolio
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
              <Link 
                to="/contact" 
                className="border-2 border-indigo-400 hover:bg-indigo-500 hover:text-white font-semibold py-4 px-10 rounded-xl transition-all duration-300 text-center flex items-center justify-center group"
              >
                Get In Touch
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <svg className="w-8 h-8 text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>

      {/* Services Section */}
      <div ref={servicesRef} className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2"></div>
        
        <div className="text-center mb-16 relative z-10">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-indigo-700 mx-auto mb-6"></div>
          <p className="text-indigo-200 max-w-2xl mx-auto text-lg">
            We specialize in a wide array of photography and videography services
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {/* Wedding Service Card */}
          <div 
            ref={el => serviceCardsRef.current[0] = el}
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-indigo-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-indigo-500/10 group transform hover:-translate-y-2"
          >
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500/20 to-indigo-700/20 flex items-center justify-center group-hover:animate-pulse">
                  <svg className="w-10 h-10 text-indigo-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-indigo-500 flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
              </div>
            </div>
            <h3 className="font-serif text-xl font-semibold mb-3 text-center">Wedding & Pre-Wedding</h3>
            <p className="text-gray-400 text-center mb-4">Capturing your special moments with artistic flair</p>
            <div className="flex justify-center">
              <Link to="/services" className="text-indigo-400 hover:text-indigo-300 flex items-center text-sm font-medium">
                Learn more
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>

          {/* Cinematic Service Card */}
          <div 
            ref={el => serviceCardsRef.current[1] = el}
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-indigo-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-indigo-500/10 group transform hover:-translate-y-2"
          >
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500/20 to-indigo-700/20 flex items-center justify-center group-hover:animate-bounce">
                  <svg className="w-10 h-10 text-indigo-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z"/>
                  </svg>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-indigo-500 flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
              </div>
            </div>
            <h3 className="font-serif text-xl font-semibold mb-3 text-center">Cinematic Films</h3>
            <p className="text-gray-400 text-center mb-4">Professional drone footage and cinematic storytelling</p>
            <div className="flex justify-center">
              <Link to="/services" className="text-indigo-400 hover:text-indigo-300 flex items-center text-sm font-medium">
                Learn more
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>

          {/* Portrait Service Card */}
          <div 
            ref={el => serviceCardsRef.current[2] = el}
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-indigo-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-indigo-500/10 group transform hover:-translate-y-2"
          >
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500/20 to-indigo-700/20 flex items-center justify-center group-hover:animate-spin">
                  <svg className="w-10 h-10 text-indigo-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-indigo-500 flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
              </div>
            </div>
            <h3 className="font-serif text-xl font-semibold mb-3 text-center">Portrait Sessions</h3>
            <p className="text-gray-400 text-center mb-4">Maternity, newborn, and family photography</p>
            <div className="flex justify-center">
              <Link to="/services" className="text-indigo-400 hover:text-indigo-300 flex items-center text-sm font-medium">
                Learn more
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12 relative z-10">
          <Link 
            to="/services" 
            className="inline-flex items-center text-indigo-400 hover:text-indigo-300 font-medium transition-colors duration-300 group"
          >
            View All Services
            <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>

      {/* About Section */}
      <div ref={aboutSectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div ref={aboutContentRef} className="md:w-1/2">
              <div className="mb-8">
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">About Sandeep Gandhi Nehal</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-indigo-700"></div>
              </div>
              <p className="text-indigo-100 mb-4 text-lg">
                The creative force behind the studio is also a celebrated poet, blending a love for art with a passion for storytelling.
              </p>
              <p className="text-indigo-100 mb-6 text-lg">
                With over a decade of experience, Sandeep brings a unique perspective to every project, creating visual narratives that resonate with emotion and authenticity.
              </p>
              <Link 
                to="/about" 
                className="inline-flex items-center text-indigo-400 hover:text-indigo-300 font-medium transition-colors duration-300 group"
              >
                Learn More About Us
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
            <div ref={aboutImageRef} className="md:w-1/2">
              <div className="relative rounded-2xl overflow-hidden h-80 md:h-96 shadow-2xl group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 to-indigo-700 group-hover:scale-105 transition-transform duration-1000"></div>
                <div className="absolute bottom-6 left-6 z-20 bg-black/50 backdrop-blur-sm rounded-lg p-4 max-w-xs">
                  <p className="text-indigo-300 font-medium">Photography & Poetry</p>
                  <p className="text-indigo-100 text-sm">Creating art that tells stories</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div ref={testimonialRef} className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="text-center bg-gradient-to-r from-indigo-900/20 to-indigo-800/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-indigo-800/30 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
          
          <div className="relative z-10">
            <svg className="w-12 h-12 text-indigo-500/20 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <blockquote className="font-serif text-2xl md:text-3xl italic mb-6 text-indigo-100">
              "Sandeep captured our wedding day beyond our expectations. Every frame tells a story, every moment feels alive. Truly magical work!"
            </blockquote>
            <cite className="text-lg text-indigo-300 font-medium not-italic">- Priya & Rajesh, Wedding Clients</cite>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div ref={ctaRef} className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-indigo-900"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Ready to Capture Your Story?</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-indigo-100">
            Let's create something beautiful together
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-black text-indigo-400 hover:bg-gray-900 font-bold py-4 px-10 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-indigo-500/20 flex items-center justify-center mx-auto group"
          >
            Start Your Journey
            <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </Link>
        </div>
      </div>

      {/* Back to top button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-700 text-white flex items-center justify-center shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 z-50 group"
      >
        <svg className="w-6 h-6 group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
        </svg>
      </button>
    </div>
  );
}

export default Home;