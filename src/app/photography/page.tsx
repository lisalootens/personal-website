"use client";

import { CarouselSlider } from "../../components/CarouselSlider";
import { createGlobalStyle } from "styled-components";
import Head from "next/head";
import { useRouter } from "next/navigation";

export default function PhotographyPage() {
  const router = useRouter();
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

  function handleImageClick(path: string) {
    return router.push(path);
  }

  return (
    <>
      <PageStyle />
      <Head>
        <title>Photography</title>
      </Head>
      <CarouselSlider
        photos={menuPhotos}
        showDurationBar={true}
        clickable={true}
        handleOnClick={() => handleImageClick("photography/gallery")}
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
