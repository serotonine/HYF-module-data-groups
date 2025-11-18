// Remove after use.
const input = document.getElementById("alarmSet");
const output = document.getElementById("timeRemaining").querySelector(".timer");
const outputError = document.getElementById("output-error");
const body = document.getElementsByTagName("body")[0];
//
let count, timeRemaining;
let isPauseAlarm = false;

function setAlarm() {
  reInit();
  const time = Number(input.value);

  if (time && time > 0) {
    timeRemaining = time;
    output.innerHTML = displayTime(timeRemaining);
    startAlarm();
  } else {
    throw new Error("You must set a positive value");
  }
}

function startAlarm() {
  count = window.setInterval(() => {
    if (timeRemaining >= 1) {
      timeRemaining--;
      output.innerHTML = displayTime(timeRemaining);
    } else {
      playAlarm();
      clearInterval(count);
      body.classList.add("alarm");
    }
  }, 1000);
}
function pauseAlarm(e) {
  isPauseAlarm = !isPauseAlarm;
  const btn = e.target;
  if (isPauseAlarm) {
    btn.classList.add("active");
    clearInterval(count);
  } else {
    btn.classList.remove("active");
    startAlarm();
  }
}

function reInit() {
  audio.pause();
  body.classList.remove("alarm");
  outputError.classList.remove("active");
  outputError.innerHTML = "";
}
function displayTime(time) {
  const seconds = time % 60;
  const minutes = (time - seconds) / 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
    2,
    "0"
  )}`;
}

// DO NOT EDIT BELOW HERE.

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", (e) => {
    try {
      setAlarm();
    } catch (e) {
      outputError.classList.add("active");
      outputError.innerHTML = e.message;
    }
  });

  document.getElementById("stop").addEventListener("click", () => {
    stopAlarm();
  });
  document.getElementById("pause").addEventListener("click", (e) => {
    pauseAlarm(e);
  });
}

function playAlarm() {
  audio.play();
}

function stopAlarm() {
  reInit();
}

window.onload = setup;
