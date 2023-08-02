import React, { useEffect, MouseEvent } from 'react';
import { ModalContainer, ModalContent, CloseButton } from './Modal.styled'

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
    
        <ModalContainer onClick={handleBackdropClick}>
          <ModalContent>
            <CloseButton onClick={onClose}>×</CloseButton>
              {children}
          </ModalContent>
        </ModalContainer>
 
  );
};

export default Modal;
