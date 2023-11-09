import styled from "styled-components";
import { Arrows } from "../../types/Arrows";
import { useEffect, useState } from "react";

export const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 500) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {showButton && (
        <SvgButton onClick={scrollToTop}>
          <svg height="60" width="60" xmlns="http://www.w3.org/2000/svg">
            <circle className="shape" cx="30" cy="30" r="20" />
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              alignmentBaseline="middle"
            >
              {Arrows.up}
            </text>
          </svg>
        </SvgButton>
      )}
    </>
  );
};

const SvgButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: none;
  border: none;

  .shape {
    stroke-dasharray: 140 540;
    stroke-dashoffset: -474;
    stroke-width: 2px;
    fill: black;
    opacity: 0.6;
    stroke: #19f6e8;
    transition:
      stroke-width 0.5s,
      stroke-dashoffset 0.5s,
      stroke-dasharray 0.5s;
  }

  text {
    cursor: pointer;
    font-size: 1rem;
    z-index: 1;
    fill: #c0c0c0;
  }

  svg:hover .shape {
    stroke-width: 1px;
    stroke-dashoffset: 0;
    stroke-dasharray: 760;
  }
`;
