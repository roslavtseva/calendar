import { events } from './storage.js';
import { renderEvents } from './displaying-events.js';
import { editEventHandler } from './edit-event.js';

export { deleteEvent };

//const event = document.querySelector('.day-event');
const popupModal = document.querySelector('.popup-modal');
const deleteBtn = document.querySelector('.popup__action_delete');

const handlerDeleteEvent = deleteBtn.addEventListener('click', deleteEvent);



function deleteEvent(obj) {


    for (let i = 0; i < events.length; i++) {


        if (obj.id === events[i].id) {
            events.splice(i, 1);

            renderEvents();
        }
        popupModal.style.display = 'none';
    }

    console.log(events);
};

