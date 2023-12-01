import { Arrows } from "../../types/Arrows";
import { useEffect, useState } from "react";
import "./Buttons.css";

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
        <button
          className="default-button fill-black fixed bottom-[20px] right-[20px]"
          onClick={scrollToTop}
        >
          <svg height="60" width="60" xmlns="http://www.w3.org/2000/svg">
            <circle className="shape opacity-70" cx="30" cy="30" r="20" />
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              alignmentBaseline="middle"
            >
              {Arrows.up}
            </text>
          </svg>
        </button>
      )}
    </>
  );
};
