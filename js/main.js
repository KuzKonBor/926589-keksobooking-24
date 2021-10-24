import {similarOffers} from './data.js';
import {renderPopup, mapCanvas} from './map.js';

const DEFAULT_SIMILAR_OFFER_IDX = 0;
const similarOffer = similarOffers[DEFAULT_SIMILAR_OFFER_IDX];
const cardElement = renderPopup(similarOffer);

mapCanvas.appendChild(cardElement);
