import { week } from './storage.js';

function createDaysOfWeek(week){
    const daysContainer = document.querySelector('.days-container');
    daysContainer.innerHTML = '';

    const gmtBlock = document.createElement('div');
    gmtBlock.textContent = 'gmt+02';
    gmtBlock.classList.add('gmt');
    daysContainer.append(gmtBlock);

    for (let i = 0; i < week.length; i++){
        const oneDay = document.createElement('div');
        oneDay.classList.add('day');
        
        const dayName = document.createElement('span');
        dayName.classList.add('day-name');
        dayName.textContent = week[i].name;
        oneDay.append(dayName);

        const dayDate = document.createElement('div');

        if (i == new Date().getDay()) {
            dayDate.classList.add('day-date_current');
        }

        dayDate.classList.add('day-date');
        const date = week[i].date;
        
        dayDate.textContent = new Date(date).getDate();
        oneDay.append(dayDate);
        
        daysContainer.append(oneDay);
    }
};

// createDaysOfWeek();
export { createDaysOfWeek };