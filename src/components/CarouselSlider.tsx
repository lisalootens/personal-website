import { useKeenSlider } from "keen-slider/react";
import { useDurationBar } from "./DurationBar";
import { Photo } from "../types/Photo";

interface CarouselSliderProps {
  photos: Photo[];
  clickable: boolean;
  handleOnClick?: any;
  showDurationBar: boolean;
  showTitle: boolean;
}

export const CarouselSlider = ({
  photos,
  clickable,
  handleOnClick,
  showDurationBar,
  showTitle,
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
      <section ref={sliderRef} className="keen-slider flex bg-black h-screen">
        {photos.map((photo) => (
          <section
            className="keen-slider__slide min-w-full h-screen relative overflow-hidden"
            key={photo.name}
            onClick={clickable ? handleOnClick : undefined}
            data-title={photo.name}
          >
            <img
              className="object-cover object-center w-full h-full opacity-70"
              key={photo.name}
              src={photo.src}
              alt={photo.description}
            />
            <h1 className="text-8xl capitalize absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-capitalize text-white text-8vw font-bold cursor-pointer opacity-80 hover:opacity-100 max-sm:text-5xl">
              {showTitle ? photo.name : null}
            </h1>
          </section>
        ))}
        {showDurationBar && <DurationBar />}
      </section>
    </>
  );
};
