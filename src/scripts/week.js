import { week } from './storage.js';




function createDaysOfWeek(){
    const daysContainer = document.querySelector('.days-container');


    for (let i = 0; i < week.length; i++){
        const oneDay = document.createElement('div');
        oneDay.classList.add('day');
        
        const dayName = document.createElement('span');
        dayName.classList.add('day-name');
        dayName.textContent = week[i].name;
        oneDay.append(dayName);
        
        const dayDate = document.createElement('div');
        dayDate.classList.add('day-date');
        dayDate.textContent = week[i].date;
        oneDay.append(dayDate);
        
        
        daysContainer.append(oneDay);
    }



};

createDaysOfWeek();
export { createDaysOfWeek };





