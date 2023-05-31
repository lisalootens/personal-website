import { createGlobalStyle } from "styled-components";
import { CarouselSlider } from "../components/CarouselSlider";

const menuPhotos = [
  {
    name: "dune",
    src: "images/dune.jpg",
    title: "africa",
  },
  {
    name: "oryx",
    src: "images/oryx.jpg",
    title: "asia",
  },
  {
    name: "zebra",
    src: "images/zebra.jpg",
    title: "europe",
  },
];

const PageStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;

const Photography = () => {
  return (
    <>
      <PageStyle />
      <CarouselSlider photos={menuPhotos} />
    </>
  );
};

export default Photography;
