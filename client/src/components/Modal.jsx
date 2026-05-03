// components/Modal.jsx
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import './Modal.css';

export default function Modal({ 
  isOpen, 
  onClose, 
  title, 
  children, 
  size = 'md',
  showCloseButton = true
}) {
  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Close on backdrop click
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  if (!isOpen) return null;

  return createPortal(
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className={`modal ${`modal--${size}`}`} role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <div className="modal-header">
          {title && <h2 id="modal-title" className="modal-title">{title}</h2>}
          {showCloseButton && (
            <button 
              className="modal-close" 
              onClick={onClose}
              aria-label="Close modal"
            >
              <svg viewBox="0 0 24 24" width="24" height="24">
                <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              </svg>
            </button>
          )}
        </div>
        <div className="modal-body">
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
}