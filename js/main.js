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


