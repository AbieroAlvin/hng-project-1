const currentDay = document.querySelector("#current-day");
const currentTime = document.querySelector("#current-time");

const now = new Date();
const day = String(now.getUTCDay());
const currentUTCTimeInMilliseconds = String(now.getTime());
const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

currentDay.textContent = daysOfWeek[day];
currentTime.textContent = `${currentUTCTimeInMilliseconds}`;
