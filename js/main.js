import './popap-element.js';
import './form-title.js';
import './form-price.js';
import './form-guests-rooms.js';
import './form-time-in-out.js';
import './form-disabled.js';
import './form-message.js';
import {getData} from './api.js';
import {drawAnotherPinIcon, layerGroup} from './map.js';
import './form-submit.js';
import {filterFeatures, filterPrice, typeFilters, roomsFilters, guestsFilters, mapFilters} from './filtr.js';
import {debounce} from './util.js';

const SUMAR_OFFERS_COUNT = 10;

getData((offers) => {
  let arrayOffers = offers;
  drawAnotherPinIcon(arrayOffers.slice(0, SUMAR_OFFERS_COUNT));
  mapFilters.addEventListener('change', debounce(() => {
    arrayOffers = offers;
    layerGroup.clearLayers();
    arrayOffers = arrayOffers.filter((offer) => typeFilters(offer));
    arrayOffers = arrayOffers.filter((offer) => roomsFilters(offer));
    arrayOffers = arrayOffers.filter((offer) => guestsFilters(offer));
    arrayOffers = arrayOffers.filter((offer) => filterPrice(offer));
    arrayOffers = arrayOffers.filter((offer) => filterFeatures(offer));
    drawAnotherPinIcon(arrayOffers.slice(0, SUMAR_OFFERS_COUNT));
  }));
});
