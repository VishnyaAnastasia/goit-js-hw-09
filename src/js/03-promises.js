import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');

const delayInput = document.querySelector('[name="delay"]');
const stepInput = document.querySelector('[name="step"]');
const amountInput = document.querySelector('[name="amount"]');

const button = document.querySelector('button');

form.addEventListener('submit', submitEvent);

function submitEvent(event) {
  event.preventDefault();
  if (delayInput.value <= 0 || stepInput.value <= 0 || amountInput.value <= 0) {
    Notify.failure('❌ Values must be > 0');
    return;
  }
  let delay = +delayInput.value;

  for (let position = 1; position <= +amountInput.value; position += 1) {
    createPromise(position, delay)
      .then(({ position, delay }) =>
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`)
      )
      .catch(({ position, delay }) =>
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`)
      );
    delay = delay + +stepInput.value;
  }

  form.reset();
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });

  return promise;
}
