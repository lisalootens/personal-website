import React, { JSX } from "react";
import "./CirclesBackground.css";

export function CirclesBackground(): JSX.Element {
  return (
    <div>
      <ul className="circles">
        {Array.from({ length: 10 }).map((_, index) => (
          <li key={`backgroundCircle-${index}`}></li>
        ))}
      </ul>
    </div>
  );
}
