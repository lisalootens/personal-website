import { Photo } from "../types/Photo";
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
    document.body.style.overflow = "hidden";
  };

  return (
    <>
      <section
        role="region"
        aria-label="outer-grid-section"
        className="grid grid-cols-[repeat(auto-fill,minmax(30rem,1fr))] gap-2 max-sm:grid-cols-[repeat(auto-fill,minmax(15rem,1fr))]"
      >
        {title && (
          <section
            role="region"
            aria-label="grid-title-block"
            className="col-span-1 flex flex-col justify-center text-center text-gray-300 bg-[#2a2a2a] rounded-lg max-h-[30rem]"
          >
            <h1 className="text-4xl uppercase tracking-widest pt-4 max-sm:text-2xl">
              {title}
            </h1>
            <p className="m-4 text-gray-300 p-4 max-sm:text-sm">
              {description}
            </p>
          </section>
        )}
        {photos.map((photo, index) => {
          return (
            <img
              className="cursor-pointer w-full h-full max-h-96 object-cover rounded-lg text-white"
              src={photo.src}
              alt={photo.description}
              key={photo.src}
              onClick={() => handleImageClick(photo, index)}
            />
          );
        })}
        {expandedPhoto && (
          <Modal
            children={<Carousel photos={photos} startAtIndex={index} />}
            onClose={() => setExpandedPhoto(undefined)}
            closeButtonTitle="Close"
          />
        )}
      </section>
    </>
  );
};
