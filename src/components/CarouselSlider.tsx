import React from "react";
import {useKeenSlider} from "keen-slider/react";
import {useDurationBar} from "./DurationBar";
import {Photo} from "../types/Photo";
import styled from "styled-components";

interface CarouselSliderProps {
  photos: Photo[];
  clickable: boolean;
  handleOnClick?: () => any;
  showDurationBar: boolean;
}

export const CarouselSlider = ({
  photos,
  clickable,
  handleOnClick,
  showDurationBar,
}: CarouselSliderProps) => {
  const SLIDE_DURATION = 5 * 1000;
  const { DurationBar, startDurationBar, stopDurationBar } =
    useDurationBar(SLIDE_DURATION);

  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout: NodeJS.Timeout;

        function startTimeout() {
          nextTimeout();
          startDurationBar();
        }

        function nextTimeout() {
          clearTimeout(timeout);
          timeout = setTimeout(() => {
            stopDurationBar();
            slider.next();
            startDurationBar();
          }, SLIDE_DURATION);
        }

        slider.on("created", startTimeout);
        slider.on("dragStarted", () => {
          stopDurationBar();
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
              key={photo.title}
              onClick={clickable ? handleOnClick : undefined}
          >
            <img key={photo.title} src={photo.src} alt={photo.description}/>
            <div className="title">{photo.title}</div>
          </Slide>
        ))}
        {showDurationBar && <DurationBar />}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  display: flex;
`;

const Slide = styled.div.attrs({ className: "keen-slider__slide" })`
  min-width: 100%;
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