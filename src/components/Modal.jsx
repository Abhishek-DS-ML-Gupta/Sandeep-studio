import React from 'react';

function Modal({ message, onClose, type = 'success' }) {
  const getIcon = () => {
    if (type === 'success') return '✅';
    if (type === 'error') return '❌';
    return 'ℹ️';
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className={`modal-icon ${type}`}>{getIcon()}</span>
        <p>{message}</p>
        <button className="modal-button" onClick={onClose}>Got it!</button>
      </div>
    </div>
  );
}

export default Modal;
