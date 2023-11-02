"use client";

import { CarouselSlider } from "../../components/CarouselSlider";
import { createGlobalStyle } from "styled-components";
import Head from "next/head";

export default function PhotographyPage() {
  const menuPhotos = [
    {
      title: "africa",
      src: "images/dune.jpg",
      location: "namibia",
      description: "Photo of a dune",
    },
    {
      title: "asia",
      src: "images/oryx.jpg",
      location: "namibia",
      description: "Photo of an oryx",
    },
    {
      title: "europe",
      src: "images/zebra.jpg",
      location: "namibia",
      description: "Photo of a zebra",
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
}

const PageStyle = createGlobalStyle`
  body {
    margin: 0;
    overflow: hidden;
  }
`;
