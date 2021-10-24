import {getRandomNumber, getRandomСoordinates, getRandomOfferElement, getRandomItems} from './util.js';


const getAvatar = () => {
  const avatarId = getRandomNumber(1, 9);
  const author = {
    avatar: `img/avatars/user0${avatarId}.png`};
  return author;
};

const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const CHECKINS = [
  '12:00',
  '13:00',
  '14:00',
];

const CHECKOUTS = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

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
      features: getRandomItems(FEATURES),
      description: 'Замечательная коробка на улице под мостом, рядом все удобства.Река в которой можно помыться и набрать воды, она же и туалет на открытом воздухе. Все как вы и хотели.',
      photos: getRandomItems(PHOTOS),
    },
    location:{
      lng,
      lon,
    },
  };
};
const similarOffers = Array.from({length: SUMAR_OFFERS_COUNT}, createOffer);
export {createOffer, getAvatar, similarOffers};
