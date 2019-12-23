import { week } from './storage.js';
import { createDaysOfWeek } from './render-week.js';

export { displayCurrentWeek };
export { switchWeekForward };
export { switchWeekBackward };


const displayCurrentWeek = (week) => {
    const currentDate = new Date().getDate();
    const currentDay = new Date().getDay();

    for (let i = 0; i < week.length; i++) {

        if (i < currentDay) {
            let date = currentDate - (i + 1);
            week[i].date = new Date(new Date().setDate(date));
        } else if (i == currentDay) {
            week[i].date = new Date();
        } else {
            let date = currentDate + (i - 1);
            week[i].date = new Date(new Date().setDate(date));
        }
    }
    createDaysOfWeek(week);
};

displayCurrentWeek(week);



const todayBtn = document.querySelector('.header__button_today');
const todayWeekSwitcher = () => {
    displayCurrentWeek(week);
};
const switchToTodaysWeek = todayBtn.addEventListener('click', todayWeekSwitcher);




const forwardSwitcherBtn = document.querySelector('.header__week-toggle_chevron-right');
function forwardSwitcher(week) {
    let newWeek = [...week];

    newWeek.map(day => {
        const newDate = day.date;
        const newDay = newDate.getDate();

        day.date = new Date(new Date(newDate).setDate(newDay + 7));
    });
    createDaysOfWeek(week);
};
const switchWeekForward = forwardSwitcherBtn.addEventListener('click', forwardSwitcher.bind(forwardSwitcherBtn, week));



const backwardSwitcherBtn = document.querySelector('.header__week-toggle_chevron-left');
const backwardSwitcher = (week) => {
    let newWeek = [...week];

    newWeek.map(day => {
        const newDate = day.date;
        const newDay = newDate.getDate();

        day.date = new Date(new Date(newDate).setDate(newDay - 7));
    });
    createDaysOfWeek(week);
};
const switchWeekBackward = backwardSwitcherBtn.addEventListener('click', backwardSwitcher.bind(backwardSwitcherBtn, week));
