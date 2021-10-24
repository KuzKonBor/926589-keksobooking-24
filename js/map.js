const mapCanvas = document.querySelector('.map__canvas');
const card = document.querySelector('#card').content.querySelector('.popup');

const swihchType =  {
  'flat':'Квартира',
  'bungalow':'Бунгало',
  'house':'Дом',
  'palace':'Дворец',
  'hotel':'Отель',
  'default':'Буду бомжевать!',
};

const renderPopup = (offer) => {
  const popapElement = card.cloneNode(true);

  popapElement.querySelector('.popup__title').textContent = offer.offer.title;
  popapElement.querySelector('.popup__text--address').textContent = offer.offer.address;
  popapElement.querySelector('.popup__text--price').textContent = `${offer.offer.price}₽/ночь.`;
  popapElement.querySelector('.popup__type').textContent = swihchType[offer.offer.type];
  popapElement.querySelector('.popup__text--capacity').textContent = `${offer.offer.rooms} комнаты, для ${offer.offer.guests} гостей.`;
  popapElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.offer.checkin} , выезд до ${offer.offer.checkout}.`;
  popapElement.querySelector('.popup__description').textContent = offer.offer.description;
  popapElement.querySelector('.popup__avatar').src = offer.author.avatar;

  const popupFeatures = popapElement.querySelector('.popup__features');
  const popupFeaturesFragment = document.createDocumentFragment();
  offer.offer.features.forEach((feature) => {
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
  offer.offer.photos.forEach((photo) => {
    const photoListItem = popupPhoto.src = photo;
    if (photoListItem) {
      popupPhotosFragment.append(photoListItem);
    }
  });
  popupPhoto.innerHTML = '';
  popupPhoto.append(popupPhotosFragment);
  return popapElement;
};

export {renderPopup, mapCanvas};

