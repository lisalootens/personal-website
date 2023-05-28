import { PhotoGallery } from "../../components/PhotoGallery";

export default function AfricaPhotoGallery() {
  const photos = [
    { name: "Photo dune", src: "/images/dune.jpg" },
    { name: "Photo oryx", src: "/images/oryx.jpg" },
    { name: "Photo zebra", src: "/images/zebra.jpg" },
  ];

  return <PhotoGallery photos={photos} />;
}
