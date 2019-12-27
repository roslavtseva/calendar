import {currentWeek} from './display-current-week.js';
import { renderSidebar } from './sidebar.js';

const popup = document.querySelector('.popup-modal');


const createButton = document.querySelector('.header__button_create');


const calendarDays = document.querySelector('.calendar');
const weekBar = document.querySelector('.calendar__week-bar');
const dayCell = document.querySelector('.calendar__hour-bar');

const buttonClose = document.querySelector('.popup__header_close-btn');
const deleteButton = document.querySelector('.popup__action_delete');



const formFieldPopUp = {
    name: document.querySelector('.popup__header_title-input'),
    dateFrom: document.querySelector('.popup__info_date-from'),
    dateTo: document.querySelector('.popup__info_date-to'),
    timeFrom: document.querySelector('.popup__info_duration-from'),
    timeTo: document.querySelector('.popup__info_duration-to'),
    description: document.querySelector('.popup__description_text'),
    color: document.querySelector('.popup__color-scheme_chooser'),
};






export function createPopup (event) {
    formFieldPopUp.dateFrom = currentWeek[event.target.dataset.day].getDay().toString();
    formFieldPopUp.timeFrom = currentWeek[event.target.dataset.hour].getHours.     
    formFieldPopUp.timeFrom = 
    // formFieldPopUp.timeTo = event.target.dataset.hour + 1;

    console.log(formFieldPopUp.dateFrom);
    console.log(formFieldPopUp.timeFrom);

    showPopup();
};
// console.log(createPopup(event));







export function showPopup(event) {
   popup.style.display = 'block';


}
weekBar.addEventListener('click', createPopup); 
createButton.addEventListener('click', createPopup); 



export function closePopup(event) {
const currentPopupTitle = document.querySelector('.popup__header_title-input');
currentPopupTitle.value= '';

const currentPopupDescription = document.querySelector('.popup__description_text');
currentPopupDescription.value= '';

    popup.style.display = 'none';

}
buttonClose.addEventListener('click', closePopup); 




















// export function showPopupByClick(event) {
//     //createButton.onclick = showPopup(event);
    
//     // createButton.addEventListener('click', showPopup );//show popup funk
//     // buttonClose.addEventListener('click', );
    
// };










// function showSavedEvent(event) {
//     showPopupByClick();
//     eventId = event.target.closest(/*dayEvent*/).dataset.eventId;
//     popup.dataset.idEvent = eventId;
//     const selectedEvent = getEventById(+eventId);
    
//     formFieldPopUp.name.value = selectedEvent.name;
//     formFieldPopUp.dateFrom.value = dateToString(selectedEvent.dateFrom);
//     formFieldPopUp.dateTo.value = dateToString(selectedEvent.dateTo);
//     formFieldPopUp.timeFrom.value = timeToString(selectedEvent.timeFrom);
//     formFieldPopUp.timeTo.value = timeToString(selectedEvent.timeTo);
//     formFieldPopUp.description.value = selectedEvent.description;
//     formFieldPopUp.color.value = selectedEvent.color;
// };

// function dateToString(date) {
//     let year = date.getFullYear();
//     let month = date.getMonth() + 1;
//     month = month < 10 ? '0' + month : month;
//     let day = date.getDate();
//     day = day < 10 ? '0' + day : day;

//     return `${year}-${month}-${day}`;
// };

// function timeToString(date) {
//     let hour = date.getHours();
//     hour = hour < 10 ? '0' + hour : hour;
//     let minutes = date.getMinutes();
//     minutes = minutes < 10 ? '0' + minutes : minutes;

//     return `${hour}:${minutes}`;
// }