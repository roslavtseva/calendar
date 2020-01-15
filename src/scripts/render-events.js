import { setItemToStorage, getItemFromStorage } from './storage.js';
import { createPopup } from './create-popup.js';


export {
    renderEvents,
    mapEvents,
};


function mapEvents() {
    const events = getItemFromStorage('events') || [];
    console.log(events);

    const newEvents = [];
    
    events.forEach(event => {

        if (new Date(event.dateFrom).getDate() !== new Date(event.dateTo).getDate()) {
            const firstToYear = new Date(event.dateFrom).getFullYear();
            const firstToMonth = new Date(event.dateFrom).getMonth();
            const firstToDate = new Date(event.dateFrom).getDate();
            const firstToFullDate = new Date(firstToYear, firstToMonth, firstToDate, 23, 59);

            const secondFromYear = new Date(event.dateTo).getFullYear();
            const secondFromMonth = new Date(event.dateTo).getMonth();
            const secondFromDate = new Date(event.dateTo).getDate();
            const secondFromFullDate = new Date(secondFromYear, secondFromMonth, secondFromDate);
            const id = event.id;
            const eventColor = event.colorChooser;

            const firstObjectEvent = {
                title: event.title,
                dateFrom: event.dateFrom,
                dateTo: firstToFullDate,
                description: event.description,
                colorChooser: eventColor,
                id: id,
            };

            const secondObjectEvent = {
                title: event.title,
                dateFrom: secondFromFullDate,
                dateTo: event.dateTo,
                description: event.description,
                colorChooser: eventColor,
                id: id,
            };
            newEvents.push(firstObjectEvent, secondObjectEvent);

        } else {
            newEvents.push(event);
        }
    });
    setItemToStorage('events', newEvents);
    return newEvents;
}

function renderEvents() {  // display already splitted and generated new array
    const newEvents = mapEvents();

    const hourBar = document.querySelectorAll('.calendar__hour-bar');
    
    [...hourBar].map(hourBar => {
        const eventDiv = document.querySelector('.day-event');
        if (hourBar.contains(eventDiv)){
            eventDiv.remove();
        }
    });

    return newEvents.map(event => {
        const eventDiv = document.createElement('div');
        eventDiv.classList.add('day-event');
        eventDiv.setAttribute('data-id', event.id);

        const title = event.title;
        const dateFrom = event.dateFrom;
        const dateTo = event.dateTo;
        const description = event.description;
        
        eventDiv.innerHTML = `${title}<br>
        ${new Date(dateFrom).getHours()}:${new Date(dateFrom).getMinutes()} - 
        ${new Date(dateTo).getHours()}:${new Date(dateTo).getMinutes()}<br>
        ${description}`;

        const allHours = document.querySelectorAll('.calendar__hour-bar');
        const hourBar = [...allHours].find(event => {
            let id = `${new Date(dateFrom).getDay()}${new Date(dateFrom).getHours()}`;
            return event.dataset.id == id;
        });

        const dateOfbar = new Date(hourBar.dataset.date).getDate();
        if (dateOfbar == new Date(dateFrom).getDate()) {
            hourBar.append(eventDiv);
        }

        const divSize = (new Date(dateTo) - new Date(dateFrom)) / 1000 / 60;
        eventDiv.style.height = `${divSize}px`;

        const divMargin = new Date(dateFrom).getMinutes();
        eventDiv.style.marginTop = `${divMargin}px`;

        eventDiv.style.background = `${event.colorChooser}`;


        // const weekBar = document.querySelector('.calendar__week-bar');
        // weekBar.addEventListener('click', createPopup);
    });
}