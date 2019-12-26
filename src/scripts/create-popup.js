
const popup = document.querySelector('.popup');
const createButton = document.querySelector('.header__button_create');
const createEventOnPopup = document.querySelector('.popup__action_create');
const calendarDays = document.querySelector('.calendar');
const buttonClose = document.querySelector('.popup__header_close-btn');
const deleteButton = document.querySelector('.popup__action_delete');



const formFieldPopUp = {
    name: document.querySelector('.popup__title-input'),
    dateFrom: document.querySelector('.popup__info_date-from'),
    dateTo: document.querySelector('.popup__info_date-to'),
    timeFrom: document.querySelector('.popup__info_duration-from'),
    timeTo: document.querySelector('.popup__info_duration-to'),
    description: document.querySelector('.popup__description'),
    color: document.querySelector('.popup__color-scheme_chooser'),
};

function showPopupByClick() {
    calendarDays.addEventListener('click', ); 
    сreateButton.addEventListener('click', );//show popup funk
    buttonClose.addEventListener('click', );
 
};








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