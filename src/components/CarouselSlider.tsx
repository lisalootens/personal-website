import "keen-slider/keen-slider.min.css";
import {useKeenSlider} from "keen-slider/react";
import styled from "styled-components";
import {useProgressBar} from "./ProgressBar";

// TODO - fix progressbar rendering issue
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

  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout: NodeJS.Timeout;

        function startTimeout() {
          nextTimeout();
          startProgress();
        }

        function nextTimeout() {
          clearTimeout(timeout);
          timeout = setTimeout(() => {
            stopProgress();
            slider.next();
            startProgress();
          }, SLIDE_DURATION);
        }

        slider.on("created", startTimeout);
        slider.on("dragStarted", () => {
          stopProgress();
          clearTimeout(timeout);
        });
        slider.on("animationEnded", startTimeout);
        slider.on("updated", startTimeout);
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
      {showProgressBar === true && <ProgressBar />}
    </>
  );
};
