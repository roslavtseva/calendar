import { deleteButton, formFieldPopUp, popup, popupForm, saveButton, closePopup, createPopup } from './create-popup.js';
import { setItemToStorage, getItemFromStorage } from './storage.js';
import { displayCurrentWeek, currentWeek } from './render-current-week.js';
import { deleteEvent } from './delete-event.js';
import { editSaveHandler } from './save-event.js';
import { renderEvents, mapEvents } from './displaying-events.js';
import { renderCalendar } from './render-calendar.js';


// import { renderCalendar } from './render-calendar.js';

export {
    editEventHandler,
    weekBar,
    renderCorrectPopup,
    editObjEvent,
}

const weekBar = document.querySelector('.calendar__week-bar');

weekBar.addEventListener('click', createPopup);

//TODO disscuss later       
weekBar.addEventListener('click', commonHandler, true);


function commonHandler(event) {
    //const targetEventId = event.target.getAttribute('data-id');

    // if(targetEventId)
        //TODO call save
    // else
    //     editEventHandler(event);

    //event.stopPropagation();
    //renderCorrectPopup(clickedObjEvent);


}

function editEventHandler(event) {
    const clickedObjEvent = events.find(event => {        
        return targetEventId == event.id;
    });


    if (!event.target.classList.contains('day-event')) return;

    const targetEventId = event.target.getAttribute('data-id');

    // const clickedObjEvent = events.find(event => {        
    //     return targetEventId == event.id;
    // });

    // event.stopPropagation();
    // renderCorrectPopup(clickedObjEvent);


}


function renderCorrectPopup(obj) {
    formFieldPopUp.title.value = obj.title;
    formFieldPopUp.dateFrom.value = new Date(obj.dateFrom).toLocaleDateString().split('.').reverse().join('-');
    formFieldPopUp.dateTo.value = new Date(obj.dateTo).toLocaleDateString().split('.').reverse().join('-');

    formFieldPopUp.timeFrom.value = new Date(obj.dateFrom).toLocaleTimeString();
    formFieldPopUp.timeTo.value = new Date(obj.dateTo).toLocaleTimeString();

    formFieldPopUp.description.value = obj.description;
    formFieldPopUp.color.value = obj.colorChooser;
    formFieldPopUp.id.value = obj.id;

    deleteButton.style.visibility = 'visible';
    popup.style.display = 'block';

    //const handlerDeleteEvent = deleteButton.addEventListener('click', deleteEvent.bind(deleteButton, obj));

    switcher();
}


function switcher() {
    popupForm.removeEventListener('submit', saveNewEvent);
    popupForm.addEventListener('submit', editObjEvent);
}


function editObjEvent(event) {

    console.log('hello');


    const formData = [...new FormData(popupForm)];
    const clickEventId = new FormData(popupForm).get('id');

    const events = getItemFromStorage('events');

    const newEvent = formData.reduce((acc, item) => {
        acc[item[0]] = item[1];
        return acc;
    }, {});
    console.log(newEvent);

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
    // weekBar.addEventListener('click', editEventHandler, true);



// SAVE / EDIT - algo
// add 1 listener to the botton +++ 
// use common handler - call save if no ID , call edit if ID is present
// implement save
// implement edit
