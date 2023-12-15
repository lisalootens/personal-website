import React, { JSX } from "react";
import "./animations.css";
import { snowAnimation } from "./SnowFlakes";

export function SnowBackground(): JSX.Element {
  return (
    <div className="absolute z-[-1] opacity-80" aria-hidden={true}>
      <ul>
        {Array.from({ length: 150 }).map((_, index) => {
          return (
            <li
              key={`${index}`}
              style={snowAnimation()}
              className="fixed bg-gray-300 rounded-full drop-shadow-[0_0_5px_white] top-[-5%]"
            ></li>
          );
        })}
      </ul>
    </div>
  );
}
