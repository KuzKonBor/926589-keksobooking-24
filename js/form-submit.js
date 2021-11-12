import {sendData} from './api.js';
import {onSuccess, onFail} from './form-message.js';
import {mapFilters} from './form-disabled.js';
import {resetMapMarker} from './map.js';
import {adForm} from './form-guests-rooms.js';


const setUserFormSubmit = () => {
  adForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    sendData (
      () => onSuccess(),
      () => onFail(),
      new FormData(),
    );
  });
};

setUserFormSubmit(onSuccess);

const resetButton = document.querySelector('.ad-form__reset');

const ResetForm = () => {
  adForm.reset();
  mapFilters.reset();
  resetMapMarker();
};

resetButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  ResetForm();
});

export {adForm, setUserFormSubmit, ResetForm};

