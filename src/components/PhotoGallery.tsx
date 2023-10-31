import React from "react";
import { PhotoInterface } from "../interfaces/PhotoInterface";
import styled from "styled-components";

interface PhotoGalleryProps {
  photos: PhotoInterface[];
  title?: string;
  description?: string;
}

export const PhotoGallery: React.FC<PhotoGalleryProps> = ({
  photos,
  title,
  description,
}) => {
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
            <img src={photo.src} alt={photo.name} />
          </GalleryItem>
        ))}
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
`;
