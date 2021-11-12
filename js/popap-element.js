const card = document.querySelector('#card').content.querySelector('.popup');

const swihchType =  {
  'flat':'Квартира',
  'bungalow':'Бунгало',
  'house':'Дом',
  'palace':'Дворец',
  'hotel':'Отель',
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

  const getFeatures = () => {
    const popupFeatures = popapElement.querySelector('.popup__features');
    const popupFeatureList = popapElement.querySelectorAll('.popup__feature');
    const features = offer.offer.features;
    if(!features) {
      return popupFeatures.remove();
    } else {
      const modifiers = features.map((feature) => `popup__feature--${feature}`);
      popupFeatureList.forEach((popupFeatureListItem) => {
        const modifier = popupFeatureListItem.classList[1];
        if(!modifiers.includes(modifier)) {
          popupFeatureListItem.remove();
        }
      });
    }
  };
  getFeatures();

  const getPhotos = () => {
    const popupPhotos = popapElement.querySelector('.popup__photos');
    const popupPhoto = popupPhotos.querySelector('.popup__photo');
    const photos = offer.offer.photos;
    if(!photos) {
      return popupPhotos.remove();
    } else {
      popupPhotos.innerHTML = '';
      photos.forEach((photo) => {
        const clonePhoto = popupPhoto.cloneNode(true);
        clonePhoto.src = photo;
        popupPhotos.appendChild(clonePhoto);
      });
    }
  };
  getPhotos();
  return popapElement;
};

export {renderPopup};
