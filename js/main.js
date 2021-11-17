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
import {getFilterFeatures, getTypeFilters, getRoomsFilters, getGuestsFilters, mapFilters, getFilterPrice} from './filtr.js';
import {debounce} from './util.js';

const SUMAR_OFFERS_COUNT = 10;

const localOffers = [];
getData((offers) => {
  localOffers.push(...offers);
  drawAnotherPinIcon(localOffers.slice(0, SUMAR_OFFERS_COUNT));

  mapFilters.addEventListener('change', debounce(() => {
    layerGroup.clearLayers();
    const updatedOffers = localOffers.filter((offer) => getTypeFilters(offer) && getRoomsFilters(offer) && getGuestsFilters(offer) && getFilterPrice(offer) && getFilterFeatures(offer));
    drawAnotherPinIcon(updatedOffers.slice(0, SUMAR_OFFERS_COUNT));
  }));
});
