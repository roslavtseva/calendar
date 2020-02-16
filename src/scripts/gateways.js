//import { setItemToStorage, getItemFromStorage, getEventsFromLocal, deleteEvent } from './storage.js';
//import { deleteEvent } from './delete-event.js';
import { mapEvents  } from './render-events.js';

const baseUrl = 'https://crudcrud.com/api/2047ac330bc24918ba2528637e09c602/events';



const getEventList = () => fetch(baseUrl)
        .then((response) => response.json())
        .then((eventList) => 
            eventList.map(({_id, ...event}) => ({...event, id:_id}))
    );



const addNewEvent = (event) => fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
              },
              body: JSON.stringify(event),
            })
            .then((response) => { 
                if(response.ok){
                   return response.json();  
                } 
                throw new Error('failed to save event')
            });
    
           


const updateEvent = (eventId, updatedData) => fetch( `${baseUrl}/${eventId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
          },
          body: JSON.stringify(updatedData),
    })
    .then((response) => { 
        if(response.ok){
           return response.json();  
        } 
        throw new Error('failed to update event')
    });



const eventDelete = (idEvent) => fetch ( `${baseUrl}/${eventId}`, {
        method: 'DELETE',
    })
    .catch((err) => console.log(err));


export { eventDelete, updateEvent, addNewEvent, getEventList};