let [milliseconds, seconds, minutes] = [0, 0, 0];
let timerRef = document.querySelector(".timerDisplay");
let btn = document.getElementById("startTimer");
let clocktimer;

document.getElementById("startTimer").addEventListener("click", () => {
  if (btn.classList.contains("start")) {
    btn.classList.remove("start");
    btn.innerHTML = `<i class="fa-solid fa-pause"></i>`;
    clocktimer = setInterval(displayTimer, 10);
  } else {
    btn.classList.add("start");
    btn.innerHTML = `<i class="fa-solid fa-play"></i>`;
    clearInterval(clocktimer);
  }
});

document.getElementById("resetTimer").addEventListener("click", () => {
  clearInterval(clocktimer);
  [milliseconds, seconds, minutes] = [0, 0, 0];
  timerRef.innerHTML = "00 : 00 : 00 ";
  btn.classList.remove("stop");
  btn.classList.add("start");
  btn.innerHTML = `<i class="fa-solid fa-play"></i>`;
});

function displayTimer() {
  milliseconds += 1;
  if (milliseconds == 100) {
    milliseconds = 0;
    seconds++;
    if (seconds == 60) {
      seconds = 0;
      minutes++;
    }
  }

  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  let ms = milliseconds < 10 ? "0" + milliseconds : milliseconds;
  timerRef.innerHTML = ` ${m} : ${s} : ${ms}`;
}
