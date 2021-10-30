const MAX_VALUE = 1000000;
const price = document.querySelector('#price');
const type = document.querySelector('#type');
const minPrice = {
  'bungalow': 0,
  'flat': 1000,
  'hotel': 3000,
  'house': 5000,
  'palace':10000,
};

const onAppropriatePlaceholder = () => {
  price.placeholder = minPrice[type.value];
};

const onMessegePriceValue = () => {
  if (MAX_VALUE < price.value) {
    price.setCustomValidity(`Твоя щедрость не знает границ! Но сумма должна быть не больше ${MAX_VALUE} руб.
    за ночь. А то налоговая прижмёт!`);
  } else if (price.placeholder > price.value) {
    price.setCustomValidity(`Минимальная сумма за ночь ${price.placeholder} руб.`);
  } else {
    price.setCustomValidity('');
  }
  price.reportValidity();
};

const constMaxValue = () => {
  if (price.value < 0)  {
    price.value = 0;
  }
  else if (price.value > 1000000) {
    price.value = 1000000;
  }
  price.reportValidity();
};

type.addEventListener('change', onAppropriatePlaceholder);
price.addEventListener('input', onMessegePriceValue);
price.addEventListener('input', constMaxValue);
