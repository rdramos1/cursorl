function startTimer() {
  let timerElement = document.getElementById("timer");
  let startTime = localStorage.getItem("startTime");
  let duration = 2 * 30 * 60 * 1000; // 6 horas em milissegundos

  if (!startTime) {
    startTime = new Date().getTime();
    localStorage.setItem("startTime", startTime);
  }

  function updateTimer() {
    let currentTime = new Date().getTime();
    let elapsedTime = currentTime - parseInt(startTime);
    let remainingTime = duration - elapsedTime;

    if (remainingTime <= 0) {
      startTime = new Date().getTime(); // reinicia o timer
      localStorage.setItem("startTime", startTime);
      remainingTime = duration;
    }

    let hours = Math.floor(remainingTime / (1000 * 60 * 60));
    let minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    hours = hours.toString().padStart(2, "0");
    minutes = minutes.toString().padStart(2, "0");
    seconds = seconds.toString().padStart(2, "0");

    timerElement.textContent = hours + ":" + minutes + ":" + seconds;
  }

  setInterval(updateTimer, 1000); // atualiza o timer a cada segundo
}
