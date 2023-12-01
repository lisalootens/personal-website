import { BirthdayBackground } from "./BirthdayBackground";
import { CirclesBackground } from "./CirclesBackground";

const currentDate = new Date();
const currentMonth = currentDate.getMonth() + 1;
const currentDay = currentDate.getDate();

// Every year between the first and 13th of December, show a birthday background
const isBirthdayBackgroundInRange =
  currentMonth === 12 && currentDay >= 1 && currentDay < 13;

export const Background = () =>
  isBirthdayBackgroundInRange ? <BirthdayBackground /> : <CirclesBackground />;
