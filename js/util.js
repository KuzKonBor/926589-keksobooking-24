import {FEATURES, PHOTOS} from './data.js';

const popap = document.querySelector('.popap');
const popupFeatures = popap.querySelector('.popup__features');
const popupFeaturesFragment = document.createDocumentFragment();
const popupPhotos = popap.querySelector('.popup__photos');
const popupPhotosFragment = document.createDocumentFragment();


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

const getRandomOfferElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];

const getPopupType = (housing) => {
  switch (housing) {
    case 'flat':
      return 'Квартира';
    case 'bungalow':
      return  'Бунгало';
    case 'house':
      return 'Дом';
    case 'palace':
      return 'Дворец';
    case 'hotel':
      return 'Отель';
    default:
      return 'Буду бомжевать!';
  }
};

const getPopupFeatures = () => {
  FEATURES.forEach((FEATURE) => {
    const featureListItem = popupFeatures.querySelector(`popup__feature-- + ${FEATURE}`);
    if (featureListItem) {
      popupFeaturesFragment.append(featureListItem);
    }
  });

  popupFeatures.innerHTML = '';
  popupFeatures.append(popupFeaturesFragment);
};

const getPopupPhotos = () => {
  PHOTOS.forEach((PHOTO) => {
    const photoListItem = popupPhotos.src = PHOTO;
    if (photoListItem) {
      popupPhotosFragment.append(photoListItem);
    }
  });

  popupPhotos.innerHTML = '';
  popupPhotos.append(popupPhotosFragment);
};

export {getRandomNumber, getRandomСoordinates, getRandomOfferElement, getPopupType,
  getPopupFeatures, getPopupPhotos, popap, popupFeatures, popupPhotos};
