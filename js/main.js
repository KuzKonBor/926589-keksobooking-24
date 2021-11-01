import {similarOffers} from './data.js';
import {renderPopup, mapCanvas} from './map.js';
import './form-title.js';
import './form-price.js';
import './form-guests-rooms.js';
import './form-time-in-out.js';

const DEFAULT_SIMILAR_OFFER_IDX = 0;
const similarOffer = similarOffers[DEFAULT_SIMILAR_OFFER_IDX];
const cardElement = renderPopup(similarOffer);

mapCanvas.appendChild(cardElement);
