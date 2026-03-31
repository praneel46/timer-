let seconds = 0;
let interval = null;

const totalSeconds = 1200; // 20 min

function startApp() {
  document.getElementById("startScreen").classList.add("hidden");
  document.getElementById("timerScreen").classList.remove("hidden");

  startTimer();
}

function updateDisplay() {
  let mins = Math.floor(seconds / 60);
  let secs = seconds % 60;

  document.getElementById("timer").innerText =
    String(mins).padStart(2, '0') + ":" +
    String(secs).padStart(2, '0');
}

function startTimer() {
  interval = setInterval(() => {
    seconds++;
    updateDisplay();

    if (seconds >= totalSeconds) {
      clearInterval(interval);

      // LOUD BUZZER
      let sound = document.getElementById("buzzer");
      sound.play();

      // Optional: flash effect
      document.body.style.background = "red";
    }
  }, 1000);
}
