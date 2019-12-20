const calendar = document.querySelector('.calendar');

export const renderCalendar = () => {
    const week = document.createElement('div');
    week.classList.add('week');
    calendar.append(week);

    for (let i = 1; i <= 7; i++) {
        const day = document.createElement('div');
        day.classList.add('day');
        week.append(day);

        for (let j = 1; j <= 24; j++) {
            const hour = document.createElement('div');
            hour.classList.add('hour');
            day.append(hour);
        }
    }
}

renderCalendar();