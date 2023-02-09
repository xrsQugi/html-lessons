// Порахує і виведе в консоль кількість категорій 
// в ul#categories, тобто елементів li.item.

// const listItem = document.querySelectorAll('.item');
// console.log('Number of categories:', listItem.length);

//!=========================================================

// Для кожного элемента li.item 
// у списку ul#categories, знайде і виведе 
// в консоль текст заголовку елемента (тегу <h2>) 
// і кількість елементів в категорії (усіх <li>, вкладених в нього).

// const h2Number = document.querySelectorAll('h2');
// const animals = document.querySelectorAll('.item');

// console.log('Category:', h2Number[0].textContent);
// console.log('Elements:', );

// console.log('Category:', h2Number[1].textContent);
// console.log('Elements:', );

// console.log('Category:', h2Number[2].textContent);
// console.log('Elements:', );


const ul = document.querySelectorAll('#categories>li');
for (const el of ul) {
    console.log(
        `Категория: ${el.firstElementChild.textContent},\nКоличество элементов: ${el.lastElementChild.children.length}`,
    );
}
