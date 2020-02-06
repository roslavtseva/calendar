import { renderEvents } from './render-events.js'

export { setItemToStorage, getItemFromStorage, getEventsFromLocal, deleteEvent };

const setItemToStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}
const getItemFromStorage = (key) => JSON.parse(localStorage.getItem(key));

function getEventsFromLocal() {
    return getItemFromStorage('eventsList') || [];
  }
  

function onStorageChange(event) {
    if (event.key === 'events') {
        renderEvents();
    }
}
window.addEventListener('storage', onStorageChange);

function deleteEvent(eventId) {
    const eventsList = getEventsFromLocal();
    let eventIndex;

    eventsList.find(({ id }, index) => {
            if (id === eventId) {
                eventIndex = index;
                return true;
            }
    });
    eventsList.splice(eventIndex, 1);
    setItemToStorage('eventsList', eventsList);

};