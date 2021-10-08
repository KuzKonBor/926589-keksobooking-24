const getRandomNumber = (minimumValue, maximumValue) => {
  if(maximumValue <= minimumValue) {
    throw new Error('Минимальное число, должно быть больше максимального.');
  }
  return Math.floor(Math.random() * (maximumValue - minimumValue + 1)) + minimumValue;
};


const getRandomСoordinates = (minimumValue, maximumValue, afterTheComma) => {
  if(maximumValue <= minimumValue){
    throw new Error('Минимальное число, должно быть больше максимального.');
  }
  const randomСoordinates = Math.random() * (maximumValue - minimumValue + 1) + minimumValue;
  return Number(randomСoordinates.toFixed(afterTheComma));
};


const getAvatar = () => {
  const avatarId = getRandomNumber(1, 9);
  let author = {
    avatar: 'img/avatars/user0' + avatarId + '.png' };
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
const DESCRIPTIONS = [
  'big',
  'small',
  'average',
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const SUMAR_OFFERS_COUNT = 1;

const getRandomOfferElement = (elements) => {
  return elements[getRandomNumber(0, elements.length - 1)];
};

const createOffer = () => {
  const lng = getRandomСoordinates(35.65000, 35.70000, 5);
  const lon = getRandomСoordinates(139.70000, 139.80000, 5);

  return {

    author:getAvatar(),

    offer: {
      title: 'Жилье в аренду',
      address: lng +  ', ' + lon,
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
