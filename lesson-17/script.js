const time = document.querySelector('#clock_face');
const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector('#stop');
const resetBtn = document.querySelector('#reset');

let seconds = 0;
let interval = null;

function timer(){
    seconds += 1;

    let hours = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds - (hours*3600))/ 60);
    let secs = seconds % 60;

    if(secs < 10){
        secs = '0' + secs;
    }
    if(mins < 10){
        mins = '0' + mins;
    }
    if(hours < 10){
        hours = '0' + hours;
    }
    time.innerText = `${hours}:${mins}:${secs}`;
}

function startTimer(){
    if (interval) {
        return;
    }
    interval = setInterval(timer, 1000);
}

function stopTimer(){
    clearInterval(interval);
    interval = null;
}

function resetTimer() {
    seconds = 0;
    stopTimer();
    time.innerText = '00:00:00';
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);