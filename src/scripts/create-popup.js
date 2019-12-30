import {currentWeek} from './display-current-week.js';
import {events} from './storage.js';

const popup = document.querySelector('.popup-modal');


const createButton = document.querySelector('.header__button_create');


const calendarDays = document.querySelector('.calendar');
const weekBar = document.querySelector('.calendar__week-bar');
const dayCell = document.querySelector('.calendar__hour-bar');

const buttonClose = document.querySelector('.popup__header_close-btn');
const deleteButton = document.querySelector('.popup__action_delete');



const formFieldPopUp = {
    title: document.querySelector('.popup__header_title-input'),
    dateFrom: document.querySelector('.popup__info_date-from'),
    dateTo: document.querySelector('.popup__info_date-to'),
    timeFrom: document.querySelector('.popup__info_duration-from'),
    timeTo: document.querySelector('.popup__info_duration-to'),
    description: document.querySelector('.popup__description_text'),
    color: document.querySelector('.popup__color-scheme_chooser'),
};





export function createPopup (event) {


    formFieldPopUp.dateFrom.value = currentWeek[event.target.dataset.day].toLocaleDateString().split('.').reverse().join('-');
    formFieldPopUp.dateTo.value = currentWeek[event.target.dataset.day].toLocaleDateString().split('.').reverse().join('-');
    formFieldPopUp.timeFrom.value = `0${event.target.dataset.hour}:00`;
    console.log(formFieldPopUp.timeFrom.value);
    formFieldPopUp.timeTo.value = `0${+event.target.dataset.hour + 1}:00`;
    if (`${event.target.dataset.hour}` > 9 ){
        formFieldPopUp.timeFrom.value = `${event.target.dataset.hour}:00`;
        formFieldPopUp.timeTo.value = `${+event.target.dataset.hour +1}:00`;
    } 

    // console.log(formFieldPopUp.dateFrom);
    // console.log(formFieldPopUp.timeFrom);
};
// console.log(createPopup(event));

export function showPopup(event) {
   popup.style.display = 'block';
   createPopup(event);

}




weekBar.addEventListener('click', showPopup); 
createButton.addEventListener('click', showPopup); 



export function closePopup(event) {
const currentPopupTitle = document.querySelector('.popup__header_title-input');
currentPopupTitle.value= '';

const currentPopupDescription = document.querySelector('.popup__description_text');
currentPopupDescription.value= '';

    popup.style.display = 'none';

}
buttonClose.addEventListener('click', closePopup); 




















