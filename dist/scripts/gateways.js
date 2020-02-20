//import { setItemToStorage, getItemFromStorage, getEventsFromLocal, deleteEvent } from './storage.js';
//import { deleteEvent } from './delete-event.js';
import { mapEvents } from './render-events.js';
const baseUrl = 'https://crudcrud.com/api/485f3d9fadc640f5a6cc85bbe3104d34/events';

const getEventList = () => fetch(baseUrl).then(response => response.json()).then(eventList => eventList.map(({
  _id,
  ...event
}) => ({ ...event,
  id: _id
})));

const addNewEvent = event => fetch(baseUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  body: JSON.stringify(event)
}).then(response => {
  if (response.ok) {
    return response.json();
  }

  throw new Error('failed to save event');
});

const updateEvent = (eventId, updatedData) => fetch(`${baseUrl}/${eventId}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  body: JSON.stringify(updatedData)
}).then(response => {
  if (response.ok) {
    return response.json();
  }

  throw new Error('failed to update event');
}).then(({
  _id,
  ...event
}) => ({ ...event,
  id: _id
}));

const eventDelete = idEvent => fetch(`${baseUrl}/${eventId}`, {
  method: 'DELETE'
}).catch(err => console.log(err)); // consy findById = () => {
// };
//const findById
//приймає id  і поверт обєкт
//заюзати в кріейт попап


const getOneEvent = eventId => fetch(`${baseUrl}/${eventId}`).then(response => {
  if (response.ok) {
    return response.json();
  }

  throw new Error('failed to edit event');
}).then(({
  _id,
  ...event
}) => ({ ...event,
  id: _id
}));

export { eventDelete, updateEvent, addNewEvent, getEventList, getOneEvent };