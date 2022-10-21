const buttonStart = document.querySelector('[data-start]');
const buttonStop = document.querySelector('[data-stop]');
const body = document.querySelector('body');

buttonStop.disabled = true;

let intervalId = null;

function startColorChange() {
  buttonStart.disabled = true;
  buttonStop.disabled = false;
  body.style.backgroundColor = getRandomHexColor();
  intervalId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function stopColorChange() {
  buttonStart.disabled = false;
  buttonStop.disabled = true;
  clearInterval(intervalId);
}

buttonStart.addEventListener('click', startColorChange);
buttonStop.addEventListener('click', stopColorChange);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
