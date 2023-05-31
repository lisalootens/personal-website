import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import styled from "styled-components";
import { useProgressBar } from "./ProgressBar";

interface Photo {
  name: string;
  src: string;
  title?: string;
}

interface CarouselSliderProps {
  photos: Photo[];
  showProgressBar: boolean;
}

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
    color: white;
    font-size: 8vw;
    font-weight: bold;

    @media (max-width: 960px) {
      font-size: 15vw;
    }
  }

  img {
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 100%;
  }
`;

export const CarouselSlider = ({ photos, showProgressBar }: CarouselSliderProps) => {
  const SLIDE_DURATION = 5 * 1000;
  const { ProgressBar, startProgress, stopProgress } =
    useProgressBar(SLIDE_DURATION);

  function ShowProgressBar() {
    if (!showProgressBar) {
      return <div></div>;
    } else {
      <ProgressBar />;
    }
  }

  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout: NodeJS.Timeout;

        function clearNextTimeout() {
          stopProgress();
          clearTimeout(timeout);
        }

        function nextTimeout() {
          stopProgress();
          clearTimeout(timeout);
          timeout = setTimeout(() => {
            slider.next();
          }, SLIDE_DURATION);
          startProgress();
        }

        slider.on("created", () => {
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <>
      <div ref={sliderRef} className="keen-slider">
        {photos.map((photo) => (
          <Slide key={photo.name} className="keen-slider__slide">
            <img key={photo.name} src={photo.src} alt={photo.name} />
            <div className="title">{photo.title}</div>
          </Slide>
        ))}
      </div>
      {ShowProgressBar};
    </>
  );
};
