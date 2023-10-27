const template = document.querySelector('#picture');
const container = document.querySelector('.pictures');

const createThumbnails = (picturesData) => picturesData.map((properties) => {
  const {url, description, likes, comments} = properties;
  const thumbnail = template.content.querySelector('.picture').cloneNode(true);
  thumbnail.querySelector('.picture__img').src = url;
  thumbnail.querySelector('.picture__img').alt = description;
  thumbnail.querySelector('.picture__comments').textContent = comments.length;
  thumbnail.querySelector('.picture__likes').textContent = likes;
  return thumbnail;
});

const renderThumbnails = (picturesData) => {
  container.querySelectorAll('.picture').forEach((thumbnail) => thumbnail.remove());
  container.append(...createThumbnails(picturesData));
};

export {renderThumbnails};
