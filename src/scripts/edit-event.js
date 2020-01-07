import { formFieldPopUp, popup, popupForm } from './create-popup.js';
import { events } from './storage.js';
import { saveNewEvent } from './save-event.js';

export {
    editEventHandler,
}

const weekBar = document.querySelector('.calendar__week-bar');
weekBar.addEventListener('click', editEventHandler, true);


function editEventHandler(event) {
    if (!event.target.classList.contains('day-event')) return;
    const child = event.target;
    const targetBarElem = child.parentNode;

    const clickedObjEvent = events.find(event => 
        new Date(targetBarElem.dataset.date).toDateString() == event.dateFrom.toDateString() &&
        targetBarElem.dataset.hour == event.dateFrom.getHours()
    );

    event.stopPropagation();
    renderCorrectPopup(clickedObjEvent);
    return q.push(clickedObjEvent);
}


function renderCorrectPopup(obj) {
    formFieldPopUp.title.value = obj.title;
    formFieldPopUp.dateFrom.value = obj.dateFrom.toLocaleDateString().split('.').reverse().join('-');
    formFieldPopUp.dateTo.value = obj.dateTo.toLocaleDateString().split('.').reverse().join('-');

    formFieldPopUp.timeFrom.value = obj.dateFrom.toLocaleTimeString();
    formFieldPopUp.timeTo.value = obj.dateTo.toLocaleTimeString();

    formFieldPopUp.description.value = obj.description;

    popup.style.display = 'block';
}



// function editExistedEvent(obj) {
//     // console.log(obj);
//     popupForm.removeEventListener('submit', saveNewEvent);
//     event.preventDefault();

//     events.map(event => {
//         console.log(event.id);
//         // if (event.id == clickedEventElem.id) {
//         //     console.log('lol');
//         // } 
//     });
// }
// popupForm.addEventListener('submit', editExistedEvent);
