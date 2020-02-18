//import { setItemToStorage, getItemFromStorage, getEventsFromLocal, deleteEvent } from './storage.js';
//import { deleteEvent } from './delete-event.js';
import { mapEvents  } from './render-events.js';

const baseUrl = 'https://crudcrud.com/api/3574aebb50e34223a90bb45569ba31e2/events';



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

    //const findById
//приймає id  і поверт обєкт
//заюзати в кріейт попап

export { eventDelete, updateEvent, addNewEvent, getEventList};