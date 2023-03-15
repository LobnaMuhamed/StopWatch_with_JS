let timer = document.getElementById("timer");
timer.innerHTML = `00 : 00 : 00 : 000`;
let [hours, minutes, seconds, milseconds] = [00, 00, 00, 000];

let int = null;
document.getElementById("startTimer").addEventListener("click", function () {
  if (int != null) {
    clearInterval(int);
  }
  int = setInterval(displayTimer, 10);
});
document.getElementById("pauseTimer").addEventListener("click", function () {
  clearInterval(int);
});
document.getElementById("restartTimer").addEventListener("click", function () {
  clearInterval(int);
  [hours, minutes, seconds, milseconds] = [00, 00, 00, 000];
  timer.innerHTML = `00 : 00 : 00 : 000`;
});

function displayTimer() {
  milseconds += 10;
  if (milseconds == 1000) {
    milseconds = 0;
    seconds++;
    if (seconds == 60) {
      seconds = 0;
      minutes++;
      if (minutes == 60) {
        minutes = 0;
        hours++;
      }
    }
  }
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  let ms =
    milseconds < 10
      ? "00" + milseconds
      : milseconds < 100
      ? "0" + milseconds
      : milseconds;
  timer.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
}
