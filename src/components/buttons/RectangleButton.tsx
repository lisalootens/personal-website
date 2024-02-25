import { FC } from "react";
import "./Buttons.css";

interface ButtonProps {
  handleOnClick: () => any;
}

export const RectangleButton: FC<ButtonProps> = ({ handleOnClick }) => {
  return (
    <button className="rectangle-button" onClick={handleOnClick}>
      <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
        <rect className="shape" height="60" width="320" />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          className="tracking-[.675rem] fill-gray-200 text-xl text-center"
        >
          AWESOME
        </text>
      </svg>
    </button>
  );
};
