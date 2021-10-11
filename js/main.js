import {getRandomNumber, getRandomСoordinates, getRandomOfferElement} from './util.js';
import {TYPES, CHECKINS, CHECKOUTS, FEATURES, DESCRIPTIONS, PHOTOS, getAvatar} from './data.js';

const SUMAR_OFFERS_COUNT = 1;

const createOffer = () => {
  const lng = getRandomСoordinates(35.65000, 35.70000, 5);
  const lon = getRandomСoordinates(139.70000, 139.80000, 5);

  return {

    author:getAvatar(),

    offer: {
      title: 'Жилье в аренду',
      address: `${lng} ${lon}`,
      price: getRandomNumber(100, 1000),
      type: getRandomOfferElement(TYPES),
      rooms: getRandomNumber(1, 50),
      guests: getRandomNumber(1, 100),
      checkin: getRandomOfferElement(CHECKINS),
      checkout: getRandomOfferElement(CHECKOUTS),
      features: getRandomOfferElement(FEATURES),
      description: getRandomOfferElement(DESCRIPTIONS),
      photos: getRandomOfferElement(PHOTOS),
    },

    location:{
      lng,
      lon,
    },
  };
};
const similarOffers = Array.from({length: SUMAR_OFFERS_COUNT}, createOffer);
