'use strict';
const lang = confirm('Если ваш язык руский нажмите "OK" если English, нажмите "Отмена"') ? "ru" : "en",
  weekDay = new Map([
      ["ru", ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']],
      ["en", ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']]
  ]);

if (lang === "ru") {
      console.log(weekDay.get("ru"));
} else if (lang === "en") {
      console.log(weekDay.get('en'));
} else {
      console.log('Вашего языка нет в базе данных');
}

switch (lang) {
  case "ru":
     console.log(weekDay.get("ru"));
       break;
  case "en":
     console.log(weekDay.get("en"));
       break;
  default:
     console.log('Вашего языка нет в базе данн');  
}

console.log(weekDay.get(lang));


const names = prompt("Введите имя", "Артём");
console.log(names === "Артём" ? "Директор" : 
            names === "Максим" ? "Преподаватель" : "Студент");