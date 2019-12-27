import { events } from './storage.js';
import { currentWeek } from './display-current-week.js';

export { displayEvents };
// export { splitLongEvent };


function displayEvents(event) {

    event.map(event => {
        const eventDiv = document.createElement('div');
        eventDiv.classList.add('day-event');

        const title = event.title;
        const dateFrom = event.dateFrom;
        const dateTo = event.dateTo;
        const timeFrom = event.timeFrom;
        const timeTo = event.timeTo;
        dateFrom.setUTCHours(timeFrom.split(':').join(', '));
        console.log(timeFrom);
        console.log(dateFrom);
        const description = event.description;

        console.log(+timeFrom.split(':')[0]);

        eventDiv.innerHTML = `${title}<br>
            ${+timeFrom.split(':')[0]}:${+timeFrom.split(':')[1]} - 
            ${+timeTo.split(':')[0]}:${+timeTo.split(':')[1]}<br>
            ${description}`;

        const allHours =  document.querySelectorAll('.calendar__hour-bar');
        let hourBar = [...allHours].find(event => {
                let id = `${dateFrom.getDay()}${+timeFrom.split(':')[0]}`;
                console.log(id);
                return event.dataset.id == id;
        });
        console.log(hourBar);

        let dateOfbar = new Date(hourBar.dataset.date).getDate();
        if (dateOfbar == dateFrom.getDate()) {
            hourBar.append(eventDiv);
        }

        const divSize = (timeTo - timeFrom) / 1000 / 60;
        eventDiv.style.height = `${divSize}px`;

        const divMargin = +timeFrom.split(':')[1];
        eventDiv.style.marginTop = `${divMargin}px`;
    });
}

// function splitLongEvent(arr) {
//     // let newEvents = [];
//     let e = arr.reduce((acc, event) => {
        
//         if (event.dateFrom == event.dateTo) {
//            return [...acc, event[dateTo] = '23:59'];
//         }

//         return acc;
//     }, []);
//     console.log(newEvents);
//     return e;
// }

// splitLongEvent(events);