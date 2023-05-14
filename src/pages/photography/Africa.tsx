import { PhotoGallery } from "../../components/photoGallery";

export default function AfricaBlog() {
  const photos = [
    { src: "/images/dune.jpg", alt: "Photo dune" },
    { src: "/images/oryx.jpg", alt: "Photo oryx" },
    { src: "/images/zebra.jpg", alt: "Photo zebra" },
  ];

  return <PhotoGallery photos={photos} />;
}
