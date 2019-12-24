
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
    navigateCreateButton.addEventListener('click', );//show popup funk
    buttonClose.addEventListener('click', );
 
};

function showSavedEvent(event) {
    showPopupByClick();
    
    formFieldPopUp.name.value = selectedEvent.name;
    formFieldPopUp.dateStart.value = dateToString(selectedEvent.dateFrom);
    formFieldPopUp.dateEnd.value = dateToString(selectedEvent.dateTo);
    formFieldPopUp.timeStart.value = timeToString(selectedEvent.timeFrom);
    formFieldPopUp.timeEnd.value = timeToString(selectedEvent.timeTo);
    formFieldPopUp.description.value = selectedEvent.description;
    formFieldPopUp.color.value = selectedEvent.color;
};