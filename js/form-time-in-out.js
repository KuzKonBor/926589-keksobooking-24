import {adForm} from './form-guests-rooms.js';

const timein = adForm.querySelector('#timein');
const timeout = adForm.querySelector('#timeout');

timeout.addEventListener('change', () => {
  timein.value = timeout.value;
});

timein.addEventListener('change', () => {
  timeout.value = timein.value;
});
