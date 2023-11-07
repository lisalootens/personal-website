import { Photo } from "../types/Photo";
import styled from "styled-components";
import { useState } from "react";
import { Modal } from "./Modal";
import { Carousel } from "./Carousel";

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
  const [index, setIndex] = useState<number>(0);

  const handleImageClick = (photo: Photo, index: number) => {
    setExpandedPhoto(photo);
    setIndex(index);
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
        {photos.map((photo, index) => {
          return (
            <GalleryItem key={photo.src}>
              <img
                src={photo.src}
                alt={photo.description}
                onClick={() => handleImageClick(photo, index)}
              />
            </GalleryItem>
          );
        })}
        {expandedPhoto && (
          <Modal
            children={<Carousel photos={photos} startAtIndex={index} />}
            onClose={() => setExpandedPhoto(undefined)}
          />
        )}
      </GalleryContainer>
    </>
  );
};

const GalleryContainer = styled.div`
  display: grid;
  gap: 0.5rem;
  grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));

  @media (max-width: 510px) {
    grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  }
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
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.5rem;
    color: white;
  }
`;
