import {adForm} from './form-guests-rooms.js';

const mapFilters = document.querySelector('.map__filters');
const mapFiltersSelects = mapFilters.querySelectorAll('select');
const mapFiltersFieldsets = mapFilters.querySelectorAll('fieldset');
const adFormFieldsets = adForm.querySelectorAll('fieldset');

const adFormDisabled = () => {
  adForm.classList.toggle('ad-form--disabled');
  adFormFieldsets.forEach((fieldset) => {
    fieldset.disabled = !fieldset.disabled;
  });
};

const mapFiltersDisabled = () => {
  mapFilters.classList.toggle('map__filters--disabled');
  mapFiltersSelects.forEach((select) => {
    select.disabled = !select.disabled;
    mapFiltersFieldsets.disabled = !mapFiltersFieldsets.disabled;
  });
};

const disableToggle = () => {
  adFormDisabled();
  mapFiltersDisabled();
};

disableToggle();

export {disableToggle};
