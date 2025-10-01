import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const navbarRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isServicesOpen) setIsServicesOpen(false);
  };

  const toggleServicesDropdown = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsMenuOpen(false);
        setIsServicesOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav ref={navbarRef} className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <NavLink to="/" className="flex items-center">
              <img 
                src="/logo.png" 
                alt="Sandeep Studio & Mixing Lab Logo" 
                className="h-35 w-auto transition-transform duration-300 hover:scale-105"
              />
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  isActive 
                    ? 'bg-indigo-100 text-indigo-700' 
                    : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                }`
              }
              end
            >
              Home
            </NavLink>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button
                onClick={toggleServicesDropdown}
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  isServicesOpen || window.location.pathname.includes('/services')
                    ? 'bg-indigo-100 text-indigo-700' 
                    : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                Services
                <svg 
                  className={`ml-1 w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              
              <div 
                className={`absolute left-0 mt-1 w-48 bg-white rounded-md shadow-lg py-1 transition-all duration-200 transform ${
                  isServicesOpen 
                    ? 'opacity-100 translate-y-0 pointer-events-auto' 
                    : 'opacity-0 -translate-y-2 pointer-events-none'
                } group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto`}
              >
                <NavLink 
                  to="/services" 
                  className={({ isActive }) => 
                    `block px-4 py-2 text-sm transition-colors duration-150 ${
                      isActive 
                        ? 'bg-indigo-50 text-indigo-700 font-medium' 
                        : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                    }`
                  }
                  onClick={() => setIsServicesOpen(false)}
                >
                  All Services
                </NavLink>
                <NavLink 
                  to="/book-service" 
                  className={({ isActive }) => 
                    `block px-4 py-2 text-sm transition-colors duration-150 ${
                      isActive 
                        ? 'bg-indigo-50 text-indigo-700 font-medium' 
                        : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                    }`
                  }
                  onClick={() => setIsServicesOpen(false)}
                >
                  Book Services
                </NavLink>
              </div>
            </div>
            
            <NavLink 
              to="/portfolio" 
              className={({ isActive }) => 
                `px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  isActive 
                    ? 'bg-indigo-100 text-indigo-700' 
                    : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                }`
              }
            >
              Portfolio
            </NavLink>
            
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  isActive 
                    ? 'bg-indigo-100 text-indigo-700' 
                    : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                }`
              }
            >
              About
            </NavLink>
            
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                `px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  isActive 
                    ? 'bg-indigo-100 text-indigo-700' 
                    : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                }`
              }
            >
              Contact
            </NavLink>
            
            <NavLink 
              to="/book-service" 
              className="ml-2 px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-700 transition-colors duration-200"
            >
              Book Now
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 transition-colors duration-200"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg 
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`} 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg 
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`} 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `block px-3 py-2 rounded-md text-base font-medium transition-colors duration-150 ${
                isActive 
                  ? 'bg-indigo-100 text-indigo-700' 
                  : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
              }`
            }
            onClick={toggleMenu}
            end
          >
            Home
          </NavLink>
          
          {/* Mobile Services Dropdown */}
          <div>
            <button
              onClick={toggleServicesDropdown}
              className={`flex items-center justify-between w-full px-3 py-2 rounded-md text-base font-medium transition-colors duration-150 ${
                isServicesOpen || window.location.pathname.includes('/services')
                  ? 'bg-indigo-100 text-indigo-700' 
                  : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
              }`}
            >
              <span>Services</span>
              <svg 
                className={`ml-1 w-5 h-5 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            
            <div 
              className={`pl-4 mt-1 space-y-1 transition-all duration-200 overflow-hidden ${
                isServicesOpen ? 'max-h-40' : 'max-h-0'
              }`}
            >
              <NavLink 
                to="/services" 
                className={({ isActive }) => 
                  `block px-3 py-2 rounded-md text-base font-medium transition-colors duration-150 ${
                    isActive 
                      ? 'bg-indigo-50 text-indigo-700' 
                      : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                  }`
                }
                onClick={toggleMenu}
              >
                All Services
              </NavLink>
              <NavLink 
                to="/book-service" 
                className={({ isActive }) => 
                  `block px-3 py-2 rounded-md text-base font-medium transition-colors duration-150 ${
                    isActive 
                      ? 'bg-indigo-50 text-indigo-700' 
                      : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                  }`
                }
                onClick={toggleMenu}
              >
                Book Services
              </NavLink>
            </div>
          </div>
          
          <NavLink 
            to="/portfolio" 
            className={({ isActive }) => 
              `block px-3 py-2 rounded-md text-base font-medium transition-colors duration-150 ${
                isActive 
                  ? 'bg-indigo-100 text-indigo-700' 
                  : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
              }`
            }
            onClick={toggleMenu}
          >
            Portfolio
          </NavLink>
          
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              `block px-3 py-2 rounded-md text-base font-medium transition-colors duration-150 ${
                isActive 
                  ? 'bg-indigo-100 text-indigo-700' 
                  : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
              }`
            }
            onClick={toggleMenu}
          >
            About
          </NavLink>
          
          <NavLink 
            to="/contact" 
            className={({ isActive }) => 
              `block px-3 py-2 rounded-md text-base font-medium transition-colors duration-150 ${
                isActive 
                  ? 'bg-indigo-100 text-indigo-700' 
                  : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
              }`
            }
            onClick={toggleMenu}
          >
            Contact
          </NavLink>
          
          <NavLink 
            to="/book-service" 
            className="block px-3 py-2 mt-2 bg-indigo-600 text-white text-base font-medium rounded-md hover:bg-indigo-700 transition-colors duration-200"
            onClick={toggleMenu}
          >
            Book Now
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;