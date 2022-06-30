const minute = document.querySelector(".minute");
const second = document.querySelector(".second");
const miliSecond = document.querySelector(".milisecond");
const playBtn = document.querySelector(".play");
const resetBtn = document.querySelector(".reset");

let interval;

playBtn.addEventListener("click", () => {
  if (playBtn.innerText == "Play") {
    playBtn.innerText = "Pause";
    clearInterval(interval);
    interval = setInterval(stopwach, 10);
  } else {
    clearInterval(interval);
    playBtn.innerText = "Play";
  }
});

resetBtn.addEventListener("click", () => {
  clearInterval(interval);
  miliSecond.innerText = "00";
  second.innerText = "00";
  minute.innerText = "00";
});

const stopwach = () => {
  miliSecond.innerText++;
  if (miliSecond.innerText < 10) {
    miliSecond.innerText = "0" + miliSecond.innerText++;
  }

  if (miliSecond.innerText == 100) {
    miliSecond.innerText = "00";
    second.innerText++;

    if (second.innerText < 10) {
      second.innerText = "0" + second.innerText++;
    }

    if (second.innerText == 60) {
      second.innerText = "00";
      minute.innerText++;

      if (minute.innerText < 10) {
        minute.innerText = "0" + minute.innerText++;
      }
    }
  }
};
