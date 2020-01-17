import { currentWeek } from './render-current-week.js';
// import { setItemToStorage, getItemFromStorage } from './storage.js';

export {
    popup,
    popupForm,
    saveButton,
    deleteButton,
    closePopup,
    createPopup,
    createPopupButton,
    formFieldPopUp
};

const popup = document.querySelector('.popup-modal');
const popupForm = document.querySelector('.popup');


const createButton = document.querySelector('.header__button_create');


const buttonClose = document.querySelector('.popup__header_close-btn');
const saveButton = document.querySelector('.popup__action_save');
const deleteButton = document.querySelector('.popup__action_delete');



const formFieldPopUp = {
    title: document.querySelector('.popup__header_title-input'),
    dateFrom: document.querySelector('.popup__info_date-from'),
    dateTo: document.querySelector('.popup__info_date-to'),
    timeFrom: document.querySelector('.popup__info_duration-from'),
    timeTo: document.querySelector('.popup__info_duration-to'),
    description: document.querySelector('.popup__description_text'),
    color: document.querySelector('.popup__color-scheme_chooser'),
    id: document.querySelector('.popup__id'),
};



function createPopup(event) {
    const targetEventId = event.target.getAttribute('data-id');

    if(!targetEventId) { 
        closePopup();
        formFieldPopUp.dateFrom.value = currentWeek[event.target.dataset.day].toLocaleDateString().split('.').reverse().join('-');
        formFieldPopUp.dateTo.value = currentWeek[event.target.dataset.day].toLocaleDateString().split('.').reverse().join('-');
        if (event.target.dataset.hour == 23) {
            formFieldPopUp.timeFrom.value = `${event.target.dataset.hour}:00`;
            formFieldPopUp.timeTo.value = `${+event.target.dataset.hour}:59`;
        } else if (event.target.dataset.hour == 9) {
            formFieldPopUp.timeFrom.value = `0${event.target.dataset.hour}:00`;
            formFieldPopUp.timeTo.value = `${+event.target.dataset.hour + 1}:00`;
        } else if (event.target.dataset.hour > 9 ){
            formFieldPopUp.timeFrom.value = `${event.target.dataset.hour}:00`;
            formFieldPopUp.timeTo.value = `${+event.target.dataset.hour + 1}:00`;
        }  else {
            formFieldPopUp.timeFrom.value = `0${event.target.dataset.hour}:00`;
            formFieldPopUp.timeTo.value = `0${+event.target.dataset.hour + 1}:00`;
        }
        popup.style.display = 'block';
        deleteButton.style.visibility = 'hidden';
    }

    const clickedObjEvent = events.find(event => {        
        return targetEventId == event.id;
    });

    formFieldPopUp.title.value = clickedObjEvent.title;
    formFieldPopUp.dateFrom.value = clickedObjEvent.dateFrom.toLocaleDateString().split('.').reverse().join('-');
    formFieldPopUp.dateTo.value = clickedObjEvent.dateTo.toLocaleDateString().split('.').reverse().join('-');

    formFieldPopUp.timeFrom.value = clickedObjEvent.dateFrom.toLocaleTimeString();
    formFieldPopUp.timeTo.value = clickedObjEvent.dateTo.toLocaleTimeString();

    formFieldPopUp.description.value = clickedObjEvent.description;
    formFieldPopUp.id.value = clickedObjEvent.id;

    deleteButton.style.visibility = 'visible';
    popup.style.display = 'block';

    deleteButton.dataset.id = event.target.dataset.id;
};


function createPopupButton() {

    const date = new Date();
    formFieldPopUp.dateFrom.value = date.toLocaleDateString().split('.').reverse().join('-');
    formFieldPopUp.dateTo.value = date.toLocaleDateString().split('.').reverse().join('-');
    if (date.getHours() == 23) {
        formFieldPopUp.timeFrom.value = `${date.getHours()}:00`;
        formFieldPopUp.timeTo.value = `${date.getHours()}:59`;
    } else if (date.getHours() == 9) {
        formFieldPopUp.timeFrom.value = `0${date.getHours()}:00`;
        formFieldPopUp.timeTo.value = `${date.getHours() + 1}:00`;
    } else if (date.getHours() > 9 ){
        formFieldPopUp.timeFrom.value = `${date.getHours()}:00`;
        formFieldPopUp.timeTo.value = `${date.getHours() + 1}:00`;
    }  else {
        formFieldPopUp.timeFrom.value = `0${date.getHours()}:00`;
        formFieldPopUp.timeTo.value = `0${date.getHours() + 1}:00`;
    }
    popup.style.display = 'block';
    deleteButton.style.visibility = 'hidden';
};
createButton.addEventListener('click', createPopupButton); 


function closePopup() {
    const currentPopupTitle = document.querySelector('.popup__header_title-input');
    currentPopupTitle.value= '';

    const currentPopupDescription = document.querySelector('.popup__description_text');
    currentPopupDescription.value= '';

    popup.style.display = 'none';

    // const weekBar = document.querySelector('.calendar__week-bar');
    // weekBar.addEventListener('click', createPopup);
}
buttonClose.addEventListener('click', closePopup); 