const getRandomNumber = (MinimumValue, MaximumValue) => {
  if(MaximumValue <= MinimumValue) {
    MaximumValue = MinimumValue + 1;
  }
  return Math.floor(Math.random() * (MaximumValue - MinimumValue + 1)) + MinimumValue;
}
console.log(getRandomNumber(0, 100));


const getRandomСoordinates = (MinimumValue, MaximumValue, afterTheComma) => {
  if(MaximumValue <= MinimumValue){
    MaximumValue = MinimumValue + 0.1;
  }
  let RandomСoordinates = Math.random() * (MaximumValue - MinimumValue + 1) + MinimumValue;
  return RandomСoordinates.toFixed(afterTheComma);
}
console.log(getRandomСoordinates(0, 100, 2));

