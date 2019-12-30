import { events } from './storage.js';

export { deleteEvent };

const popupModal = document.querySelector('.popup-modal');
const deleteBtn = document.querySelector('.popup__action_delete');

const handlerDeleteEvent = deleteBtn.addEventListener('click', deleteEvent);

function deleteEvent(events, id) {
    
    for (let i = 0; i < events.length; i++) {
        if (id == events[i].id) {
            events.splice(i, 1);
        }
    }
    return events;
}

// console.log(deleteEvent(events, 124));