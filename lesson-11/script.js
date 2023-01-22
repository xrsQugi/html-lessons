//? Завдання 1
//  Створіть масив genres з елементами Jazz і Blues? Додайте "Rock&Roll" в кінець.
//  Виведіть у консоль перший елемент масиву.
//  Виведіть у консоль останній елемент масиву. Код має працювати для масиву довільної довжини.
//  Видаліть перший елемент та виведіть його в консоль.
//  Вставте «Country» та «Reggy» на початок масиву.

//! Code:
// const genres = ['Jazz', 'Blues'];
// genres.push("Rock&Roll");
// console.log(genres[0]);
// console.log(genres[genres.length - 1]);
// console.log(genres.shift(1));
// genres.unshift("Country", "Reggy");
// console.log(genres);

//? Завдання 2 (Присвоєння за посиланням і за значенням)
//  Створіть змінну a = 10.
//  Створіть та привласніть змінній b -> змінну a
//  Виведіть до консолі обидві ці змінні
//  Змініть значення змінної a і ще раз виведіть у консоль

//! Code:
// let a = 10;
// let b = a;
// console.log(a);
// console.log(b);
// a = 9;;
// console.log(a);
// console.log(b);

//? Завдання 3 (Присвоєння за посиланням і за значенням)
//  Створіть масив arr1 = [1, 2, 3].
//  Створіть та привласніть масиву arr2 -> масив arr1
//  Виведіть до консолі обидва цих масива
//  Додайте елемент в масив arr1 і ще раз виведете обидва масиви в консоль

//! Code:
// const arr1 = [1, 2, 3];
// const arr2 = arr1;
// console.log(arr1);
// console.log(arr2);
// arr1.push(4);
// console.log(arr1);
// console.log(arr2);

//? Завдання 4 (Перебор масива циклами for та for...of)
//  Напиши скрипт для перебору масиву fruits циклом for.
//  Для кожного елемента масиву виведіть у консоль рядок у форматі номер_елемента: значення_елемента.
//  Нумерація елементів має починатися з першого.

//! Code:
// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];
// for(const fruit of fruits){
//     console.log(`${1 + fruits.indexOf(fruit)}: ${fruit}`);
// }

//? Завдання 5
//  Напиши скрипт пошуку найменшого числа у масиві.
//  Код має працювати для будь-якого масиву чисел.
//  Використовуйте цикл для вирішення задачі.

//*  Через цикл for
//! Code:
// const numbers = [2, 17, 94, 1, -20, -1, -100, 23, -40, 37, -50];
// let min = numbers[0];
// let max = min;
// for (let i = 0; i < numbers.length; i += 1){
//     if (numbers[i] > max) {
//         max = numbers[i]; //* например сначала макс было 2, потом зашло число 17 > 2 => max теперь равен 17, но min так и равен 2
//     } else if(numbers[i] < min) {
//         min = numbers[i];
//     }
// }
//console.log("Min:", min);
//console.log("Max:", max);


//*  Через цикл for...of
//! Code:
// const numbers = [2, 17, 94, 1, -20, -1, -100, 23, -40, 37, -50];
// let min = numbers[0];
// let max = min;
// for (number of numbers) {
//     if (number > max) {
//         max = number;
//     } else if (number < min){
//         min = number;
//     }
// }
// console.log("Min:", min);
// console.log("Max:", max);

//? Завдання 6
// У нас є масив із зарплатами працівників, потрібно порахувати загальну суму зарплат

//! Code:
// const salaries = [200, 450, 600, 150, 300];
// let total = 0;
// for ( let i = 0; i < salaries.length; i += 1) {
//     total += parseInt(salaries[i]);
// }
// console.log(total);

//? Завдання 7
//  У нас є кілька масивів із зарплатами працівників із різних відділів, потрібно порахувати загальну суму зарплат

//! Code:
// const managerSalaries = [100, 150, 250, 400, 500];
// const developersSalaries = [800, 1500, 4000];
// let total = 0;
// const allSalaries = managerSalaries.concat(developersSalaries);
// for ( let i = 0; i < allSalaries.length; i += 1) {
//     total += parseInt(allSalaries[i]);
// }
// console.log(total);

//* Базові методи: split та join, indexOf та includes, push, slice та splice, concat
 
//? Завдання 8
//  Напиши скрипт для обчислення площі прямокутника зі сторонами,
//  значення яких зберігаються в змінній values у вигляді рядка.
//  Значення гарантовано розділені пробілом.

// //! Code:
// let values = ("8 4");
// const valuesArr = values.split('');
// valuesArr.splice(1, 1);
// let acreage = 1;
// for (let i = 0; i < valuesArr.length; i += 1) {
//         acreage *= parseInt(valuesArr[i]);
//     }
// console.log('Площа:', acreage);

//?  Завдання 9
//  Напиши скрипт, який виводить в консоль ім'я та телефонний номер користувача.
//  У змінних names і phones зберігаються рядки імен та телефонних номерів, розділені комами.
//  Порядковий номер імен та телефонів у рядках вказують на відповідність.
//  Кількість імен та телефонів гарантовано однакова.

// //! Code:
// const names = ['Артем', 'Андрій', 'Іван', 'Софія', 'Єлізавета', 'Ніка'];
// const phones = ['098 515 58 71', '068 111 43 12', '096 768 65 76', '088 657 55 01', '098 232 94 90', '098 879 54 77',];

// for (let i = 0; i < names.length; i += 1) {
//     console.log(`Імя: ${names[i]}, телефон: ${phones[i]}`);
// }

//? Завдання 10
//  Напиши скрипт, який «розгортає» рядок (зворотний порядок букв)
//  та виводить її в консоль.

// //! Code:
const str = 'гром';
const reverse = str.split('').reverse().join(''); //робить массив по літерам, перевизначає порядок, і робить знову рядок;
console.log(reverse);

//? Завдання 11
//  У нас є масив співробітників, Співробітник Shaw звільнився, видаліть його з масиву.

// //! Code:
const workers = ['James', 'Henry', 'Lucas', 'Charlotte', 'Harper', 'Isabella', 'Shaw', 'Amelia', 'Olivia'];
console.log('Before changes: ', workers);
const unemployed = 'Shaw';

for (let i = 0; i < workers.length; i += 1) {
    if(workers[i] === unemployed){
        workers.splice(i, 1);
        console.log('After changes: ',workers);
        break;
    }
}