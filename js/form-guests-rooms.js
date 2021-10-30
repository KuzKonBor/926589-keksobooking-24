const adForm = document.querySelector('.ad-form');
const guests = adForm.querySelector('#capacity');
const guestsOptions = guests.querySelectorAll('option');
const roomNumber = adForm.querySelector('#room_number');

const roomsGuest = {
  1:['1'],
  2:['1', '2'],
  3:['1', '2', '3'],
  100:['0'],
};

const onGuestRooms = () => {
  guestsOptions.forEach((guestsOption) => {
    guestsOption.selected = roomsGuest[roomNumber.value][0] === guestsOption.value;
    guestsOption.disabled = roomsGuest[roomNumber.value].indexOf(guestsOption.value) < 0;
    guestsOption.hidden = guestsOption.disabled;
  });
};

roomNumber.addEventListener('change', onGuestRooms);

