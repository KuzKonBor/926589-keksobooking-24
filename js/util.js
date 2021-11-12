
const getRandomNumber = (minimumValue, maximumValue) => {
  if(maximumValue <= minimumValue) {
    throw new Error('Минимальное число, должно быть больше максимального.');
  }
  return Math.floor(Math.random() * (maximumValue - minimumValue + 1)) + minimumValue;
};

const getShuffledItems = (items) => (items.slice().sort(() => 0.5 - Math.random()));

const getRandomItems = (items) => {
  const randomIndex = getRandomNumber(1, items.length);
  return getShuffledItems(items).slice(0, randomIndex);
};

export {getRandomNumber, getShuffledItems, getRandomItems};
