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
    <div className={`custom-select-container ${isOpen ? 'open' : ''}`} ref={selectRef}>
      <label htmlFor={name}>{label}</label>
      <div className={`custom-select-display ${isOpen ? 'open' : ''}`} onClick={toggleOpen}>
        <span>{displayValue}</span>
        <div className="custom-select-arrow"></div>
      </div>
      {isOpen && (
        <ul className="custom-select-options">
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleSelect(option.value)}
              className={value === option.value ? 'selected' : ''}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CustomSelect;
