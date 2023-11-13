import {debounce} from '../utilities';

const container = document.querySelector('.img-filters');

const renderFilters = () => {
  container.classList.remove('img-filters--inactive');

  container.addEventListener('click', debounce((event) => {
    container.querySelectorAll('.img-filters__button--active').forEach((button) => {
      button.classList.remove('img-filters__button--active');
    });

    event.target.classList.toggle('img-filters__button--active');
  }));
};

export {renderFilters};
