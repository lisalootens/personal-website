import { PhotoGalleryContent } from "../../components/Photography/GalleryContent";
import { PhotoGalleryHeader } from "../../components/Photography/GalleryHeader";

export default function AfricaPhotoGallery(): JSX.Element {
  const photos = [
    { name: "Photo oryx", src: "/images/oryx.jpg" },
    { name: "Photo zebra", src: "/images/zebra.jpg" },
  ];

  return (
    <>
      {PhotoGalleryHeader("Europe")}
      <PhotoGalleryContent photos={photos} />
    </>
  );
}
