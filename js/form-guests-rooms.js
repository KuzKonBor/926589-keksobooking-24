const adForm = document.querySelector('.ad-form');
const capacityNode = adForm.querySelector('#capacity');
const roomNumberNode = adForm.querySelector('#room_number');
const capacityOptions = capacityNode.querySelectorAll('option');
const roomsToCapacities = {
  1:['1'],
  2:['1', '2'],
  3:['1', '2', '3'],
  100:['0'],
};

const validateRoomSelect = () => {
  capacityOptions.forEach((option) => {
    option.selected = roomsToCapacities[roomNumberNode.value][0] === option.value;
    option.disabled = roomsToCapacities[roomNumberNode.value].indexOf(option.value) < 0;
    option.hidden = option.disabled;
  });
};

validateRoomSelect();

const onRoomSelectChange = () => {
  validateRoomSelect();
};

roomNumberNode.addEventListener('change', onRoomSelectChange);

export {adForm};
