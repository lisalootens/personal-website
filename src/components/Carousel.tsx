import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Photo } from "../types/Photo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

interface CarouselProps {
  photos: Photo[];
  startAtIndex?: number;
}

function Arrow(props: {
  disabled: boolean;
  left?: boolean;
  onClick: (e: any) => void;
}) {
  const disabled = props.disabled ? "hidden" : "";
  return (
    <FontAwesomeIcon
      icon={faChevronLeft}
      onClick={props.onClick}
      className={`${
        props.left ? "left-0 m-0" : "rotate-180 right-0"
      } ${disabled} w-8 h-8 absolute text-white cursor-pointer my-0 p-2 z-10 text-2xl max-sm:w-4 max-sm:h-4`}
    />
  );
}

export const Carousel = ({ photos, startAtIndex }: CarouselProps) => {
  const [currentSlide, setCurrentSlide] = React.useState(
    startAtIndex ? startAtIndex : 0,
  );
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: startAtIndex,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <>
      <section className={"p-4 flex items-center justify-center max-sm:p-0"}>
        <div ref={sliderRef} className="keen-slider ml-6">
          {photos.map((photo) => (
            <div
              className={"keen-slider__slide flex items-center justify-center"}
            >
              <img
                alt={photo.description}
                className={"max-w-[80vw] max-h-[80vh] rounded-xl object-cover"}
                key={photo.src}
                src={photo.src}
              />
            </div>
          ))}
        </div>
        {loaded && instanceRef.current && (
          <div className={"flex items-center justify-center p-3.5"}>
            <Arrow
              left
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />
            <Arrow
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </div>
        )}
      </section>
    </>
  );
};