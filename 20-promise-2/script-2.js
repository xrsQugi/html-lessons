//! ----- Пример 1
// const makeCoffee = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Your coffee is made!')
//         }, 500)
//     })
// }

// const makeToast = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Your toasts are made!')
//         }, 1000)
//     })
// }

// const coffeePromise = makeCoffee();
// const toastPromise = makeToast();

// //todo ----- Получим сначала кофе, потом тосты
// coffeePromise.then(data => {
//     console.log(data);
// })

// toastPromise.then(data => {
//     console.log(data);
// })

// //todo ----- Получим через 1 секунду все вместе, так как ждёт выполнение всего
// Promise.all([coffeePromise, toastPromise]).then(data =>{
//     console.log(data);
// })
// Promise.all([coffeePromise, toastPromise]).then(([coffeePromise, toastPromise]) =>{
//     console.log(coffeePromise, toastPromise);
// })


//! ----- Пример 2
const beersPromise = fetch('https://api.sampleapis.com/beers/ale')
const winesPromise = fetch('https://api.sampleapis.com/wines/reds')

Promise.all([beersPromise, winesPromise])
    .then(data => Promise.all(data.map(res => res.json())))
    .then(finalData => {
    console.log(finalData);
})