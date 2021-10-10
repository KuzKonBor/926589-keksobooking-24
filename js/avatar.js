import {getRandomNumber} from './random';

const getAvatar = () => {
  const avatarId = getRandomNumber(1, 9);
  const author = {
    avatar: `img/avatars/user0${avatarId}.png`};
  return author;
};

export {getAvatar};
