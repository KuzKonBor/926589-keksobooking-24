import {ResetForm} from './form-submit.js';

const getData = (success, onFail) => {
  fetch('https://24.javascript.pages.academy/keksobooking/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(`${response.status} ${response.statusText}`);
    })
    .then((offers) => {
      success(offers);
    })
    .catch((err) => {
      onFail(err);
    });
};


const sendData = (success, onFail, body) => {
  fetch('https://24.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body: new FormData(document.querySelector('.ad-form')),
    },
  )
    .then((response) => {
      if (response.ok) {
        ResetForm();
        return success();
      }
      throw new Error(`${response.status} ${response.statusText}`);
    })
    .catch((err) => {
      onFail(err);
    });
};
export {getData, sendData};
