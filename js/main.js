import {similarOffers} from './data.js';
import {renderPopup} from './popap-element.js';
import './form-title.js';
import './form-price.js';
import './form-guests-rooms.js';
import './form-time-in-out.js';
import './form-disabled.js';
import './map-leaflet.js';

const DEFAULT_SIMILAR_OFFER_IDX = 0;
const similarOffer = similarOffers[DEFAULT_SIMILAR_OFFER_IDX];
const cardElement = renderPopup(similarOffer);


export {cardElement};
