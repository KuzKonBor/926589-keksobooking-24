import {disableToggle} from './form-disabled.js';
import {similarOffers} from './data.js';
import {getAddresInputValue, getAddres} from './form-addres.js';
import {renderPopup} from './popap-element.js';

const TOKIO = {
  lat: 35.68950,
  lng: 139.69200,
};
getAddresInputValue(getAddres(TOKIO));
const map = L.map('map-canvas')
  .on('load', () => {
    disableToggle();
  })

  .setView({
    lat: TOKIO.lat,
    lng: TOKIO.lng,
  },10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl:'img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor:[26, 52],
});

const mainMarker = L.marker(
  {
    lat: TOKIO.lat,
    lng: TOKIO.lng,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);
mainMarker.addTo(map);

mainMarker.on('moveend', (evt) => {
  getAddresInputValue(getAddres(evt.target.getLatLng()));
});

const otherPinIcon = L.icon({
  iconUrl:'img/pin.svg',
  iconSize: [40, 40],
  iconAnchor:[20, 40],
});


const layerGroup = L.layerGroup().addTo(map);
const drawAnotherPinIcon = (offers) => {
  offers.forEach((offer) => {
    L.marker (
      {
        lat:offer.location.lat,
        lng:offer.location.lng,
      },
      {
        icon: otherPinIcon,
        draggable: true,
      })
      .addTo(layerGroup)
      .bindPopup(renderPopup(offer));
  });

};

drawAnotherPinIcon(similarOffers);

export {drawAnotherPinIcon};

