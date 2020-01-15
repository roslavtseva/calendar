import { renderEvents } from './render-events.js'

export const events = [];

export { setItemToStorage, getItemFromStorage }

const setItemToStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}
const getItemFromStorage = (key) => JSON.parse(localStorage.getItem(key));


document.addEventListener('DOMContentLoaded', () => {
    // render
});

function onStorageChange(event) {
    if (event.key === 'events') {
        renderEvents();
    }
}
window.addEventListener('storage', onStorageChange);