import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { FC } from "react";

interface SpaceshipProps {
  handleOnClick: () => any;
}

export const Spaceship: FC<SpaceshipProps> = ({ handleOnClick }) => {
  function spaceshipAnimation() {
    return {
      animation: `
      spaceship-ascent 30s linear infinite, 
      spaceship-steer 4.5s ease-in-out infinite`,
      animationDelay: "10s",
    };
  }

  return (
    <div aria-hidden={true} className="w-full flex justify-center items-center">
      <FontAwesomeIcon
        icon={faRocket}
        onClick={handleOnClick}
        style={spaceshipAnimation()}
        className="fixed text-gray-400 drop-shadow-[0_0_8px_orange] w-4 h-auto top-[-5%] z-1"
      />
    </div>
  );
};
