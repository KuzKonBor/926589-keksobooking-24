import {adForm} from './form-guests-rooms.js';

const addressInput = adForm.querySelector('#address');

const getAddresInputValue = (value) => addressInput.value = value;

addressInput.readOnly = true;

const getAddres = ({ lat, lng }) => `${lat.toFixed(5)}, ${lng.toFixed(5)}`;

export {getAddresInputValue, getAddres, addressInput};
