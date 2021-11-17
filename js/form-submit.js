import {sendData} from './api.js';
import {onSuccess, onFail} from './form-message.js';
import {mapFilters} from './form-disabled.js';
import {resetMapMarker} from './map.js';
import {adForm} from './form-guests-rooms.js';

const resetButton = document.querySelector('.ad-form__reset');

const getResetForm = () => {
  adForm.reset();
  mapFilters.reset();
  resetMapMarker();
};

const setUserFormSubmit = () => {
  adForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    sendData (
      () => {
        onSuccess();
        getResetForm();
      },
      () => onFail(),
      new FormData(adForm),
    );
  });
};

setUserFormSubmit(onSuccess);

resetButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  getResetForm();
});

export {setUserFormSubmit, getResetForm};
