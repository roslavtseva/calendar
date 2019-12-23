import { week } from './storage.js';
import { createDaysOfWeek } from './render-week.js';

const displayCurrentWeek = (week) => {
    const currentDate = new Date().getDate();
    const currentDay = new Date().getDay();
    console.log(currentDay);
    for (let i = 0; i < week.length; i++) {

        if (i < currentDay) {
            let date = currentDate - (i + 1);
            week[i].date = new Date(new Date().setDate(date)).getDate();
        } else if (i == currentDay) {
            week[i].date = currentDate;
        } else {
            let date = currentDate + (i - 1);
            week[i].date = new Date(new Date().setDate(date)).getDate();
        }
    }
    createDaysOfWeek(week);
};

displayCurrentWeek(week);
export { displayCurrentWeek };


// const todayBtn = document.querySelector('.header__button_today');
// const todayWeekSwitcher = () => {
//     displayCurrentWeek();
// };
// const switchToTodaysWeek = todayBtn.addEventListener('click', todayWeekSwitcher);




// const forwardSwitcherBtn = document.querySelector('.header__week-toggle_chevron-right');
// const backwardSwitcherBtn = document.querySelector('.header__week-toggle_chevron-left');

// const forwardSwitcher = () => {

// };

// const backwardSwitcher = () => {

// };

// const switchWeekForward = forwardSwitcherBtn.addEventListener('click', forwardSwitcher);
// const switchWeekBackward = backwardSwitcherBtn.addEventListener('click', backwardSwitcher);
