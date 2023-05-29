import { PhotoGalleryContent } from "../../components/Photography/GalleryContent";
import { PhotoGalleryHeader } from "../../components/Photography/GalleryHeader";

export default function AfricaPhotoGallery(): JSX.Element {
  const photos: { name: string; src: string }[] = [
    { name: "Photo dune", src: "/images/dune.jpg" },
    { name: "Photo oryx", src: "/images/oryx.jpg" },
  ];

  return (
    <>
      {PhotoGalleryHeader("Asia")}
      <PhotoGalleryContent photos={photos} />
    </>
  );
}
