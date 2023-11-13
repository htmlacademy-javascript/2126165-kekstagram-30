const applyFilters = (array, type, quantity = 10) => {
  switch (type) {
    case 'filter-default':
      return array.slice().sort((a, b) => a.id - b.id);
    case 'filter-random':
      return array.slice().sort(() => Math.random() - .5).slice(0, quantity);
    case 'filter-discussed':
      return array.slice().sort((a, b) => b.comments.length - a.comments.length);
  }
};

export {applyFilters};
