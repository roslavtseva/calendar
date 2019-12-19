const sidebarHTML = document.querySelector(".sidebar");
const dayHours = 24;

const renderSidebar = hourItems => {

  
  const itemsHour = hourItems
  .map((el) => {
    for (hour = 0; hour < dayHours; hour++) {

      const sidebarHour = document.createElement("div");
      sidebarHour.classList.add("sidebar__hour");

      const sidebarHourText = document.createElement("span");
      sidebarHourText.classList.add("sidebar__hour-text");

      sidebarHourText.value = hour;

      sidebarHour.append(sidebarHourText);
      return sidebarHour;
    }
  });

  sidebarHTML.append(...itemsHour);
};

console.log(renderSidebar());