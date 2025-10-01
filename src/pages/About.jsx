import React from 'react';
import sandeepImage from '../assets/sandeep.png';

function About() {
  const rating = 4.9;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Profile Section */}
        <div className="flex flex-col items-center mb-16 animate-fade-in">
          <div className="relative group mb-8">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 opacity-75 blur-md group-hover:opacity-100 transition-opacity duration-500 scale-105"></div>
            <img
              src={sandeepImage}  // Fixed: Using the imported variable instead of string
              alt="Sandeep Gandhi Nehal"
              className="relative w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-indigo-500 shadow-xl transition-all duration-500 group-hover:border-indigo-400 group-hover:scale-105"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
            Sandeep Gandhi Nehal
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl text-center leading-relaxed mb-10">
            Sandeep Gandhi Nehal is the creative force behind Sandeep Studio & Mixing Lab. He is renowned for his cinematic approach to capturing moments. In addition to his work as a photographer and videographer, he is also a celebrated poet, known for his contributions to Urdu and Hindi literature.
          </p>
          
          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-16">
            <a
              href="https://www.instagram.com/sandeepgandhinehal/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-5 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
              </svg>
              Instagram
            </a>
            
            <a
              href="https://www.facebook.com/sandeepgandhi.sandeepgandhi/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
              </svg>
              Facebook
            </a>
            
            <a
              href="https://www.rekhta.org/poets/sandeep-gandhi-nehal"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-5 py-2.5 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full hover:from-amber-700 hover:to-orange-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
              </svg>
              Rekhta Profile
            </a>
          </div>
        </div>

        {/* Reputation Card */}
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl border border-gray-700/50 p-8 shadow-2xl transition-all duration-500 hover:shadow-indigo-500/10 animate-fade-in-up">
          <div className="flex items-center justify-center mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent flex-grow"></div>
            <h2 className="text-2xl md:text-3xl font-bold mx-4 text-indigo-300">Reputation</h2>
            <div className="h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent flex-grow"></div>
          </div>
          
          <div className="flex flex-col items-center mb-8">
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-8 h-8 ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-600'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="ml-3 text-2xl font-bold text-yellow-400">{rating}/5</span>
            </div>
            
            <p className="text-gray-300 text-center leading-relaxed max-w-2xl">
              Sandeep Studio & Mixing Lab has received positive feedback from clients, with a <span className="text-yellow-400 font-semibold">4.9/5 rating</span> based on 11 reviews on Justdial. Clients have praised the studio for its professionalism, quality of work, and timely delivery of services.
            </p>
          </div>
          
          <div className="flex justify-center">
            <a
              href="https://www.justdial.com/Azamgarh/Sandeep-Studio-Mixing-Lab-Near-Hariaudh-Nagar-Colony-Heerapatti-Azamgarh-Azamgarh-City/9999P5252-5252-211111154517-B1T7_BZDET"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-500 to-amber-500 text-gray-900 font-bold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/20"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
              View on Justdial
            </a>
          </div>
        </div>

        {/* Additional Section: Achievements */}
        <div className="mt-16 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl border border-gray-700/50 p-8 shadow-2xl transition-all duration-500 hover:shadow-indigo-500/10 animate-fade-in-up">
          <div className="flex items-center justify-center mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent flex-grow"></div>
            <h2 className="text-2xl md:text-3xl font-bold mx-4 text-purple-300">Achievements</h2>
            <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent flex-grow"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gray-800/30 rounded-xl border border-gray-700/30 hover:border-purple-500/50 transition-all duration-300">
              <div className="text-4xl font-bold text-purple-400 mb-2">10+</div>
              <div className="text-gray-300">Years of Experience</div>
            </div>
            
            <div className="text-center p-6 bg-gray-800/30 rounded-xl border border-gray-700/30 hover:border-purple-500/50 transition-all duration-300">
              <div className="text-4xl font-bold text-purple-400 mb-2">500+</div>
              <div className="text-gray-300">Happy Clients</div>
            </div>
            
            <div className="text-center p-6 bg-gray-800/30 rounded-xl border border-gray-700/30 hover:border-purple-500/50 transition-all duration-300">
              <div className="text-4xl font-bold text-purple-400 mb-2">15+</div>
              <div className="text-gray-300">Poetry Awards</div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fade-in-up {
          from { 
            opacity: 0; 
            transform: translateY(20px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out 0.3s forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}

export default About;