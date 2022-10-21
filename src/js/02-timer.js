import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

Notify.init({
  success: {
    background: '#76e0ff',
  },
  failure: {
    background: '#a4b4b8',
  },
});

const input = document.querySelector('input');
const button = document.querySelector('button');

const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');

let currentTime = null;
let timerTime = null;
let deltaTime = null;
let timerID = null;

button.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onChange(selectedDates) {
    currentTime = new Date();
    currentTime = Date.parse(currentTime);
    timerTime = Date.parse(selectedDates[0]);

    if (timerTime < currentTime) {
      Notify.failure('Please choose a date in the future');
      return;
    }
    button.disabled = false;
  },
};

button.addEventListener('click', startTimer);

function startTimer() {
  button.disabled = true;
  input.disabled = true;
  currentTime = new Date();
  currentTime = Date.parse(currentTime);
  deltaTime = timerTime - currentTime;
  timerUpdater();
  timerID = setInterval(timerUpdater, 1000);
}

function timerUpdater() {
  days.textContent = addLeadingZero(convertMs(deltaTime).days);
  hours.textContent = addLeadingZero(convertMs(deltaTime).hours);
  minutes.textContent = addLeadingZero(convertMs(deltaTime).minutes);
  seconds.textContent = addLeadingZero(convertMs(deltaTime).seconds);

  if (deltaTime === 0) {
    Notify.success('THE END');
    clearTimeout(timerID);
    return;
  }
  deltaTime = deltaTime - 1000;
}

flatpickr('input', options);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}
