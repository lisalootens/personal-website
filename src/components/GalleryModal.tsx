import styled from "styled-components";

interface ModalProps {
  onClose: any;
  src: string;
  alt: string;
}

export const GalleryModal: React.FC<ModalProps> = ({ onClose, src, alt }) => {
  return (
    <>
      <ExpandedView>
        <ImageContainer>
          <CloseButton onClick={onClose}>X</CloseButton>
          <ExpandedImage src={src} alt={alt} />
        </ImageContainer>
      </ExpandedView>
    </>
  );
};

const ExpandedView = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(21, 21, 21, 0.7);
`;
const ImageContainer = styled.div`
  max-width: 80%;
  max-height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ExpandedImage = styled.img`
  max-width: 80vw;
  max-height: 80vh;
  border-radius: 0.5rem;
  object-fit: cover;
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
`;
