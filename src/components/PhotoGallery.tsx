interface Photo {
  src: string;
  alt: string;
}

interface PhotoGalleryProps {
  photos: Photo[];
}

export const PhotoGallery: React.FC<PhotoGalleryProps> = ({ photos }) => {
  return (
    <div>
      {photos.map((photo) => (
        <div key={photo.src}>
          <img src={photo.src} alt={photo.alt} />
        </div>
      ))}
    </div>
  );
};
