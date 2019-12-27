import { events } from './storage.js';
import { currentWeek } from './display-current-week.js';

export { displayEvents };
export { splitLongEvent };


function displayEvents(event) {

    event.map(event => {
        const eventDiv = document.createElement('div');
        eventDiv.classList.add('day-event');

        const title = event.title;
        const timeFrom = event.timeFrom;
        const timeTo = event.timeTo;
        const description = event.description;

        eventDiv.innerHTML = `${title}<br>
            ${timeFrom.getHours()}:${timeFrom.getMinutes()} - 
            ${timeTo.getHours()}:${timeTo.getMinutes()}<br>
            ${description}`;

        const allHours =  document.querySelectorAll('.calendar__hour-bar');
        let hourBar = [...allHours].find(event => {
                let id = `${timeFrom.getDay()}${timeFrom.getHours()}`;
                return event.dataset.id == id;
        });

        let dateOfbar = new Date(hourBar.dataset.date).getDate();
        if (dateOfbar == timeFrom.getDate()) {
            hourBar.append(eventDiv);
        }

        const divSize = (timeTo - timeFrom) / 1000 / 60;
        eventDiv.style.height = `${divSize}px`; // the size of event

        const divMargin = timeFrom.getMinutes();
        eventDiv.style.marginTop = `${divMargin}px`;
    });
}

function splitLongEvent(arr) {


    arr.reduce((acc, event) => {
        if (event.timeFrom.getDate() !== event.timeTo.getDate()) {

            acc.push(event);
            console.log(acc);
        }

        return acc;
    }, []);
}

splitLongEvent(events);