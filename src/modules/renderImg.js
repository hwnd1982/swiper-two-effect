import getHash from "./getHash";

const renderImg = () => {
  document.querySelectorAll('img').forEach((img, index) => img.setAttribute(
    'src',
    `https://via.placeholder.com/1024x768/${getHash(6)}/${getHash(6)}/?text=Slide - ${index + 1}`));
};

export default renderImg;
