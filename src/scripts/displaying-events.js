import { events } from './storage.js';

export { displayEvents };

function displayEvents(ev) {

    // const dayOfEvent = document.querySelector();

    ev.map(event => {
        const eventDiv = document.createElement('div');

        const title = event.title;
        const timeFrom = event.timeFrom;
        // console.log(timeFrom);
        const timeTo = event.timeTo;
        const description = event.description;

        eventDiv.innerHTML = `${title}<br>
            ${timeFrom.getHours()}:${timeFrom.getMinutes()} - 
            ${timeTo.getHours()}:${timeTo.getMinutes()}<br>
            ${description}`;

        eventDiv.classList.add('day-event');

        const q =  document.querySelectorAll('.calendar__hour-bar');
        let e = [...q].find(item => {
            let id = `${timeFrom.getDay()}${timeFrom.getHours()}`;
            return item.dataset.id == id;
        });

        e.append(eventDiv);
        console.log(e);
        // const w = document.div.dataset.hour; 
        const day = timeFrom.getDay();
        // console.log(q.dataset);
        // console.log (w);

        // dayOfEvent.append(eventDiv);
    });
}

displayEvents(events);