const avatarFileChooser = document.querySelector('#avatar');
const avatarPreview = document.querySelector('#avatar__preview');
const residenceFileChooser = document.querySelector('#images');
const residencePreview = document.querySelector('.ad-form__photo');

const DEFAULT_AVATAR_PREVIEW = avatarPreview.src;
const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const getPreviewUploadedFile = (fileChooser, preview) => {
  fileChooser.addEventListener('change', () => {
    const file = fileChooser.files[0];
    const fileName = file.name.toLowerCase();

    const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

    if (matches) {
      preview.src = URL.createObjectURL(file);
    }
  });
};

getPreviewUploadedFile(avatarFileChooser, avatarPreview);

residenceFileChooser.addEventListener('change', () => {
  residencePreview.innerHTML = '';
  const imgElement = document.createElement('img');
  imgElement.style.width = '70px';
  imgElement.style.height = '70px';

  const file = residenceFileChooser.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    imgElement.src = URL.createObjectURL(file);
  }

  residencePreview.appendChild(imgElement);
});

const resetUpload = () => {
  avatarPreview.src = DEFAULT_AVATAR_PREVIEW;
  residencePreview.innerHTML = '';
};

export {resetUpload};
