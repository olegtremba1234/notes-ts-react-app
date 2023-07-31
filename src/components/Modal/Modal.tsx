import React from 'react';
import {ModalContainer,ModalContent}from './Modal.styled'



interface ModalProps {
  isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <ModalContainer>
      <ModalContent>
        {children}
        <button onClick={onClose}>X</button>
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;
