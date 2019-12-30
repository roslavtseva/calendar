import { events } from './storage.js';
import { currentWeek } from './display-current-week.js';

export { displayEvents }; //, splitLongEvent, splitedEvents

// let splitedEvents = splitLongEvent(events);

function displayEvents(events) {
    
    return events.map(event => {
        const eventDiv = document.createElement('div');
        eventDiv.classList.add('day-event');

        const title = event.title;
        const dateFrom = event.dateFrom;
        const dateTo = event.dateTo;
        const description = event.description;

        eventDiv.innerHTML = `${title}<br>
            ${dateFrom.getHours()}:${dateFrom.getMinutes()} - 
            ${dateTo.getHours()}:${dateTo.getMinutes()}<br>
            ${description}`;

        const allHours =  document.querySelectorAll('.calendar__hour-bar');
        let hourBar = [...allHours].find(event => {
                let id = `${dateFrom.getDay()}${dateFrom.getHours()}`;
                return event.dataset.id == id;
        });

        let dateOfbar = new Date(hourBar.dataset.date).getDate();
        if (dateOfbar == dateFrom.getDate()) {
            hourBar.append(eventDiv);
        }

        const divSize = (dateTo - dateFrom) / 1000 / 60;
        eventDiv.style.height = `${divSize}px`;

        const divMargin = dateFrom.getMinutes();
        eventDiv.style.marginTop = `${divMargin}px`;
    });
}

function createNewEventObjects(event) {
    const firstToYear = new Date(event.dateFrom).getFullYear();
    const firstToMonth = new Date(event.dateFrom).getMonth();
    const firstToDate = new Date(event.dateFrom).getDate();
    const firstToFullDate = new Date(firstToYear, firstToMonth, firstToDate, 23, 59);
    
    const secondFromYear = new Date(event.dateTo).getFullYear();
    const secondFromMonth = new Date(event.dateTo).getMonth();
    const secondFromDate = new Date(event.dateTo).getDate();
    const secondFromFullDate = new Date(secondFromYear, secondFromMonth, secondFromDate);
    const id = Math.floor(Math.random() * 1000);

    const firstObjectEvent = {
        title: event.title,
        dateFrom: event.dateFrom,
        dateTo: firstToFullDate,
        description: event.description,
        id: 1,
    };

    const secondObjectEvent = {
        title: event.title,
        dateFrom: secondFromFullDate,
        dateTo: event.dateTo,
        description: event.description,
        id: 2,
    };

    events.push(firstObjectEvent, secondObjectEvent);
};

function addingNewSplitedEvents(events) {
    events.map((event, index) => {
        if (event.dateFrom.getDate() !== event.dateTo.getDate()) {
            createNewEventObjects(event);
            events.splice(index, 1);
            console.log(events);   
        }
    });
    // let tempArr = filterCorrectDays(array,arrDaysOfWeek[0],arrDaysOfWeek[6]);
    // tempArr.forEach(elem => fillDayPlace(elem));
};

function renderEvents(events) {
    return addingNewSplitedEvents(events); 
};
renderEvents(events);




// function fillSplitedEventsWithCorrectDate(splitedEvents) {
//     return splitedEvents.map(event => {
//         event.dateTo.setDate(new Date(event.dateFrom.getDate()));
//         event.timeTo = '23:59';
//         console.log(events);
//         return event;
//     });
// }

// const newFilledArrOfEvents = fillSplitedEventsWithCorrectDate(splitedEvents); // new changed arr
// console.log(fillSplitedEventsWithCorrectDate(splitedEvents)); 


// console.log(changingDatesInOriginEvents(events));
// function changingDatesInOriginEvents(events) {

//     return events.forEach(event => {
//         if (event.dateFrom.getDay() !== event.dateTo.getDay()) {
//             event.dateFrom.setDate(new Date(event.dateTo.getDate()));
//             event.timeFrom = '00:00';
//         }
//         console.log(events);
//     });
// }
// console.log(splitedEvents);
// console.log(events);