import React, {ReactElement} from "react";
import "./CirclesBackground.css";

export function CirclesBackground(): ReactElement {
  return (
    <div>
      <ul className={"circles"}>
        {Array.from({ length: 10 }).map((_, index) => (
          <li key={`backgroundCircle-${index}`}></li>
        ))}
      </ul>
    </div>
  );
}
