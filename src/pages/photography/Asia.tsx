import { PhotoGallery } from "../../components/PhotoGallery/Content";
import PhotoGalleryHeader from "../../components/PhotoGallery/Header";

export default function AfricaPhotoGallery() {
  const photos = [
    { name: "Photo dune", src: "/images/dune.jpg" },
    { name: "Photo oryx", src: "/images/oryx.jpg" },
  ];

  return (
    <>
      {PhotoGalleryHeader("Asia")}
      <PhotoGallery photos={photos} />
    </>
  );
}
