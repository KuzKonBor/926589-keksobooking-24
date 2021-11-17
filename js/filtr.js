const mapFilters = document.querySelector('.map__filters');

const DEFAULT_VALUE = 'any';

const PriceLevel = {
  LOW: {
    MAX: 10000,
  },
  MIDDLE: {
    MIN: 10000,
    MAX: 50000,
  },
  HIGH: {
    MIN: 50000,
  },
};

const typeFilters = (offer) => {
  const offerType = offer.offer.type;
  const  housingType = mapFilters.querySelector('#housing-type').value;
  return housingType === offerType || housingType === DEFAULT_VALUE;
};

const roomsFilters = (offer) => {
  const offerRooms = offer.offer.rooms;
  const housingRooms = mapFilters.querySelector('#housing-rooms').value;
  return housingRooms === offerRooms.toString() || housingRooms === DEFAULT_VALUE;
};


const guestsFilters = (offer) => {
  const offerGuests = offer.offer.guests;
  const housingGuests = mapFilters.querySelector('#housing-guests').value;
  return housingGuests === offerGuests.toString() || housingGuests === DEFAULT_VALUE;
};


const filterPrice = (offer) => {
  const housingPrice = mapFilters.querySelector('#housing-price').value;
  switch (housingPrice) {
    case 'low': return offer.offer.price < PriceLevel.LOW.MAX;
    case 'middle': return offer.offer.price >= PriceLevel.MIDDLE.MIN && offer.offer.price < PriceLevel.MIDDLE.MAX;
    case 'high': return offer.offer.price >= PriceLevel.HIGH.MIN;
    case 'any': return true;
    default: return false;
  }
};

const filterFeatures = (offer) => {
  const selectedFeatures = Array.from(mapFilters.querySelectorAll('#housing-features input:checked'));
  if (!offer.offer.features) {
    return false;
  }
  const featuresValues = selectedFeatures.map((element) => element.value);
  const filter = featuresValues.filter((item) => offer.offer.features.includes(item));
  return featuresValues.length === filter.length;
};

export {filterFeatures, typeFilters, roomsFilters, guestsFilters, mapFilters, filterPrice};
