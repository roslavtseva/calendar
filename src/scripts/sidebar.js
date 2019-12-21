
function renderSidebar () {
  const sidebar = document.querySelector('.sidebar');
  const dayHours = [];
  
  for (let hour = 0; hour < 24; hour++) {
    
    const sidebarHour = document.createElement('div');
    sidebarHour.classList.add('sidebar__hour');
    
    const sidebarHourText = document.createElement('span');
    sidebarHourText.classList.add('sidebar__hour-text');

    if (hour < 10) {
      sidebarHourText.textContent = '0' + hour + ' :00';
    } else {
      sidebarHourText.textContent = hour + ' :00';
    }
       
    sidebar.append(sidebarHour);
    sidebarHour.append(sidebarHourText);
  }
  // sidebar.append(...dayHours);
};

renderSidebar();

export { renderSidebar };