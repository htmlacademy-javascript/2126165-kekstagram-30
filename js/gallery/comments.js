const template = document.querySelector('#comment');
const container = document.querySelector('.social__comments');
const counter = document.querySelector('.social__comment-count');
const loader = document.querySelector('.comments-loader');

counter.classList.add('hidden'); // временно скрывает блок счётчика комментариев
loader.classList.add('hidden'); // временно скрывает блок загрузки новых комментариев

const createComment = (comments) => comments.map((properties) => {
  const {avatar, name, message} = properties;
  const comment = template.content.querySelector('.social__comment').cloneNode(true);
  comment.querySelector('.social__picture').src = avatar;
  comment.querySelector('.social__picture').alt = name;
  comment.querySelector('.social__text').textContent = message;
  return comment;
});

const renderComments = (comments) => {
  container.querySelectorAll('.social__comment').forEach((commentElement) => commentElement.remove());
  container.append(...createComment(comments));
};

export {renderComments};
