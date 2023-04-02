//! ----- Код
// const makeGreeting = guestName => {
//     if (guestName === "" || guestName === undefined) {
//       return {
//         success: false,
//         message: "Guest name must not be empty",
//       };
//     }
  
//     return {
//       success: true,
//       message: `Welcome ${guestName}`,
//     };
// };
  
// const result = makeGreeting("Mango");
  
// if (result.success) {
//     console.log(result.message);
// } else {
//     console.error(result.message);
// }



//! ----- Рефактуринг коду
// const makeGreeting = guestName => {
//     if (guestName === "" || guestName === undefined) {
//       return Promise.reject("Guest name must not be empty");
//     }
  
//     return Promise.resolve(`Welcome ${guestName}`);
//   };
  
//   makeGreeting("Mango")
//     .then(greeting => console.log(greeting))
//     .catch(error => console.error(error));