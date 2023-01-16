let checkPlay = confirm("Хочешь пограти, якщо так тисни 'Ок', якщо ні 'Отмена'")
if (checkPlay === true){
    let min = Number(prompt("Введіть число від якого буде генеруватися числа"));
    let max = Number(prompt("Введіть число до якого буде генеруватися числа"));
    let generateNum = Math.round(Math.random() * (max - min) + min);
    //alert(generateNum);
    do{
        checkNumber = Number (prompt(`Спробуйте вгадати число від ${min} до ${max}`));
    } while (checkNumber !== generateNum){
        alert("Ви геній!");
    }
} else {
    alert("Перезавантажте сторінку, якщо хочете пограти знову, або продовжуйте мандри по сторінці");
}