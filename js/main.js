import './popap-element.js';
import './form-title.js';
import './form-price.js';
import './form-guests-rooms.js';
import './form-time-in-out.js';
import './form-disabled.js';
import './form-message.js';
import {getData} from './api.js';
import {drawAnotherPinIcon} from './map.js';
import './form-submit.js';

const SUMAR_OFFERS_COUNT = 10;

getData((offers) => {
  drawAnotherPinIcon(offers.slice(0, SUMAR_OFFERS_COUNT));
});
