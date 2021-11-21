const adForm = document.querySelector('.ad-form');
const capacity = adForm.querySelector('#capacity');
const roomNumber = adForm.querySelector('#room_number');
const capacityOptions = capacity.querySelectorAll('option');
const roomsToCapacities = {
  1:['1'],
  2:['1', '2'],
  3:['1', '2', '3'],
  100:['0'],
};

const validateRoomSelect = () => {
  capacityOptions.forEach((option) => {
    option.selected = roomsToCapacities[roomNumber.value][0] === option.value;
    option.disabled = roomsToCapacities[roomNumber.value].indexOf(option.value) < 0;
    option.hidden = option.disabled;
  });
};

validateRoomSelect();

const onRoomSelectChange = () => {
  validateRoomSelect();
};

roomNumber.addEventListener('change', onRoomSelectChange);

export {adForm};
