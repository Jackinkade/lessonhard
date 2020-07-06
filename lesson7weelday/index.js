
const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
document.write(week);
for (let i = 0; i < week.length; i++) {

    const dayOff = document.createElement('div');

    dayOff.innerHTML = week[i];
    const date = new Date();
    const day = date.getDay();

    if (week[i] === week[day]) {
        document.write(week[i - 1].bold().fontsize(6));

    }
    if (week[i] === 'Суббота' || week[i] === 'Воскресенье') {
        document.write(week[i].italics().fontsize(6));
    }

    document.body.append(dayOff);
}
