import styled from "styled-components";

interface Photo {
  src: string;
  alt: string;
}

interface PhotoGalleryProps {
  photos: Photo[];
}

const GalleryContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 1.5rem;
`;

const PhotoContainer = styled.div`
  img {
    width: 30vw;
    height: 20vw;
    object-fit: cover;

    @media (max-width: 914px) {
      width: 100%;
      height: auto;
    }
  }

  @media (max-width: 914px) {
    width: 45%;
    display: flex;
    justify-content: center;
    margin-bottom: 1.5rem;
  }
`;

export const PhotoGallery: React.FC<PhotoGalleryProps> = ({ photos }) => {
  return (
    <GalleryContainer>
      {photos.map((photo) => (
        <PhotoContainer key={photo.src}>
          <img className={PhotoContainer} src={photo.src} alt={photo.alt} />
        </PhotoContainer>
      ))}
    </GalleryContainer>
  );
};
