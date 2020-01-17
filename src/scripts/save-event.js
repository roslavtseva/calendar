import { events } from './storage.js';
import { renderEvents, mapEvents } from './displaying-events.js';
import { popupForm, closePopup } from './create-popup.js';

export { editSaveHandler };

const editSaveHandler = event => {
    //read form
    event.preventDefault();
    const formData = [...new FormData(popupForm)];
    const newEvent = formData.reduce((acc, item) => {
        acc[item[0]] = item[1];
        return acc;
    }, {});

    //make appropriate date format
    const timeFrom = (newEvent.timeFrom).split(':');
    newEvent.dateFrom = new Date(new Date(newEvent.dateFrom).setHours(+timeFrom[0], +timeFrom[1]));
    const timeTo = (newEvent.timeTo).split(':');
    newEvent.dateTo = new Date(new Date(newEvent.dateTo).setHours(+timeTo[0], +timeTo[1]));

    debugger;
    if (newEvent.id === "0") {
        newEvent.id = Math.floor(Math.random() * 1000);

        if (newEvent.title == '') {
            newEvent.title = 'No Title';
        }
        events.push(newEvent);
    } else {
        events.map((event, index) => {
            if (clickEventId == event.id) {
                events.splice(index, 1);
            }
            return event;
        });
        events.push(newEvent);
    }

    closePopup();
    renderEvents();
}



popupForm.addEventListener('submit', editSaveHandler);
