import { useReducer, useState } from "react";
import "./animations.css";

type DurationBarProps = {
  duration: number;
  isRunning: boolean;
};

function DurationBar({ isRunning, duration }: DurationBarProps) {
  document.documentElement.style.setProperty(
    "--animation-duration",
    `${duration}ms`,
  );
  return (
    <div className={"absolute bottom-0 left-0 w-full h-2 z-20"}>
      <div className={"w-full h-2 bg-gray-500"}>
        {isRunning ? (
          <div className={`progress-animation w-full h-2 bg-gray-400`} />
        ) : (
          <div
            className={`w-full h-0.5 bg-gray-500 transition-opacity duration-${duration} opacity-50`}
          />
        )}
      </div>
    </div>
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
