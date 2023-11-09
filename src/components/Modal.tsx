import styled from "styled-components";
import { FC, ReactNode } from "react";

interface ModalProps {
  onClose: () => any;
  children: ReactNode;
}

export const Modal: FC<ModalProps> = ({ onClose, children }) => {
  const handleModalClose = () => {
    // Set overflow property to default
    document.body.style.overflow = "";
    onClose();
  };

  return (
    <ModalContainer>
      <CloseButton onClick={handleModalClose}>close</CloseButton>
      {children}
    </ModalContainer>
  );
};

const ModalContainer = styled.section`
  position: fixed;
  top: 0;
  overflow: hidden;
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
`;
