import React, { ReactElement } from "react";
import "./BirthdayBackground.css";

export function BirthdayBackground(): ReactElement {
  return (
    <section className={"text-center mt-4 w-full absolute"}>
      <ul>
        {Array.from({ length: 5 }).map((_, index) => (
          <li
            className={"balloon max-md:opacity-30"}
            key={`balloon-${index}`}
          ></li>
        ))}
      </ul>
      <p className={"text-gray-200 tracking-widest max-md:hidden"}>
        My birthday is just around the corner
      </p>
    </section>
  );
}
