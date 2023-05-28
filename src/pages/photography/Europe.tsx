import { PhotoGallery } from "../../components/PhotoGallery/Content";
import PhotoGalleryHeader from "../../components/PhotoGallery/Header";

export default function AfricaPhotoGallery() {
  const photos = [
    { name: "Photo oryx", src: "/images/oryx.jpg" },
    { name: "Photo zebra", src: "/images/zebra.jpg" },
  ];

  return (
    <>
      {PhotoGalleryHeader("Europe")}
      <PhotoGallery photos={photos} />
    </>
  );
}
