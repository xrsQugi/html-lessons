// console.log(Math.round(Math.random() * 10));
// console.log(Math.random() * (10 - 1) + 1);
// console.log(Math.round(Math.random() * (max - min) + min));

let min = Number.parseInt(prompt("Выбери от какого числа будет работать генератор чисел"));
let max = Number.parseInt(prompt("Выбери до какого числа будет работать генератор чисел"));
alert(Math.round(Math.random() * (max - min) + min));


