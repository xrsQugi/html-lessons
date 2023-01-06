// // Task 1
// const min = 10;

if (min >= 0 && min < 15){
    console.log("перша чверть години");
} else if (min >= 15 && min < 30){
    console.log("друга чверть години");
} else if (min >= 30 && min < 45){
    console.log("третя чверть години");
} else if (min >= 45 && min < 60){
    console.log("четверта чверть години");
}

// // Task 2

const language = prompt("Яка «офіційна» назва JavaScript?");
if (language === "ECMAScript"){
    alert("Вірно!");
} else{
    alert("«Не знаєте? ECMAScript!»");
}

// Task 3
const login = prompt("Введіть ваш логін");
if (login === "Адмін"){
    let password = prompt("Введіть пароль від вашого логіну");
    if(password === "Я адмін"){
        console.log("Доброго вечора, ми з України!");
    } else{
        consoloe.log( "Невірний пароль");
    }
} else if (login === "" || login === null){
    console.log("Скасовано");
} else {
    console.log("Я вас не знаю");
}