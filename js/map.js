import {getPopupType, getPopupFeatures, getPopupPhotos, popap, popupFeatures, popupPhotos} from './util.js';
import {getAvatar} from './data.js';

const basicData = (offer) => {
  popap.querySelector('.popup__title').textContent = offer.title;
  popap.querySelector('.popup__text--address').textContent = offer.address;
  popap.querySelector('.popup__text--price').textContent = `${offer.price  }₽/ночь.`;
  popap.querySelector('.popup__type').textContent = getPopupType(offer.type);
  popap.querySelector('.popup__text--capacity').textContent = `${offer.rooms} 'комнаты для' ${offer.guests} 'гостей.'`;
  popap.querySelector('.popup__text--time').textContent = `'Заезд после' ${offer.checkin} ', выезд до' ${offer.checkout}`;
  popap.querySelector('.popup__description').textContent = offer.description;
  popap.querySelector('.popup__avatar').src = getAvatar();
  popupFeatures.textContent = getPopupFeatures();
  popupPhotos.src = getPopupPhotos();

};
