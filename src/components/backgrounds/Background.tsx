import { BirthdayBackground } from "./BirthdayBackground";
import { CirclesBackground } from "./CirclesBackground";
import { SnowBackground } from "./SnowBackground";

const currentDate = new Date();
const currentMonth = currentDate.getMonth() + 1;
const currentDay = currentDate.getDate();

const isBirthdayBackgroundInRange =
  // Every year between the first and 13th of December, show a birthday background
  currentMonth === 12 && currentDay > 6 && currentDay < 13;

const isSnowBackgroundInRange =
  // When birthday background is not active, show a snowy background during winter time
  isBirthdayBackgroundInRange
    ? false
    : currentMonth === 12 || currentMonth === 1;

export function Background() {
  switch (true) {
    case isBirthdayBackgroundInRange:
      return <BirthdayBackground />;
    case isSnowBackgroundInRange:
      return <SnowBackground />;
    default:
      return <CirclesBackground />;
  }
}
