const container = document.querySelector('.social__comments');
const template = document.querySelector('.social__comment');
const counter = document.querySelector('.social__comment-count');
const loader = document.querySelector('.comments-loader');

counter.classList.add('hidden'); // временно скрывает блок счётчика комментариев
loader.classList.add('hidden'); // временно скрывает блок загрузки новых комментариев

const createComments = (commentsData) => commentsData.map((properties) => {
  const {avatar, name, message} = properties;
  const comment = template.cloneNode(true);

  comment.querySelector('.social__picture').src = avatar;
  comment.querySelector('.social__picture').alt = name;
  comment.querySelector('.social__text').textContent = message;

  return comment;
});

const renderComments = (commentsData) => {
  container.replaceChildren(...createComments(commentsData));
};

export {renderComments};
