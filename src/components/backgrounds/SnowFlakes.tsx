// Set dynamic values for style properties, because this is not supported in Tailwind CSS

function getRandomInt(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

function generateSnowflakes() {
  // Generate random values within specified ranges
  const width = getRandomInt(1, 12);
  const left = getRandomInt(0, 100) + "%";
  const animationDelay = getRandomInt(0, 60);
  const opacity = getRandomInt(0.5, 1);
  const shakeSpeed = getRandomInt(7, 15) + "s";
  const fallSpeed = getRandomInt(30, 60) + "s";
  return { width, left, animationDelay, opacity, shakeSpeed, fallSpeed };
}

export const snowAnimation = () => {
  const snowflakeProperties = generateSnowflakes();

  return {
    width: `${snowflakeProperties.width}px`,
    height: `${snowflakeProperties.width}px`,
    left: `${snowflakeProperties.left}`,
    opacity: snowflakeProperties.opacity,
    animation: `
                snowflakes-fall ${snowflakeProperties.fallSpeed} linear infinite, 
                snowflakes-shake ${snowflakeProperties.shakeSpeed} ease-in-out infinite`,
    animationDelay: `
                ${snowflakeProperties.animationDelay}s, 
                ${snowflakeProperties.animationDelay - getRandomInt(0, 2)}s`,
  };
};
