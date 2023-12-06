import React, { JSX } from "react";
import "./animations.css";

function getRandomInt(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export function SnowBackground(): JSX.Element {
  return (
    <div className="absolute z-[-1] opacity-80">
      <ul>
        {Array.from({ length: 200 }).map((_, index) => {
          // Generate random values within specified ranges
          const width = getRandomInt(1, 12);
          const left = getRandomInt(0, 100) + "%";
          const animationDelay = getRandomInt(0, 60);
          const opacity = getRandomInt(0.5, 1);
          const shakeSpeed = getRandomInt(7, 15) + "s";
          const fallSpeed = getRandomInt(30, 60) + "s";

          // Set dynamic values, because this is not supported in Tailwind CSS
          const snowAnimation = {
            width: `${width}px`,
            height: `${width}px`,
            left: `${left}`,
            opacity: opacity,
            animation: `
                snowflakes-fall ${fallSpeed} linear infinite, 
                snowflakes-shake ${shakeSpeed} ease-in-out infinite`,
            animationDelay: `
                ${animationDelay}s, 
                ${animationDelay - getRandomInt(0, 2)}s`,
          };

          return (
            <li
              key={`${index}`}
              style={snowAnimation}
              className="fixed bg-gray-300 rounded-full drop-shadow-[0_0_5px_white] top-[-5%]"
            ></li>
          );
        })}
      </ul>
    </div>
  );
}
