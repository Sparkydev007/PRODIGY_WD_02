let [seconds, minutes, hours] = [0, 0, 0];
let display = document.getElementById("display");
let timer = null;

function updateTime() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }

  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;

  display.innerText = `${h}:${m}:${s}`;
}

document.getElementById("start").onclick = () => {
  if (timer !== null) return;
  timer = setInterval(updateTime, 1000);
  navigator.vibrate?.(50);
};

document.getElementById("pause").onclick = () => {
  clearInterval(timer);
  timer = null;
  navigator.vibrate?.(30);
};

document.getElementById("reset").onclick = () => {
  clearInterval(timer);
  timer = null;
  [seconds, minutes, hours] = [0, 0, 0];
  display.innerText = "00:00:00";
  document.getElementById("laps").innerHTML = "";
  navigator.vibrate?.(20);
};

document.getElementById("lap").onclick = () => {
  if (timer !== null) {
    const lapTime = display.innerText;
    const li = document.createElement("li");
    li.innerText = `Lap: ${lapTime}`;
    document.getElementById("laps").appendChild(li);
    navigator.vibrate?.(10);
  }
};

document.getElementById("modeToggle").addEventListener("change", (e) => {
  document.body.classList.toggle("light", e.target.checked);
  document.getElementById("modeLabel").textContent = e.target.checked ? "Light Mode" : "Dark Mode";
});
