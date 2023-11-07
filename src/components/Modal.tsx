import styled from "styled-components";
import { FC, ReactNode } from "react";

interface ModalProps {
  onClose: () => any;
  children: ReactNode;
}

export const Modal: FC<ModalProps> = ({ onClose, children }) => {
  return (
    <ModalContainer>
      <CloseButton onClick={onClose}>close</CloseButton>
      {children}
    </ModalContainer>
  );
};

const ModalContainer = styled.section`
  position: fixed;
  padding-top: 2rem;
  width: 100vw;
  height: 100vh;
  background: rgba(21, 21, 21, 0.75);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 2vh;
  right: 2vw;
  padding: 0.5rem 1rem;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  color: white;
  z-index: 1;

  @media (max-width: 480px) {
    font-size: 0.5rem;
  }
`;
