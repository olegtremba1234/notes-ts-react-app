import React, { useEffect, MouseEvent } from 'react';

interface ModalProps {
  isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const handleBackdropClick = (event: MouseEvent<HTMLDivElement>) => {
  if (event.target === event.currentTarget) {
    onClose();
  }
  };

  useEffect(() => {
    const handleEscapeKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
  
    if (isOpen) {
      document.addEventListener('keydown', handleEscapeKeyPress);
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKeyPress);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    
    <div
      onClick={handleBackdropClick}
      className=' fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10'
    >
          <div className="modal-styles bg-white p-5 border border-gray-300 rounded-lg max-w-2xl">
        <span
          className=' text-gray-400 float-right text-2xl font-bold cursor-pointer hover:text-black '
          onClick={onClose}
        >
          ×
        </span>
              {children}
          </div>
        </div>
 
  );
};

export default Modal;
