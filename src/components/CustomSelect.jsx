import React, { useState, useRef, useEffect } from 'react';

function CustomSelect({ label, name, value, options, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);

  const toggleOpen = () => setIsOpen(!isOpen);

  const handleSelect = (optionValue) => {
    onChange({ target: { name, value: optionValue } });
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const selectedOption = options.find((opt) => opt.value === value);
  const displayValue = selectedOption ? selectedOption.label : '-- Select --';

  return (
    <div className="relative w-full max-w-xs" ref={selectRef}>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      
      <div 
        className={`relative w-full py-3 px-4 bg-white border rounded-lg shadow-sm cursor-pointer transition-all duration-200 ${
          isOpen 
            ? 'border-indigo-500 ring-2 ring-indigo-200' 
            : 'border-gray-300 hover:border-gray-400'
        }`}
        onClick={toggleOpen}
      >
        <span className="block truncate text-gray-800">{displayValue}</span>
        
        <div className={`absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
          <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>
      </div>

      <div 
        className={`absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg transition-all duration-200 overflow-hidden ${
          isOpen 
            ? 'opacity-100 transform translate-y-0' 
            : 'opacity-0 transform -translate-y-2 pointer-events-none'
        }`}
      >
        <ul className="py-1 max-h-60 overflow-auto">
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleSelect(option.value)}
              className={`px-4 py-2 cursor-pointer transition-colors duration-150 ${
                value === option.value 
                  ? 'bg-indigo-50 text-indigo-700 font-medium' 
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              {option.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CustomSelect;