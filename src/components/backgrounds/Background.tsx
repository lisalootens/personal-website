import { BirthdayBackground } from "./BirthdayBackground";
import { CirclesBackground } from "./CirclesBackground";
import { SnowBackground } from "./SnowBackground";

const currentDate = new Date();
const currentMonth = currentDate.getMonth() + 1;
const currentDay = currentDate.getDate();

const isBirthdayClose =
  // Every year between the first and 13th of December, show a birthday background
  currentMonth === 12 && currentDay > 6 && currentDay < 13;

const isWinter =
  // When birthday background is not active, show a snowy background during winter time
  currentMonth >= 11 || currentMonth <= 2;

export function Background() {
  if (isBirthdayClose) return <BirthdayBackground />;
  if (isWinter) return <SnowBackground />;
  return <CirclesBackground />;
}
