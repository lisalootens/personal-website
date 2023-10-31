import { CarouselSlider } from "../components/CarouselSlider";
import { createGlobalStyle } from "styled-components";
import Head from "next/head";

const Photography = () => {
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

  // TODO - page navigation
  function handleImageClick() {
    alert("Clicked!");
  }

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
        handleOnClick={handleImageClick}
      />
    </>
  );
};

export default Photography;

const PageStyle = createGlobalStyle`
  body {
    margin: 0;
    overflow: hidden;
  }
`;