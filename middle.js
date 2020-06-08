let num = 266219;
let string = num + '';
let arr = string.split('');
let sum = arr.reduce(function(acc, item){
    return acc * item
}, 1)
sum = sum **3;

String(sum)
let str = sum + '';

console.log(str.substr(0, 2));
