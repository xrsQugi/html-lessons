// Напиши скрипт, який змінює кольори фону елемента <body> 
// через інлайн-стиль по кліку на button.change-color
// і виводить значення кольору в span.color.
const span = document.querySelector(".color")
const btnChangeColor = document.querySelector(".change-color")
const divWidget = document.querySelector(".widget");

// if (document.body.style.backgroundColor = '#FFFFFF') {
//     divWidget.style.backgroundColor = '#D9D9D9';
//     btnChangeColor.style.backgroundColor = '#FFFFFF';
// }

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorOnClick = () => {
    color = getRandomHexColor();
    span.textContent = color;
    document.body.style.backgroundColor = color;
    // divWidget.style.backgroundColor = '#FFFFFF';
    // btnChangeColor.style.backgroundColor = '#D9D9D9';
}

//!pill ===============================================================

const toggle = document.querySelector('#pill3');

const handleClick = () => {
  console.log("click event listener callback");
}

const changeListenerBtn = () => {
    if(toggle.checked){
        btnChangeColor.addEventListener('click', changeColorOnClick);
    } else{
        btnChangeColor.removeEventListener('click', changeColorOnClick);
    }
}

toggle.addEventListener('click', changeListenerBtn);


