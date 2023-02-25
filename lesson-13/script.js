//?First task=============================================================================================================================
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
const h2Elem = document.querySelectorAll('h2');
const elements = document.querySelectorAll('.item');

console.log('Category:', h2Elem[0].textContent);
console.log('Elements:', elements[0].lastElementChild.children.length);

console.log('Category:', h2Elem[1].textContent);
console.log('Elements:', elements[1].lastElementChild.children.length);

console.log('Category:', h2Elem[2].textContent);
console.log('Elements:', elements[2].lastElementChild.children.length);

//todo==========================Second method======================
// const ul = document.querySelectorAll('#categories>li');
// for (const el of ul) {
//     console.log(
//         `Category: ${el.firstElementChild.textContent}\nElements: ${el.lastElementChild.children.length}`,
//     );
// }

//?Second task============================================================================================================================
// Напиши скрипт для створення галереї зображень на підставі масиву даних. HTML містить список ul.gallery.
// <ul class="gallery"></ul>
// Використовуй масив об'єктів images для створення елементів <img>, вкладених в <li>. 
// Для створення розмітки використовуй шаблонні рядки і метод insertAdjacentHTML().
// Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
// Додай мінімальне оформлення галереї флексбоксами або грідами через CSS класи.

// const images = [
//     {
//         url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
//         alt: "White and Black Long Fur Cat",
//     },
//     {
//         url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
//         alt: "Orange and White Koi Fish Near Yellow Koi Fish",
//     },
//     {
//         url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
//         alt: "Group of Horses Running",
//     },
// ];

// const gallery = document.querySelector('.gallery');

// const imageItems = images.map((image) =>`<li class="list-item"><img src="${image.url}" alt="${image.alt}" width = 300px height = 190px ></li>`).join('');
// gallery.insertAdjacentHTML("afterbegin", imageItems);
// gallery.style.listStyle = 'none';
// gallery.style.display = 'flex';
// gallery.style.gap = '20px';
