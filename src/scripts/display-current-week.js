import { week } from './storage.js';
import { createDaysOfWeek } from './render-week.js';

export { displayCurrentWeek };


const displayCurrentWeek = (week) => {
    const currentDate = new Date().getDate();
    const currentDay = new Date().getDay();
    console.log(currentDay);
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

// const todayBtn = document.querySelector('.header__button_today');
// const todayWeekSwitcher = () => {
//     displayCurrentWeek();
// };
// const switchToTodaysWeek = todayBtn.addEventListener('click', todayWeekSwitcher);




const forwardSwitcherBtn = document.querySelector('.header__week-toggle_chevron-right');
const backwardSwitcherBtn = document.querySelector('.header__week-toggle_chevron-left');

function forwardSwitcher(week) {
    
    return week.map(day => {

        console.log(week);

        const date = day.date.getDate();
    });
};

export const switchWeekForward = forwardSwitcherBtn.addEventListener('click', forwardSwitcher.bind(forwardSwitcherBtn, week));



// const switchWeekBackward = backwardSwitcherBtn.addEventListener('click', backwardSwitcher);
// export { switchWeekForward };


// const backwardSwitcher = (week) => {

// };