const currentDay = document.querySelector("#current-day");
const currentTime = document.querySelector("#current-time");

const now = new Date();
const day = String(now.getUTCDay());
const hours = String(now.getUTCHours()).padStart(2, "0");
const minutes = String(now.getUTCMinutes()).padStart(2, "0");
const seconds = String(now.getUTCSeconds()).padStart(2, "0");
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
currentTime.textContent = `${hours}:${minutes}:${seconds} UTC`;
