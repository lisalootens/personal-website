import { CarouselSlider } from "../CarouselSlider";

export default function PhotographyMenu() {
  const menuPhotos: { name: string; src: string; title?: string }[] = [
    {
      name: "dune",
      src: "images/dune.jpg",
      title: "Africa",
    },
    {
      name: "oryx",
      src: "images/oryx.jpg",
      title: "Asia",
    },
    {
      name: "zebra",
      src: "images/zebra.jpg",
      title: "Europe",
    },
  ];
  return <CarouselSlider photos={menuPhotos} />;
}
