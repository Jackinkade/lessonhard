'use strict';
const events = prompt("Введите что-то", "");
const newFunc = function (userEvent) {

  if(!!(+userEvent) ){
      console.log("В качестве аргумента передана не строка");
      return;

     } else if(userEvent.length > 30){
     console.log("...");

     }else{
       console.log("Без ошибок ", userEvent.trim());
 }
};
newFunc(events);
  



