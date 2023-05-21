import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { createGlobalStyle } from "styled-components";

interface Photo {
  name: string;
  src: string;
}

interface CarouselSliderProps {
  photos: Photo[];
}

const CarouselStyle = createGlobalStyle`
  .keen-slider__slide {
    min-width: 100%;
    height: 80vh;
  }

  img {
    object-fit: cover;
  }
`;

export const CarouselSlider: React.FC<CarouselSliderProps> = ({ photos }) => {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout: any;

        function clearNextTimeout() {
          clearTimeout(timeout);
        }

        function nextTimeout() {
          clearTimeout(timeout);
          timeout = setTimeout(() => {
            slider.next();
          }, 5000);
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
      <CarouselStyle />
      <div ref={sliderRef} className={"keen-slider"}>
        {photos.map((photo) => (
          <img
            key={photo.name}
            src={photo.src}
            alt={photo.name}
            className="keen-slider__slide"
          />
        ))}
      </div>
    </>
  );
};
