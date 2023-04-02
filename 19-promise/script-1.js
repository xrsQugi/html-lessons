//! ----- Приклад 1
// const isSuccess = true;
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve("Success! Value passed to resolve function");
//     } else {
//       reject("Error! Error passed to reject function");
//     }
//   }, 2000);
// });

// //todo ----- Will run first
// console.log("Before promise.then()");

// //todo ----- Registering promise callbacks
// promise
//   .then(value => {console.log(value)})
//   .catch(error => {console.log(error)})
//   .finally(() => console.log("Promise settled"));



//! ----- Приклад 2
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(5);
//   }, 2000);
// });

// promise
//   .then(value => {
//     console.log(value); // 5
//     return value * 2;
//   })
//   .then(value => {
//     console.log(value); // 10
//     return value * 3;
//   })
//   .then(value => {
//     console.log(value); // 30
//   })
//   .catch(error => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("Final task");
//   });



//! ----- Приклад 3
// const fetchUserFromServer = username => {
//   return new Promise((resolve, reject) => {
//     console.log(`Fetching data for ${username}`);
    
//     setTimeout(() => {
// //todo ----- Change value of isSuccess variable to simulate request status
//       const isSuccess = true;
      
//       if (isSuccess) {
//         resolve("success value");
//       } else {
//         reject("error");
//       }
//     }, 2000);
//   });
// };

// fetchUserFromServer("Mango")
// .then(user => console.log(user))
// .catch(error => console.error(error));



//! ----- Promise.all()
// const makePromise = (text, delay) => {
//   return new Promise(resolve => {
//     setTimeout(() => resolve(text), delay);
//   });
// };

// //todo ----- Проміс promiseA виконається через одну секунду і чекатиме promiseB.
// const promiseA = makePromise("promiseA value", 1000);
// const promiseB = makePromise("promiseB value", 3000);

// Promise.all([promiseA, promiseB])
// .then(value => console.log(value))
// .catch(error => console.log(error));



//! ----- Promise.race()
// const makePromise = (text, delay) => {
//   return new Promise(resolve => {
//     setTimeout(() => resolve(text), delay);
//   });
// };
  
// const promiseA = makePromise("promiseA value", 1000);
// const promiseB = makePromise("promiseB value", 2000);
  
// Promise.race([promiseA, promiseB])
//   .then(value => console.log(value)) // "promiseA value"
//   .catch(error => console.log(error));

// //todo ----- Колбек методу then() або catch() буде викликаний через одну секунду, коли виконається найшвидший проміс, в даному випадку promiseA. 
// //todo ----- Другий проміс promiseB буде проігнорований.



//! ----- Promise.resolve() і Promise.reject()
// //todo ----- Fulfilled promise
// new Promise(resolve => resolve("success value")).then(value =>
//   console.log(value)
// );

// Promise.resolve("success value").then(value => console.log(value));

// //todo ----- Rejected promise
// new Promise(reject => reject("error")).catch(error =>
//   console.error(error)
// );

// Promise.reject("error").catch(error => console.error(error));
