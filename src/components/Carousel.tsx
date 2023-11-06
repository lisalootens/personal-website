import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Photo } from "../types/Photo";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

interface CarouselProps {
  photos: Photo[];
}

function Arrow(props: {
  disabled: boolean;
  left?: boolean;
  onClick: (e: any) => void;
}) {
  const disabled = props.disabled ? " arrow-disabled" : "";
  return (
    <FontAwesomeIcon
      icon={faChevronLeft}
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow-left" : "arrow-right"
      } ${disabled}`}
    />
  );
}

export const Carousel = ({ photos }: CarouselProps) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <>
      <Wrapper>
        <div ref={sliderRef} className="keen-slider">
          {photos.map((photo) => (
            <ImageContainer className={"keen-slider__slide"} key={photo.src}>
              <ExpandedImage key={photo.src} src={photo.src} />
            </ImageContainer>
          ))}
        </div>
        {loaded && instanceRef.current && (
          <ArrowWrapper>
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
          </ArrowWrapper>
        )}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ArrowWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;

  .arrow {
    width: 2rem;
    height: 2rem;
    position: absolute;
    fill: black;
    cursor: pointer;
    padding: 1rem;
    z-index: 1;
  }

  .arrow-left {
    left: 0;
  }

  .arrow-right {
    right: 0;
    rotate: 180deg;
  }

  .arrow-disabled {
    display: none;
  }
`;

const ExpandedImage = styled.img`
  max-width: 80vw;
  max-height: 80vh;
  border-radius: 0.5rem;
  object-fit: cover;
`;
