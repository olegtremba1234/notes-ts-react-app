import React, { useEffect, useRef } from 'react';
import { ModalContainer, ModalContent, CloseButton } from './Modal.styled'

interface ModalProps {
  isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const modalContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscapeKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    const handleClickOutsideModal = (event: MouseEvent) => {
      if (modalContentRef.current && !modalContentRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscapeKeyPress);
      document.addEventListener('click', handleClickOutsideModal);
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKeyPress);
      document.removeEventListener('click', handleClickOutsideModal);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    
        <ModalContainer>
          <ModalContent>
            <CloseButton onClick={onClose}>×</CloseButton>
              {children}
          </ModalContent>
        </ModalContainer>
 
  );
};

export default Modal;
