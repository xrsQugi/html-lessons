// Task 1
let k1 = Number.parseInt("5px");
let k2 = Number.parseInt("12djd334");
let k3 = Number.parseInt("12.45asdwe12");
let k4 = Number.parseInt("qwqweeewq");

// Task 2
k1 = Number.parseFloat("5px");
k2 = Number.parseFloat("12djd334");
k3 = Number.parseFloat("12.45asdwe12");
k4 = Number.parseFloat("qwqweeewq");

// Task 3
console.log("Task 3 =>", Math.max(2, 34, 99, 3, 22, 36, 733, 18));
console.log("Task 3 =>", Math.min(2, 34, 99, 3, 22, 36, 733, 18));

// Task 4
const random = Math.random() * (19 - 3 + 1) + 3;
console.log("Task 4 =>", random);

// Task 5
const result = 5 + 5 + "5";
console.log("Task 5 =>", result);
console.log("Task 5 =>", typeof result);

// Task 6
const email = "02.04.5.art@gmail.com";
console.log("Task 6 =>", email.includes("@"));
console.log("Task 6 =>", email.length);

// Task 7
const belonging = "My";
const givenName = "name";
const toBe = "is";
fullName = belonging + " " + givenName + " " + toBe + " " + "Victor";
console.log("Task 7 =>", fullName);

// Task 8
const userName = prompt("Як вас звати?");
const checkName = Number.isNaN(Number.parseInt(userName));;
if(checkName === false){
    alert("Ви ввели не коректне ім'я. Спробуйте ще раз!");
} else{
    const payment = prompt("Скільки грн ви витратили під час шопінгу?");
    const checkNumber = Number.isNaN(Number.parseInt(payment));

    if(checkNumber === true){
        alert("Ви ввели не число. Спробуйте ще раз!");
    } else{
     alert(`Дякуємо, ${userName}! До сплати ${payment} гривень`);
    }
}
