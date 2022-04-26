const minuteValue = document.getElementById("minute");
const secondValue = document.getElementById("second");
const miliValue = document.getElementById("mili");

const startButton = document.getElementById("start-button");
const pauseButton = document.getElementById("pause-button");
const resetButton = document.getElementById("reset-button");

let minute = 0;
let second = 0;
let mili = 0;

let watchInterval;

function startInverval() {
  watchInterval = setInterval(increaseMili, 10);
}

function increaseMili() {
  mili++;
  if (mili <= 9) {
    miliValue.innerHTML = "0" + mili;
  } else if (mili > 9) {
    miliValue.innerHTML = mili;
  }
  if (mili > 99) {
    increaseSecond();
    mili = 0;
    miliValue.innerHTML = "0" + mili;
  }
}

function increaseSecond() {
  second++;
  if (second < 9) {
    secondValue.innerHTML = "0" + second;
  }
  if (second > 9) {
    secondValue.innerHTML = second;
  }
  if (second > 59) {
    increaseMinute();
    second = 0;
    secondValue.innerHTML = "0" + second;
  }
}

function increaseMinute() {
  minute++;
  minuteValue.innerHTML = minute;
}

function pause() {
  clearInterval(watchInterval);
}

function restart() {
  minute = 0;
  second = 0;
  mili = 0;
  minuteValue.innerHTML = "0";
  secondValue.innerHTML = "00";
  miliValue.innerHTML = "00";
}

startButton.addEventListener("click", startInverval);
pauseButton.addEventListener("click", pause);
resetButton.addEventListener("click", restart);
