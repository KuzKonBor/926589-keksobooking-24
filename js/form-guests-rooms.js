const adForm = document.querySelector('.ad-form');
const capacityNode = adForm.querySelector('#capacity');
const roomNumberNode = adForm.querySelector('#room_number');

const roomsToCapacities = {
  1:['1'],
  2:['1', '2'],
  3:['1', '2', '3'],
  100:['0'],
};

const onСheckingСapacity = () => {
  const roomNumber = roomNumberNode.value;
  const capacityNumber = capacityNode.value;
  capacityNode.setCustomValidity(roomsToCapacities[roomNumber].includes(capacityNumber) ? '' : 'Количество гостей больше чем комнат');
};

roomNumberNode.addEventListener('change', onСheckingСapacity);
capacityNode.addEventListener('change', onСheckingСapacity);

export {adForm};
