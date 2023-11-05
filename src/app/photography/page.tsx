"use client";

import Head from "next/head";
import { CarouselSlider } from "../../components/CarouselSlider";
import { createGlobalStyle } from "styled-components";
import { useRouter } from "next/navigation";

export default function PhotographyPage() {
  const router = useRouter();
  const menuPhotos = [
    {
      name: "africa",
      src: "images/dune.jpg",
      location: "namibia",
      description: "Photo of a dune",
    },
    {
      name: "asia",
      src: "images/oryx.jpg",
      location: "namibia",
      description: "Photo of an oryx",
    },
    {
      name: "europe",
      src: "images/zebra.jpg",
      location: "namibia",
      description: "Photo of a zebra",
    },
  ];

  function handleImageClick(event: React.MouseEvent<HTMLElement>) {
    const name = (event.currentTarget as HTMLImageElement).getAttribute(
      "data-title",
    );

    if (name == null) {
      throw new Error("Unavailable.");
    }
    return router.push(`photography/gallery?name=${encodeURIComponent(name)}`);
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
        showTitle={true}
        clickable={true}
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
