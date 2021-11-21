const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
const BASE_IMG_AVATAR = 'img/muffin-grey.svg';

const avatarInput = document.querySelector('.ad-form__field input[type="file"]');
const avatarPreview = document.querySelector('.ad-form-header__preview img');
const photoInput = document.querySelector('.ad-form__upload input[type="file"]');
const photoPreview = document.querySelector('.ad-form__photo');

const onAvatarInputChange = () => {
  const file = avatarInput.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((fileType) => fileName.endsWith(fileType));

  if (matches) {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      avatarPreview.src = reader.result;
    });

    reader.readAsDataURL(file);
  }
};

const onPhotoInputChange = () => {
  const file = photoInput.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((fileType) => fileName.endsWith(fileType));

  if (matches) {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      photoPreview.style.background = `url(${reader.result}`;
      photoPreview.style.backgroundSize = 'cover';
      photoPreview.style.backgroundRepeat = 'no-repeat';
    });

    reader.readAsDataURL(file);
  }
};

const resetImages = () => {
  avatarPreview.src = BASE_IMG_AVATAR;
  photoPreview.style.background = '';
};

avatarInput.addEventListener('change', onAvatarInputChange);
photoInput.addEventListener('change', onPhotoInputChange);

export {resetImages};
