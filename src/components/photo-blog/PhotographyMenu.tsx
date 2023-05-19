import { CarouselSlider } from "./CarouselSlider";

export default function PhotographyMenu() {
  const menuPhotos = [
    {
      name: "dune",
      src: "images/dune.jpg",
    },
    {
      name: "oryx",
      src: "images/oryx.jpg",
    },
    {
      name: "zebra",
      src: "images/zebra.jpg",
    },
  ];
  return <CarouselSlider photos={menuPhotos} />;
}
