import { useReducer, useState } from "react";
import styled from "styled-components";

type DurationBarProps = {
  duration: number;
  isRunning: boolean;
};

function DurationBar({ isRunning, duration }: DurationBarProps) {
  return (
    <Container>
      <Background>
        {isRunning ? (
          <RunningBar duration={duration} />
        ) : (
          <Bar duration={duration} />
        )}
      </Background>
    </Container>
  );
}

export function useDurationBar(duration: number) {
  const [isRunning, setIsRunning] = useState(false);
  const [_, forceUpdate] = useReducer((x) => x + 1, 0);

  return {
    DurationBar: () => (
      <DurationBar isRunning={isRunning} duration={duration} />
    ),
    startDurationBar: () => {
      forceUpdate();
      setIsRunning(true);
    },
    stopDurationBar: () => {
      setIsRunning(false);
    },
  };
}

const Container = styled.div`
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

const Bar = styled.div<{ duration: number }>`
  width: 100%;
  height: 0.5rem;
  background-color: transparent;
`;

const RunningBar = styled(Bar)`
  background-color: darkgrey;
  animation: progressAnimation ${(props) => props.duration}ms;

  @keyframes progressAnimation {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
`;
