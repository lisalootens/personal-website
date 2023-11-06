import { Photo } from "../types/Photo";
import styled from "styled-components";
import { useState } from "react";

interface PhotoGalleryProps {
  photos: Photo[];
  title?: string;
  description?: string;
}

export const PhotoGallery: React.FC<PhotoGalleryProps> = ({
  photos,
  title,
  description,
}) => {
  const [expandedPhoto, setExpandedPhoto] = useState<Photo>();

  const handleImageClick = (photo: Photo) => {
    setExpandedPhoto(photo);
  };

  const ExpandedView = () => {
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

    return (
      <>
        <ExpandedView>
          <ImageContainer>
            <CloseButton onClick={() => setExpandedPhoto(undefined)}>
              X
            </CloseButton>
            <ExpandedImage
              src={expandedPhoto?.src}
              alt={expandedPhoto?.description}
            />
          </ImageContainer>
        </ExpandedView>
      </>
    );
  };

  return (
    <>
      <GalleryContainer>
        {title && (
          <GalleryTitleBlock>
            <h1>{title}</h1>
            <p>{description}</p>
          </GalleryTitleBlock>
        )}
        {photos.map((photo) => (
          <GalleryItem key={photo.src}>
            <img
              src={photo.src}
              alt={photo.description}
              onClick={() => handleImageClick(photo)}
            />
          </GalleryItem>
        ))}
        {expandedPhoto && <ExpandedView />}
      </GalleryContainer>
    </>
  );
};

const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
  gap: 0.5rem;
`;

const GalleryTitleBlock = styled.section`
  grid-column: span 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  text-align: center;
  background-color: #2a2a2a;
  padding: 1rem;
  border-radius: 0.5rem;

  h1 {
    font-size: 2rem;
    text-transform: uppercase;
    letter-spacing: 5px;
  }

  p {
    margin: 1rem;
    color: lightgray;
  }
`;

const GalleryItem = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.5rem;
    color: white;
  }
`;
