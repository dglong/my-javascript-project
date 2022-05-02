const seconds = document.getElementById("seconds");
const minutes = document.getElementById("minutes");
const hours = document.getElementById("hours");

let currSecond;
let currMinute;
let currHour;

function init() {
  let currDate = new Date();

  //Set seconds
  currSecond = currDate.getSeconds();
  if (currSecond <= 9) {
    seconds.innerHTML = "0" + currSecond;
  } else {
    seconds.innerHTML = currSecond;
  }

  //Set minutes
  currMinute = currDate.getMinutes();
  if (currMinute <= 9) {
    minutes.innerHTML = "0" + currMinute;
  } else {
    minutes.innerHTML = currMinute;
  }

  //Set hours
  currHour = currDate.getHours();
  if (currHour <= 9) {
    hours.innerHTML = "0" + currHour;
  } else {
    hours.innerHTML = currHour;
  }

  setTimeout(init, 1000);
}

init();
