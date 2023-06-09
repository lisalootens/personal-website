import styled from "styled-components";
import { useReducer, useState } from "react";

type ProgressBarProps = {
  transitionTime: number;
  isRunning: boolean;
};

const Background = styled.div`
  width: 100%;
  height: 0.5rem;
  background-color: grey;
`;

const Bar = styled.div<{ transitionTime: number }>`
  width: 100%;
  height: 0.5rem;
  background-color: transparent;
`;

const RunningBar = styled(Bar)`
  background-color: red;
  animation: progressAnimation ${(props) => props.transitionTime}ms;

  @keyframes progressAnimation {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
`;

function ProgressBar({ isRunning, transitionTime }: ProgressBarProps) {
  return (
    <Background>
      {isRunning ? (
        <RunningBar transitionTime={transitionTime} />
      ) : (
        <Bar transitionTime={transitionTime} />
      )}
    </Background>
  );
}

export function useProgressBar(transitionTime: number) {
  const [isRunning, setIsRunning] = useState(false);
  const [_, forceUpdate] = useReducer((x) => x + 1, 0);

  return {
    ProgressBar: () => (
      <ProgressBar isRunning={isRunning} transitionTime={transitionTime} />
    ),
    startProgress: () => {
      setIsRunning(true);
      forceUpdate();
    },
    stopProgress: () => {
      setIsRunning(false);
    },
  };
}
