const getRandomItem = (items) => {
  const fraction = items.length * Math.random();
  const index = Math.floor(fraction);
  return items[index];
};

const getRandomInteger = (min, max) => {
  const fraction = (max - min) * Math.random() + min;
  return Math.round(fraction);
};

const getUnique = (array) => array.filter((element, index) => index === array.indexOf(element));

export {getRandomItem, getRandomInteger, getUnique};
