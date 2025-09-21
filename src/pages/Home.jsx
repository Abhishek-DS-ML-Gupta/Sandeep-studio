import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <div className="relative flex flex-col md:flex-row min-h-[90vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534447677768-be436bb09401?ixlib=rb-4.0.3')] bg-cover bg-center"></div>
        
        <div className="relative z-20 flex-1 flex flex-col justify-center p-8 md:p-16 lg:p-24">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Sandeep Studio & Mixing Lab
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
            Capturing cinematic moments, one frame at a time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/portfolio" 
              className="bg-amber-600 hover:bg-amber-700 text-black font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 text-center"
            >
              View Our Portfolio
            </Link>
            <Link 
              to="/contact" 
              className="border-2 border-white hover:bg-white hover:text-black font-semibold py-3 px-8 rounded-lg transition-all duration-300 text-center"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            We specialize in a wide array of photography and videography services
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Wedding Service Card */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-amber-600 transition-all duration-300 hover:shadow-xl hover:shadow-amber-900/20 group">
            <div className="flex justify-center mb-4">
              <div className="relative w-16 h-16">
                <svg className="w-full h-full text-amber-500 group-hover:animate-pulse" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
                <div className="absolute inset-0 rounded-full bg-amber-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 animate-ping"></div>
              </div>
            </div>
            <h3 className="font-serif text-xl font-semibold mb-2">Wedding & Pre-Wedding</h3>
            <p className="text-gray-400">Capturing your special moments with artistic flair</p>
          </div>

          {/* Cinematic Service Card */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-amber-600 transition-all duration-300 hover:shadow-xl hover:shadow-amber-900/20 group">
            <div className="flex justify-center mb-4">
              <div className="relative w-16 h-16">
                <svg className="w-full h-full text-amber-500 group-hover:animate-bounce" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z"/>
                </svg>
                <div className="absolute inset-0 rounded-full bg-amber-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 animate-ping"></div>
              </div>
            </div>
            <h3 className="font-serif text-xl font-semibold mb-2">Cinematic Films</h3>
            <p className="text-gray-400">Professional drone footage and cinematic storytelling</p>
          </div>

          {/* Portrait Service Card */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-amber-600 transition-all duration-300 hover:shadow-xl hover:shadow-amber-900/20 group">
            <div className="flex justify-center mb-4">
              <div className="relative w-16 h-16">
                <svg className="w-full h-full text-amber-500 group-hover:animate-spin" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
                <div className="absolute inset-0 rounded-full bg-amber-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 animate-ping"></div>
              </div>
            </div>
            <h3 className="font-serif text-xl font-semibold mb-2">Portrait Sessions</h3>
            <p className="text-gray-400">Maternity, newborn, and family photography</p>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/services" 
            className="inline-flex items-center text-amber-500 hover:text-amber-400 font-medium transition-colors duration-300"
          >
            View All Services
            <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>

      {/* About Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <div className="mb-8">
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">About Sandeep Gandhi Nehal</h2>
                <div className="w-24 h-1 bg-amber-600"></div>
              </div>
              <p className="text-gray-300 mb-4 text-lg">
                The creative force behind the studio is also a celebrated poet, blending a love for art with a passion for storytelling.
              </p>
              <p className="text-gray-300 mb-6 text-lg">
                With over a decade of experience, Sandeep brings a unique perspective to every project, creating visual narratives that resonate with emotion and authenticity.
              </p>
              <Link 
                to="/about" 
                className="inline-flex items-center text-amber-500 hover:text-amber-400 font-medium transition-colors duration-300"
              >
                Learn More About Us
                <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
            <div className="md:w-1/2">
              <div className="relative rounded-xl overflow-hidden h-80 md:h-96 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516534775068-ba3e7458af70?ixlib=rb-4.0.3')] bg-cover bg-center"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="text-center bg-gradient-to-r from-amber-900/30 to-amber-800/20 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-amber-800/30">
          <blockquote className="font-serif text-2xl md:text-3xl italic mb-6">
            "Sandeep captured our wedding day beyond our expectations. Every frame tells a story, every moment feels alive. Truly magical work!"
          </blockquote>
          <cite className="text-lg text-amber-400 font-medium">- Priya & Rajesh, Wedding Clients</cite>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-amber-700 to-amber-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Ready to Capture Your Story?</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Let's create something beautiful together
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-black text-amber-500 hover:bg-gray-900 font-bold py-4 px-10 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Start Your Journey
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;