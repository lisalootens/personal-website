import styled from "styled-components";
import { useState } from "react";

type ProgressBarProps = {
  transitionTime: number;
  isRunning: boolean;
};

const Background = styled.div`
  width: 100%;
  height: 0.5rem;
  background-color: grey;
`;

const Bar = styled.div<{ progress: string; transitionTime: number }>`
  width: ${(props) => props.progress};
  height: 0.5rem;
  background-color: red;
  transition: width ${(props) => props.transitionTime}ms ease;
`;

function ProgressBar({ isRunning, transitionTime }: ProgressBarProps) {
  return (
    <Background>
      <Bar
        progress={isRunning ? "100%" : "0%"}
        transitionTime={transitionTime}
      />
    </Background>
  );
}

export function useProgressBar(transitionTime: number) {
  const [isRunning, setIsRunning] = useState(false);

  return {
    ProgressBar: () => (
      <ProgressBar isRunning={isRunning} transitionTime={transitionTime} />
    ),
    startProgress: () => {
      setIsRunning(true);
    },
    stopProgress: () => {
      setIsRunning(false);
    },
  };
}
