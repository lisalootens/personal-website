import { CarouselSlider } from "../components/CarouselSlider";
import { createGlobalStyle } from "styled-components";
import Head from "next/head";

const menuPhotos = [
  {
    name: "dune",
    src: "images/dune.jpg",
    title: "africa",
    alt: "Photo of a dune",
  },
  {
    name: "oryx",
    src: "images/oryx.jpg",
    title: "asia",
    alt: "Photo of an oryx",
  },
  {
    name: "zebra",
    src: "images/zebra.jpg",
    title: "europe",
    alt: "Photo of a zebra",
  },
];

const PageStyle = createGlobalStyle`
  body {
    margin: 0;
    overflow: hidden;
  }
`;

const Photography = () => {
  return (
    <>
      <PageStyle />
      <Head>
        <title>Photography</title>
      </Head>
      <CarouselSlider
        photos={menuPhotos}
        clickable={true}
        showDurationBar={true}
      />
    </>
  );
};

export default Photography;
