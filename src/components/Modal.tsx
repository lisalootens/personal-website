import styled from "styled-components";
import { FC, ReactNode } from "react";

interface ModalProps {
  onClose: () => any;
  children: ReactNode;
}

export const Modal: FC<ModalProps> = ({ onClose, children }) => {
  return (
    <ModalContainer>
      <CloseButton onClick={onClose}>X</CloseButton>
      {children}
    </ModalContainer>
  );
};

const ModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(21, 21, 21, 0.7);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 2rem;
  right: 2rem;
  padding: 0.5rem 1rem;
  background: none;
  border: 1px solid white;
  border-radius: 2rem;
  cursor: pointer;
  font-size: 1rem;
  color: white;
  z-index: 1;
`;
