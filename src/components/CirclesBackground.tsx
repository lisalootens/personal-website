import React from "react";
import styles from "./CirclesBackground.module.css";

export function CirclesBackground(): JSX.Element {
  return (
    <div className={styles.circles}>
      <ul className={styles.circles}>
        {Array.from({ length: 10 }).map((_, index) => (
          <li key={`backgroundCircle-${index}`}></li>
        ))}
      </ul>
    </div>
  );
}
