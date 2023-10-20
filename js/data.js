import {getRandomItem, getRandomInteger} from './utilities.js';

const createCommentsData = (itemCount) => {
  const messages = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
  const names = ['Александр', 'Виолетта', 'Джокер', 'Елена', 'Изабелла', 'Татьяна', 'Леонардо', 'Серафима', 'Максим', 'Флоренция', 'Пётр', 'Валентина', 'Рюрик', 'Любовь', 'Всеволод', 'Варвара'];

  return new Array(itemCount).fill(1).map((start, index) => ({
    id: start + index,
    avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
    message: getRandomItem(messages),
    name: getRandomItem(names)
  }));
};

const createPicturesData = (itemCount = 25) => {
  const descriptions = ['Это визуальная метафора, напоминающая нам о возможностях, которые в наших руках, и о том, что они бесконечны.', 'Это фотография о радости, игре и радуге эмоций, которые нас окружают в самые прекрасные дни.', 'На этой фотографии можно почувствовать, что каждый человек - это уникальный мир, полный историй и тайн', 'В этой фотографии запечатлено становление неповторимых воспоминаний.'];

  return new Array(itemCount).fill(1).map((start, index) => ({
    id: start + index,
    url: `photos/${start + index}.jpg`,
    description: getRandomItem(descriptions),
    likes: getRandomInteger(15, 200),
    comments: createCommentsData(getRandomInteger(0, 30))
  }));
};

export {createPicturesData};
