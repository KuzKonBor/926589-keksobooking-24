const getRandomNumber = (minimumValue, maximumValue) => {
  if(maximumValue <= minimumValue) {
    maximumValue = minimumValue + 1;
  }
  return Math.floor(Math.random() * (maximumValue - minimumValue + 1)) + minimumValue;
}
console.log(getRandomNumber(0, 100));


const getRandomСoordinates = (minimumValue, maximumValue, afterTheComma) => {
  if(maximumValue <= minimumValue){
    maximumValue = minimumValue + 0.1;
  }
  let randomСoordinates = Math.random() * (maximumValue - minimumValue + 1) + minimumValue;
  return Number(randomСoordinates.toFixed(afterTheComma));
}
console.log(getRandomСoordinates(0, 100, 2));
console.log(typeof getRandomСoordinates(0, 100, 2));

