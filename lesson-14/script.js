//! Завдання 1 ===================================
const counterInput = document.querySelector('#value');
let counterValue = 0;

const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');

const plusOne = () => {
    counterValue += 1;
    counterInput.textContent = counterValue;
}
increment.addEventListener('click', plusOne);

const minusOne = () => {
    counterValue -= 1;
    counterInput.textContent = counterValue;
}
decrement.addEventListener('click', minusOne);


//! Завдання 2 ===================================