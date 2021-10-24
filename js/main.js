import './util.js';
import {similarOffers} from './data.js';
import {renderPopup, mapCanvas} from './map.js';
import './test.js';


similarOffers.forEach((similarOffer) => {
  const cardElement = renderPopup(similarOffer);
  mapCanvas.appendChild(cardElement);
});

