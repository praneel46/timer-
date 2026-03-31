let seconds = 0;
let interval = null;

function updateDisplay() {
  let mins = Math.floor(seconds / 60);
  let secs = seconds % 60;

  document.getElementById("timer").innerText =
    String(mins).padStart(2, '0') + ":" +
    String(secs).padStart(2, '0');
}

function startTimer() {
  if (interval) return;

  interval = setInterval(() => {
    seconds++;
    updateDisplay();

    if (seconds === 1200) { // 20 minutes
      clearInterval(interval);
      document.getElementById("buzzer").play();
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(interval);
  interval = null;
}

function resetTimer() {
  clearInterval(interval);
  interval = null;
  seconds = 0;
  updateDisplay();
}
