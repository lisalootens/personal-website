import styled from "styled-components";
import { useReducer, useState } from "react";

type ProgressBarProps = {
  transitionTime: number;
  isRunning: boolean;
};

const ProgressBarContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0.5rem;
  z-index: 2;
`;

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
  background-color: darkgrey;
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
    <ProgressBarContainer>
      <Background>
        {isRunning ? (
          <RunningBar transitionTime={transitionTime} />
        ) : (
          <Bar transitionTime={transitionTime} />
        )}
      </Background>
    </ProgressBarContainer>
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
      forceUpdate();
      setIsRunning(true);
    },
    stopProgress: () => {
      setIsRunning(false);
    },
  };
}
