import { setItemToStorage, getItemFromStorage, getEventsFromLocal, deleteEvent } from './storage.js';
//import { deleteEvent } from './delete-event.js';
import { renderEvents, mapEvents  } from './render-events.js';

const baseUrl = 'https://crudcrud.com/api/af47d437cfe745409c7c4ca9d84a2dc9';



function getEventList() {
    return fetch(baseUrl)
        .then((response) => response.json())
        .then((events) => mapEvents(events));
};

function addNewEvent(event) {
    return fetch(baseUrl)
        .then(baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
              },
              body: JSON.stringify(event),
            })
            .then((response) => response.json())
            .then((responsiveEvent) => {
                const eventsList = getEventsFromLocal();
                eventsList.push({
                    ...event,
                    id: responsiveEvent._id,
                    createDate: new Date(),
                });
                setItemToStorage('eventsList', eventsList);
                renderEvents();
        })

            .catch ((err) => {
                console.log(err);
                const eventsList = getEventsFromLocal();
                eventsList.push({
                    ...event,
                    id: Date.now().toString(),
                    createDate: new Date(),
                });
                setItemToStorage('eventsList', eventsList);
                renderEvents();
            });
}; 

function updateEvent (eventId, updatedData) {
    deleteEvent(eventId);
    const eventsList = getEventsFromLocal();
    eventsList.push({
        ...updatedData,
        createDate: new Date(),
    });
    setItemToStorage('eventsList', eventsList);

    return fetch ( `${baseUrl}/${eventId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
          },
          body: JSON.stringify(updatedData),
    })
    .catch((err) => console.log(err));

};

function eventDelete(idEvent) {
    deleteEvent(idEvent);

    return fetch ( `${baseUrl}/${eventId}`, {
        method: 'DELETE',
    })
    .catch((err) => console.log(err));
}

export { eventDelete, updateEvent, addNewEvent, getEventList};