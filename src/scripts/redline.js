import { renderCalendar } from "./render-calendar.js";

const currentHourBar = displayRedLineOnCurrentHourBar();

export function renderRedLine() {
  const redLine = document.querySelector(".redline");
  redLine.classList.add("redline");

  const dot = document.createElement("div");
  dot.classList.add("dot");

  const line = document.createElement("div");
  line.classList.add("line");

  redLine.append(dot);
  redLine.append(line);

  currentHourBar.append(redLine);
}

renderRedLine();

function displayRedLineOnCurrentHourBar() {
  const hourContainer = document.querySelectorAll(".calendar__hour-bar");

  const currentDate = new Date();
  const currentDay = currentDate.getDay();
  const currentHour = currentDate.getHours();
  const currentMinute = currentDate.getMinutes()

  let positionInsideHourBar = (hourContainer.height / 60) * currentMinute;


  return [...hourContainer].find(
    el => el.dataset.day == currentDay && el.dataset.hour == currentHour
  );
}
displayRedLineOnCurrentHourBar();
