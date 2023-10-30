import React from "react";
import { useKeenSlider } from "keen-slider/react";
import styled from "styled-components";

interface Photo {
  name: string;
  src: string;
  alt: string;
  title?: string;
}

interface CarouselSliderProps {
  photos: Photo[];
  clickable: boolean;
}

export const CarouselSlider = ({ photos, clickable }: CarouselSliderProps) => {
  const SLIDE_DURATION = 5 * 1000;

  function handleOnClick(): void {
    alert("clicked!");
  }

  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout: NodeJS.Timeout;

        function startTimeout() {
          nextTimeout();
        }

        function nextTimeout() {
          clearTimeout(timeout);
          timeout = setTimeout(() => {
            slider.next();
          }, SLIDE_DURATION);
        }

        slider.on("created", startTimeout);
        slider.on("dragStarted", () => {
          clearTimeout(timeout);
        });
        slider.on("dragEnded", startTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", startTimeout);
      },
    ],
  );

  return (
    <>
      <Wrapper ref={sliderRef}>
        {photos.map((photo) => (
          <Slide
            key={photo.name}
            onClick={clickable ? handleOnClick : undefined}
          >
            <img key={photo.name} src={photo.src} alt={photo.alt} />
            <div className="title">{photo.title}</div>
          </Slide>
        ))}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  display: flex;
`;

const Slide = styled.div.attrs({ className: "keen-slider__slide" })`
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;

  .title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-transform: capitalize;
    color: white;
    font-size: 8vw;
    font-weight: bold;
    cursor: pointer;

    @media (max-width: 960px) {
      font-size: 15vw;
    }

    :hover {
      opacity: 0.9;
    }
  }

  img {
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 100%;
  }
`;
