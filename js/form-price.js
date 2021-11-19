const MAX_VALUE = 1000000;
const price = document.querySelector('#price');
const type = document.querySelector('#type');

const PRICE_PLACEHOLDER = 1000;
const MIN_PRICE = {
  'bungalow': 0,
  'flat': 1000,
  'hotel': 3000,
  'house': 5000,
  'palace': 10000,
};

const onPlaceholderChange = () => {
  price.placeholder = MIN_PRICE[type.value];
};

const onPriceInput = () => {
  price.min = MIN_PRICE[type.value];
  price.placeholder = price.min;
  const priceValue = Number(price.value);
  const priceMin = Number(price.min);

  if (priceValue < priceMin) {
    price.setCustomValidity(`Минимальная сумма за ночь ${price.min} руб.`);
  }
  else if (priceValue > MAX_VALUE) {
    price.setCustomValidity(`Твоя щедрость не знает границ! Но сумма должна быть не больше ${MAX_VALUE} руб.
    за ночь. А то налоговая прижмёт!`);
  }
  else {price.setCustomValidity('');
    price.style = '';
  }
  price.reportValidity();
};

type.addEventListener('change', onPlaceholderChange);
price.addEventListener('input', onPriceInput);

export {PRICE_PLACEHOLDER, price};
