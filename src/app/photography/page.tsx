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
      src: "images/africa.jpg",
      location: "namibia",
      description: "Photo of a elephant",
    },
    {
      name: "asia",
      src: "images/asia.jpg",
      location: "india",
      description: "Photo of a mosque",
    },
    {
      name: "europe",
      src: "images/europe.jpg",
      location: "the netherlands",
      description: "Photo of a tree at a foggy sunrise",
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
