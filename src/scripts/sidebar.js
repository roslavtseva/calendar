
function renderSidebar () {
  const sidebar = document.querySelector('.sidebar');
  const dayHours = [];
  
  for (let hour = 0; hour < 24; hour++) {
    
    const sidebarHour = document.createElement('div');
    sidebarHour.classList.add('sidebar__hour');
    
    const sidebarHourText = document.createElement('span');
    sidebarHourText.classList.add('sidebar__hour-text');
    
    sidebarHourText.textContent = `${(hour < 10) ? '0' + hour : hour}:00`;
    
    sidebarHour.append(sidebarHourText);
    dayHours.push(sidebarHour);
  }
  
  sidebar.append(...dayHours);
};


export { renderSidebar };

renderSidebar();

// const sidebarHTML = document.querySelector(".sidebar");
// const dayHours = 24;

// const renderSidebar = hourItems => {

  
//   const itemsHour = hourItems
//   .map((el) => {
//     for (hour = 0; hour < dayHours; hour++) {

//       const sidebarHour = document.createElement("div");
//       sidebarHour.classList.add("sidebar__hour");

//       const sidebarHourText = document.createElement("span");
//       sidebarHourText.classList.add("sidebar__hour-text");

//       sidebarHourText.value = hour;

//       sidebarHour.append(sidebarHourText);
//       return sidebarHour;
//     }
//   });

//   sidebarHTML.append(...itemsHour);
// };

// console.log(renderSidebar());