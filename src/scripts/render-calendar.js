const calendar = document.querySelector('.calendar');

export const renderCalendar = () => {
    const week = document.createElement('div');
    week.classList.add('calendar__week-bar');
    calendar.append(week);

    for (let i = 1; i <= 7; i++) {
        const day = document.createElement('div');
        day.classList.add('calendar__day-bar');
        week.append(day);

        for (let j = 1; j <= 24; j++) {
            const hour = document.createElement('div');
            hour.classList.add('calendar__hour-bar');
            day.append(hour);
        }
    }
}
renderCalendar();
 


// function renderSidebar() {
//     const sidebar = document.querySelector('.sidebar');
//     const dayHours = [];
//     for (let hour = 0; hour < 24; hour++) {
//       const sidebarHour = document.createElement('div');
//       sidebarHour.classList.add('sidebar__hour');
//       const sidebarHourText = document.createElement('span');
//       sidebarHourText.classList.add('sidebar__hour-text');
//       sidebarHourText.textContent = `${(hour < 10) ? '0' + hour : hour}:00`;
//       sidebarHour.append(sidebarHourText);
//       dayHours.push(sidebarHour);
//     }
//     sidebar.append(...dayHours);
// }