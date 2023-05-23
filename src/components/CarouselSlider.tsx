import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { createGlobalStyle } from "styled-components";

interface Photo {
  name: string;
  src: string;
  title?: string;
}

interface CarouselSliderProps {
  photos: Photo[];
}

const CarouselStyle = createGlobalStyle`
  .keen-slider__slide {
    min-width: 100%;
    height: 80vh;
    position: relative;
    overflow: hidden;

    @media (max-width: 418px) {
      height: 100vh;
    }

  }

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
      <div ref={sliderRef} className="keen-slider">
        {photos.map((photo) => (
          <div key={photo.name} className="keen-slider__slide">
            <img key={photo.name} src={photo.src} alt={photo.name} />
            <div className="title">{photo.title}</div>
          </div>
        ))}
      </div>
    </>
  );
};
