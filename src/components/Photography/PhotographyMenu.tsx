import { CarouselSlider } from "../CarouselSlider";

export default function PhotographyMenu(): JSX.Element {
  const menuPhotos = [
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
