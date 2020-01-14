import { deleteButton, formFieldPopUp, popup, popupForm, saveButton, closePopup, createPopup } from './create-popup.js';
import { events } from './storage.js';
import { displayCurrentWeek, currentWeek } from './display-current-week.js';
import { deleteEvent } from './delete-event.js';
import { saveNewEvent } from './save-event.js';
import { renderEvents, mapEvents } from './displaying-events.js';
import { renderCalendar } from './render-calendar.js';
<<<<<<< HEAD
=======


// import { renderCalendar } from './render-calendar.js';
>>>>>>> d9bf607ad44bcdd2d9c7ece8232b1ef83b0e53ce

export {
    editEventHandler,
    weekBar,
    renderCorrectPopup,
    editObjEvent,
}

const weekBar = document.querySelector('.calendar__week-bar');
weekBar.addEventListener('click', createPopup);
weekBar.addEventListener('click', editEventHandler, true);

//const deleteButton = document.querySelector('.popup__action_delete');

function editEventHandler(event) {
    if (!event.target.classList.contains('day-event')) return;

    const events = get('events');
    console.log(events);

    const targetEventId = event.target.getAttribute('data-id');
  //  const allEventsOnPage = weekBar.querySelectorAll('.day-event');
    console.log(targetEventId);

    const clickedObjEvent = events.find(event => {        
        return targetEventId == event.id;
    });

    event.stopPropagation();
    renderCorrectPopup(clickedObjEvent);


}


function renderCorrectPopup(obj) {

    

    formFieldPopUp.title.value = obj.title;
    formFieldPopUp.dateFrom.value = obj.dateFrom.toLocaleDateString().split('.').reverse().join('-');
    formFieldPopUp.dateTo.value = obj.dateTo.toLocaleDateString().split('.').reverse().join('-');

    formFieldPopUp.timeFrom.value = obj.dateFrom.toLocaleTimeString();
    formFieldPopUp.timeTo.value = obj.dateTo.toLocaleTimeString();

    formFieldPopUp.description.value = obj.description;
    formFieldPopUp.id.value = obj.id;

    deleteButton.style.visibility = 'visible';
    popup.style.display = 'block';

    const handlerDeleteEvent = deleteButton.addEventListener('click', deleteEvent.bind(deleteButton, obj));

    switcher();


}

function switcher() {
    popupForm.removeEventListener('submit', saveNewEvent);
    popupForm.addEventListener('submit', editObjEvent);
}

function editObjEvent(event) {

    const formData = [...new FormData(popupForm)];
    const clickEventId = new FormData(popupForm).get('id');

    const events = getItemFromStorage('events');

    const newEvent = formData.reduce((acc, item) => {
        acc[item[0]] = item[1];
        return acc;
    }, {});

    const timeFrom = (newEvent.timeFrom).split(':');
    newEvent.dateFrom = new Date(new Date(newEvent.dateFrom).setHours(+timeFrom[0], +timeFrom[1]));
    const timeTo = (newEvent.timeTo).split(':');
    newEvent.dateTo = new Date(new Date(newEvent.dateTo).setHours(+timeTo[0], +timeTo[1]));

    events.map((event, index) => {
        if (clickEventId == event.id) {
            events.splice(index, 1);
        }
        return event;
    });
    events.push(newEvent);

    setItemToStorage('events', events);

    event.preventDefault();
    displayCurrentWeek(currentWeek);
    renderEvents();
    closePopup();
    popupForm.addEventListener('submit', saveNewEvent);
}