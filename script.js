let seconds = 0;
let interval = null;

const totalSeconds = 1200; // 20 minutes
const circle = document.getElementById("progressCircle");
const circumference = 2 * Math.PI * 100;

function updateDisplay() {
  let mins = Math.floor(seconds / 60);
  let secs = seconds % 60;

  document.getElementById("timer").innerText =
    String(mins).padStart(2, '0') + ":" +
    String(secs).padStart(2, '0');

  // Update circular progress
  let progress = seconds / totalSeconds;
  let offset = circumference - progress * circumference;
  circle.style.strokeDashoffset = offset;
}

function startTimer() {
  if (interval) return;

  interval = setInterval(() => {
    seconds++;
    updateDisplay();

    if (seconds >= totalSeconds) {
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
