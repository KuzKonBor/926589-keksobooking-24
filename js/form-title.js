const MAX_TITLE_LENGTH = 100;
const MIN_TITLE_LENGTH = 30;
const title = document.querySelector('#title');


const onTitleValidity = () => {
  const valueLength = title.value.length;

  if (valueLength < MIN_TITLE_LENGTH) {
    title.setCustomValidity(`Нет братан, должнобыть не меньше ${MIN_TITLE_LENGTH} символов.`);
  } else if (valueLength > MAX_TITLE_LENGTH) {
    title.setCustomValidity(`Снова ошибочка братуха, должнобыть не больше ${MAX_TITLE_LENGTH} символов.`);
  } else {
    title.setCustomValidity('');
  }
  title.reportValidity();
};

title.addEventListener('input', onTitleValidity);
