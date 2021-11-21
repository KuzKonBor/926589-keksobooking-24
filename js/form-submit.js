import {sendData} from './api.js';
import {onSuccess, onFail} from './form-message.js';
import {mapFilters} from './form-disabled.js';
import {resetMapMarker} from './map.js';
import {adForm} from './form-guests-rooms.js';
import {PRICE_PLACEHOLDER, price} from './form-price.js';
import {resetImages} from './file-photos.js';

const resetButton = document.querySelector('.ad-form__reset');

const getResetForm = () => {
  adForm.reset();
  mapFilters.reset();
  price.placeholder = PRICE_PLACEHOLDER;
  resetMapMarker();
  resetImages();
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

export {setUserFormSubmit};
