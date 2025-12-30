let time = 300; // 5 minutes

const timerEl = document.getElementById("timer");

setInterval(() => {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;

  timerEl.textContent =
    String(minutes).padStart(2, '0') + ":" +
    String(seconds).padStart(2, '0');

  if (time > 0) time--;
}, 1000);
