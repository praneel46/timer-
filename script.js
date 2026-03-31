let seconds = 0;
let interval = null;

const totalSeconds = 1200;

function startApp() {
  enterFullscreen();

  document.getElementById("startScreen").classList.add("hidden");
  document.getElementById("timerScreen").classList.remove("hidden");

  startTimer();
}

function enterFullscreen() {
  let elem = document.documentElement;
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  }
}

function updateDisplay() {
  let mins = Math.floor(seconds / 60);
  let secs = seconds % 60;

  let timer = document.getElementById("timer");

  timer.innerText =
    `${String(mins).padStart(2,'0')}:${String(secs).padStart(2,'0')}`;

  // ⚠️ LAST MINUTE GLOW
  if (seconds >= totalSeconds - 60) {
    timer.classList.add("warning");
  }
}

function startTimer() {
  interval = setInterval(() => {
    seconds++;
    updateDisplay();

    if (seconds >= totalSeconds) {
      clearInterval(interval);

      let sound = document.getElementById("buzzer");
      sound.volume = 1;
      sound.play();

      flashScreen();
    }
  }, 1000);
}

function flashScreen() {
  let count = 0;

  let flash = setInterval(() => {
    document.body.style.background =
      count % 2 === 0 ? "red" : "black";

    count++;

    if (count > 10) clearInterval(flash);
  }, 150);
}
