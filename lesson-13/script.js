//!========================First part==============================
// Порахує і виведе в консоль кількість категорій 
// в ul#categories, тобто елементів li.item.

// const listItem = document.querySelectorAll('.item');
// console.log('Number of categories:', listItem.length);

//!========================Second part=============================
// Для кожного элемента li.item 
// у списку ul#categories, знайде і виведе 
// в консоль текст заголовку елемента (тегу <h2>) 
// і кількість елементів в категорії (усіх <li>, вкладених в нього).

//todo==========================First method=======================
// const h2Elem = document.querySelectorAll('h2');
// const elements = document.querySelectorAll('.item');

// console.log('Category:', h2Elem[0].textContent);
// console.log('Elements:', elements[0].lastElementChild.children.length);

// console.log('Category:', h2Elem[1].textContent);
// console.log('Elements:', elements[1].lastElementChild.children.length);

// console.log('Category:', h2Elem[2].textContent);
// console.log('Elements:', elements[2].lastElementChild.children.length);

//todo==========================Second method======================
// const ul = document.querySelectorAll('#categories>li');
// for (const el of ul) {
//     console.log(
//         `Category: ${el.firstElementChild.textContent}\nElements: ${el.lastElementChild.children.length}`,
//     );
// }
