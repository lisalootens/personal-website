import { PhotoGallery } from "../../components/PhotoGallery";

export default function AfricaPhotoGallery() {
  const photos = [
    { src: "/images/dune.jpg", alt: "Photo dune" },
    { src: "/images/oryx.jpg", alt: "Photo oryx" },
    { src: "/images/zebra.jpg", alt: "Photo zebra" },
  ];

  return <PhotoGallery photos={photos} />;
}
