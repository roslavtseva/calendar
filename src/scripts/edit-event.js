import { formFieldPopUp, popup, popupForm, deleteButton, saveButton, closePopup, createPopup } from './create-popup.js';
import { events } from './storage.js';
import { displayCurrentWeek, currentWeek } from './display-current-week.js';
import { deleteEvent } from './delete-event.js';
import { saveNewEvent } from './save-event.js';
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
weekBar.addEventListener('click', editEventHandler, true);


function editEventHandler(event) {
    if (!event.target.classList.contains('day-event')) return;

    const targetEventId = event.target.getAttribute('data-id');
    const allEventsOnPage = weekBar.querySelectorAll('.day-event');
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

    switcher();
}

function switcher() {
    popupForm.removeEventListener('submit', saveNewEvent);
    popupForm.addEventListener('submit', editObjEvent);
}

function editObjEvent(event) {

    // console.log('Hello from Edit Obj Event');

    const formData = [...new FormData(popupForm)];
    const clickEventId = new FormData(popupForm).get('id');
    // console.log(clickEventId);

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

    // console.log(events);

    event.preventDefault();
    // displayCurrentWeek(currentWeek);
    renderEvents();
    closePopup();
    popupForm.addEventListener('submit', saveNewEvent);
    // popupForm.removeEventListener('submit', editObjEvent);
}


// function edit(obj) {

// }


// popupForm.removeEventListener('submit', saveNewEvent);
// popupForm.addEventListener('submit', editObjEvent);


// function editExistedEvent(event) {

//     popupForm.removeEventListener('submit', saveNewEvent);
//     

//     let formData = [...new FormData(popupForm)];
//     let clickedEventDateFrom = new FormData(popupForm).get('dateFrom');
//     let clickedEventTimeFrom = new FormData(popupForm).get('timeFrom');
//     let clickedEventTitle = new FormData(popupForm).get('title');

//    console.log(event.target);

//     events.map(event => {

//         const eventDateFrom = event.dateFrom.toISOString().split('T')[0];
//         const eventTimeFrom = event.dateFrom.toLocaleTimeString();
//         const eventTitle = event.title;
//         console.log(eventTimeFrom);

//         if (eventDateFrom == clickedEventDateFrom &&
//             eventTimeFrom == clickedEventTimeFrom &&
//             eventTitle == clickedEventTitle
//             ) {
            
//             // console.log(event.dateFrom.toLocaleTimeString());
//             console.log(event.title);
//         };

//         return event;
//     });
//     console.log(events);
// }

// popupForm.addEventListener('submit', saveNewEvent);
// popupForm.addEventListener('submit', editExistedEvent);
