import { setItemToStorage, getItemFromStorage } from './storage.js';
import { renderEvents } from './displaying-events.js';
import { closePopup } from './create-popup.js';

export { deleteEvent };

const deleteBtn = document.querySelector('.popup__action_delete');


deleteBtn.addEventListener('click', deleteEvent);
function deleteEvent(obj) {
    const events = getItemFromStorage('events');

    for (let i = 0; i < events.length; i++) {

        if (obj.id === events[i].id) {
            events.splice(i, 1);
        }
    }
    setItemToStorage('events', events);
    renderEvents();
    closePopup();
};

