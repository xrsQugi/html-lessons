const horses = [
    "Secretariat",
    "Eclipse",
    "West Australian",
    "Flying Fox",
    "Seabiscuit",
];
  
let raceCounter = 0;
const refs = {
    startBtn: document.querySelector(".js-start-race"),
    winnerField: document.querySelector(".js-winner"),
    progressField: document.querySelector(".js-progress"),
    tableBody: document.querySelector(".js-results-table > tbody"),
};
  
refs.startBtn.addEventListener("click", onStart);
  
function onStart() {
    raceCounter += 1;
    const promises = horses.map(run);
  
    updateWinnerField("");
    updateProgressField("Race has begun, bids are not accepted! 🐎");
    determineWinner(promises);
    waitForAll(promises);
}

function run(horse) {
    return new Promise((resolve) => {
      const time = getRandomTime(2000, 3500);
  
      setTimeout(() => {
        resolve({ horse, time });
      }, time);
    });
}
  
function getRandomTime(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


//! Promise.race([]) для ожидания первого выполнившегося промиса
function determineWinner(horsesP) {
    Promise.race(horsesP).then(({ horse, time }) => {
      updateWinnerField(`Horse "${horse}" has won and finished in ${Math.floor(time/60)} seconds 🏆`);
      updateResultsTable({ horse, time, raceCounter });
    });
}

//! Promise.all([]) для ожидания всех промисов
function waitForAll(horsesP) {
    Promise.all(horsesP).then(() => {
      updateProgressField("Race is over, bids are being accepted 🤠");
    });
}

function updateWinnerField(message) {
    refs.winnerField.textContent = message;
}
  
function updateProgressField(message) {
    refs.progressField.textContent = message;
}
  
function updateResultsTable({ horse, time, raceCounter }) {
    const tr = `<tr><td>${raceCounter}</td><td>${horse}</td><td>${Math.floor(time/60)}</td></tr>`;
    refs.tableBody.insertAdjacentHTML("beforeend", tr);
}
