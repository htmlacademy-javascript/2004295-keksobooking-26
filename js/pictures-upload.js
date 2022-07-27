const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
const DEFAULT_PREVIEW_SIZE = '70px';

const avatarFileChooserElement = document.querySelector('#avatar');
const avatarPreviewElement = document.querySelector('#avatar__preview');
const residenceFileChooserElement = document.querySelector('#images');
const residencePreviewElement = document.querySelector('.ad-form__photo');
const defaultAvatarPreview = avatarPreviewElement.src;

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

getPreviewUploadedFile(avatarFileChooserElement, avatarPreviewElement);

residenceFileChooserElement.addEventListener('change', () => {
  residencePreviewElement.innerHTML = '';
  const imgElement = document.createElement('img');
  imgElement.style.width = DEFAULT_PREVIEW_SIZE;
  imgElement.style.height = DEFAULT_PREVIEW_SIZE;

  const file = residenceFileChooserElement.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    imgElement.src = URL.createObjectURL(file);
  }

  residencePreviewElement.appendChild(imgElement);
});

const resetUpload = () => {
  avatarPreviewElement.src = defaultAvatarPreview;
  residencePreviewElement.innerHTML = '';
};

export {resetUpload};
