import {renderThumbnails} from './thumbnails.js';
import {renderPopup} from './popup.js';
import {renderFilters} from './filters.js';
import {applyFilters} from './data.js';

const renderGallery = (picturesData) => {
  renderFilters();
  renderThumbnails(picturesData);

  document.addEventListener('filterSelect', (event) => {
    renderThumbnails(applyFilters(picturesData, event.detail));
  });

  document.addEventListener('thumbnailSelect', (event) => {
    renderPopup(event.detail);
  });
};

export {renderGallery};
