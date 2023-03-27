const display = document.querySelector('.display');
const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');

// let miliseconds = 0;
// let seconds = 0;
// let minutes = 0;
// let hours = 0;
[miliseconds, seconds, minutes, hours] = [0, 0, 0, 0];

//! обьявим переменую с помощью,
//! которой мы не сможем два раза нажимать на одну и туже кнопку "Start"
let stopwatch = null;

function start(){
    miliseconds += 1;
    if (miliseconds === 100) {
        miliseconds = 0;
        seconds += 1;
    }
    if(seconds === 60){
        seconds = 0;
        minutes += 1;
    }
    if(minutes === 60){
        minutes = 0;
        hours += 1;
    }
    
    //! Таким способом мы предовратим ошибку, перезаписывания одной и той же переменной,
    //! Сначала "0 + 1", а дальше -> "01 + 1 = 011" -> "011 + 1 = 0111"
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = miliseconds < 10 ? "0" + miliseconds : miliseconds;
    display.innerHTML = `${h}:${m}:${s}<span class="point">:</span>${ms}`;
}

startBtn.addEventListener('click', () => {
    if(stopwatch !== null){
        clearInterval(stopwatch);
    }
    stopwatch = setInterval(start, 10);
})

stopBtn.addEventListener('click', () => {
    clearInterval(stopwatch);
    console.log('stopwatch :>> ', stopwatch);
})

resetBtn.addEventListener('click', () => {
    [miliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    display.innerHTML = '00:00:00<span class="point">:</span>00';
    clearInterval(stopwatch);
})