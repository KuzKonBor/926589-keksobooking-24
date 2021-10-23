import {createOffer, getAvatar} from './data.js';

const mapCanvas = document.querySelector('.map__canvas');
const card = document.querySelector('#card').content.querySelector('.popup');
const dataPopap = createOffer();

const swihchType =  {
  'flat':'Квартира',
  'bungalow':'Бунгало',
  'house':'Дом',
  'palace':'Дворец',
  'hotel':'Отель',
  'default':'Буду бомжевать!',
};

const renderPopup = (obj) => {
  const popapElement = card.cloneNode(true);

  popapElement.querySelector('.popup__title').textContent = obj.offer.title;
  popapElement.querySelector('.popup__text--address').textContent = obj.offer.address;
  popapElement.querySelector('.popup__text--price').textContent = `${obj.offer.price}₽/ночь.`;
  popapElement.querySelector('.popup__type').textContent = swihchType[obj.offer.type];
  popapElement.querySelector('.popup__text--capacity').textContent = `${obj.offer.rooms} комнаты, для ${obj.offer.guests} гостей.`;
  popapElement.querySelector('.popup__text--time').textContent = `Заезд после ${obj.offer.checkin} , выезд до ${obj.offer.checkout}.`;
  popapElement.querySelector('.popup__description').textContent = obj.offer.description;
  popapElement.querySelector('.popup__avatar').src = getAvatar();

  const popupFeatures = popapElement.querySelector('.popup__features');
  const popupFeaturesFragment = document.createDocumentFragment();
  obj.offer.features.forEach((feature) => {
    const featureListItem = popupFeatures.querySelector(`.popup__feature--${feature}`);
    if (featureListItem) {
      popupFeaturesFragment.append(featureListItem);
    }
  });
  popupFeatures.innerHTML = '';
  popupFeatures.append(popupFeaturesFragment);

  const popupPhotos = popapElement.querySelector('.popup__photos');
  const popupPhoto = popupPhotos.querySelector('img');
  const popupPhotosFragment = document.createDocumentFragment();
  obj.offer.photos.forEach((photo) => {
    const photoListItem = popupPhoto.src = photo;
    if (photoListItem) {
      popupPhotosFragment.append(photoListItem);
    }
  });
  popupPhoto.innerHTML = '';
  popupPhoto.append(popupPhotosFragment);

  return popapElement;
};
mapCanvas.append(renderPopup(dataPopap));

