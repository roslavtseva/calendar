export { displayCurrentWeek };

const displayCurrentWeek = () => {
    const week = [...document.querySelectorAll('.day-date')];
    const newDate = new Date();
    const currentDate = newDate.getDate();
    const currentDay = newDate.getDay();

    let daysLeft = 6;
    let daysToCurrent = currentDay - 1;
    for (let i = 0; i < week.length; i++) {
        if (currentDay == 0) {
            const day = new Date(newDate).setDate(newDate.getDate() - daysLeft);
            week[i].textContent = new Date(day).getDate();
            week[week.length - 1].textContent = currentDate;
            week[week.length - 1].classList.add('day-date_current');
            daysLeft--;
        } else {
            const day = new Date(newDate).setDate(currentDate - daysToCurrent);
            week[i].textContent = new Date(day).getDate();
            week[currentDay - 1].classList.add('day-date_current');
            daysToCurrent--;
        }
    }
};
displayCurrentWeek();

const todayBtn = document.querySelector('.header__button_today');
const todayWeekSwitcher = () => {
    displayCurrentWeek();
};
const switchToTodaysWeek = todayBtn.addEventListener('click', todayWeekSwitcher);




// const forwardSwitcherBtn = document.querySelector('.header__week-toggle_chevron-right');
// const backwardSwitcherBtn = document.querySelector('.header__week-toggle_chevron-left');

// const forwardSwitcher = () => {

// };

// const backwardSwitcher = () => {

// };

// const switchWeekForward = forwardSwitcherBtn.addEventListener('click', forwardSwitcher);
// const switchWeekBackward = backwardSwitcherBtn.addEventListener('click', backwardSwitcher);
