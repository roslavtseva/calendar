
import { renderE } from './render-events.js';
import { closePopup, deleteButton } from './create-popup.js';
import { eventDelete, updateEvent, addNewEvent, getEventList } from './gateways.js';

export { deleteEvent };


function deleteEvent(event) { //видаляю


    const parentPopup = deleteButton.closest('.popup');
    const clickedEventId = new FormData(parentPopup).get('id');


    eventDelete(clickedEventId);

    renderE();//перерегдерю
    closePopup();
};

deleteButton.addEventListener('click', deleteEvent);