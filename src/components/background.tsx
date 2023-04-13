import React from "react";
import styles from "../components/background.module.css";

export function Background(): JSX.Element {
    return (
        <div className={styles.circles}>
            <ul className={styles.circles}>
                {Array.from({length: 10}).map((_, index) => <li key={`backgroundCircle-${index}`}></li>)}
            </ul>
        </div>
    );
}
