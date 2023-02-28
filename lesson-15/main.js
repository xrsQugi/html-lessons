//? Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і 
//? змінює інлайн-стиль span#text, оновлюючи властивість font-size.
//? В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const fontSizeControl = document.querySelector("#font-size-control")
const text = document.querySelector("#text")

const changeFontSize = (e) => {
  text.style.fontSize = `${e.currentTarget.value}px`
}
fontSizeControl.addEventListener("input", changeFontSize)



//? Напиши скрипт, який змінює кольори фону елемента <body> 
//? через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.
//? Для генерування випадкового кольору використовуй функцію getRandomHexColor.

const getRandomHexColor = function () {
  return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
}

const span = document.querySelector(".color")
const btn = document.querySelector(".change-color")

const changeColorOnClick = () => {
  const color = getRandomHexColor()
  span.textContent = color
  document.body.style.backgroundColor = color
}
btn.addEventListener("click", changeColorOnClick)