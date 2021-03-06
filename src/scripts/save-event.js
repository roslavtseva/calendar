
import { popupForm, closePopup } from './create-popup.js';
import { eventDelete, updateEvent, addNewEvent, getEventList } from './gateways.js';
import { renderE } from './render-events.js';


export { editSaveHandler };

const editSaveHandler = event => { //ств можливість редагувати івент

    event.preventDefault();


    const formData = [...new FormData(popupForm)];
    console.log(formData);
    const newEvent = formData.reduce((acc, item) => {
        acc[item[0]] = item[1];
        return acc;
    }, {});

    const timeFrom = (newEvent.timeFrom).split(':');
    newEvent.dateFrom = new Date(new Date(newEvent.dateFrom).setHours(+timeFrom[0], +timeFrom[1])).toISOString();
    const timeTo = (newEvent.timeTo).split(':');
    newEvent.dateTo = new Date(new Date(newEvent.dateTo).setHours(+timeTo[0], +timeTo[1])).toISOString();
    if (newEvent.id === "0") {

        if (newEvent.title == '') { 
            newEvent.title = 'No Title';
        }
        const { id, ...rest } = newEvent;
        addNewEvent(rest)
        // .then(() => {
        // })
        .catch(error =>  console.log('save error'));
        renderE();
        
    //тут вже працює рендер зміненого івенту але лише після обновлення сторінки    
    } else {
        const { id, ...rest } = newEvent;
        console.log(id);
       updateEvent(id, rest);
    //    .then(() => {
    //     renderE();
    // })
    //    .catch (error => console.log('update error'))
    renderE();
    }


    closePopup();


}

popupForm.addEventListener('submit', editSaveHandler);

