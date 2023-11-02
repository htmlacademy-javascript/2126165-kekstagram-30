const container = document.querySelector('.social__comments');
const template = document.querySelector('.social__comment');
const shownCounter = document.querySelector('.social__comment-shown-count');
const totalCounter = document.querySelector('.social__comment-total-count');
const loaderButton = document.querySelector('.social__comments-loader');
const stepOfDisplayedComments = 5;

const createComments = (commentsData) => commentsData.map((properties) => {
  const {avatar, name, message} = properties;
  const comment = template.cloneNode(true);

  comment.querySelector('.social__picture').src = avatar;
  comment.querySelector('.social__picture').alt = name;
  comment.querySelector('.social__text').textContent = message;

  return comment;
});

let currentCommentsData = [];

const onLoaderButtonClick = () => {
  container.append(...createComments(currentCommentsData.splice(0, stepOfDisplayedComments)));
  shownCounter.textContent = container.querySelectorAll('.social__comment').length;

  if (currentCommentsData.length === 0) {
    loaderButton.classList.add('hidden');
  }
};

const renderComments = (commentsData) => {
  currentCommentsData = structuredClone(commentsData);
  totalCounter.textContent = commentsData.length;

  if (currentCommentsData.length <= stepOfDisplayedComments) {
    container.replaceChildren(...createComments(currentCommentsData));
    shownCounter.textContent = currentCommentsData.length;
    loaderButton.classList.add('hidden');
  } else {
    container.replaceChildren(...createComments(currentCommentsData.splice(0, stepOfDisplayedComments)));
    shownCounter.textContent = stepOfDisplayedComments;
    loaderButton.classList.remove('hidden');
    loaderButton.addEventListener('click', onLoaderButtonClick);
  }
};

export {renderComments};
