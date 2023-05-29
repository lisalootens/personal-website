import React, { useEffect, useState } from "react";
import styled from "styled-components";

export function ProgressBar(): JSX.Element {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval: number = 10;
    const duration: number = 5000;
    let updatedProgress: number = 0;

    const timer: NodeJS.Timer = setInterval(() => {
      setProgress((previousProgress: number) => {
        updatedProgress = previousProgress + interval;
        if (updatedProgress == 100) {
          clearInterval(timer);
        }
        return updatedProgress;
      });
    }, duration);

    return () => clearInterval(timer);
  }, []);

  const ProgressBar = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    height: 0.5vw;
    width: 100%;
    background-color: #dadada;
    animation: progressAnimationStrike 4.5s;

    @keyframes progressAnimationStrike {
      from {
        width: 0;
      }
      to {
        width: 100%;
      }
    }
  `;

  return (
    <>
      <ProgressBar />
    </>
  );
}
