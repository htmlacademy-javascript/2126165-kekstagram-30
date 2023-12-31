const renderStatus = (type, options = {}) => {
  const template = document.querySelector(`#${type}`);
  const status = template.content.querySelector(`.${type}`).cloneNode(true);

  document.body.appendChild(status);

  const onDocumentKeydown = (event) => {
    if (event.key.startsWith('Esc')) {
      status.click();
      event.stopPropagation();
    }
  };

  const onStatusClick = (event) => {
    if (event.target.matches(`.${type}, .${type}__button`)) {
      status.remove();
      document.removeEventListener('keydown', onDocumentKeydown, {capture: true});
    }
  };

  if (options.autoHide) {
    window.setTimeout(() => status.remove(), options.autoHide);
  } else {
    status.addEventListener('click', onStatusClick);
    document.addEventListener('keydown', onDocumentKeydown, {capture: true});
  }
};

export {renderStatus};
