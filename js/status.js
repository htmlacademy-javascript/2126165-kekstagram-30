const timeToShowMessage = 5000;

const renderStatus = (statusType) => {
  const message = document.querySelector(`#${statusType}`)
    .content
    .querySelector(`.${statusType}`)
    .cloneNode(true);

  document.body.appendChild(message);

  const closeMessage = () => {
    message.remove();
  };

  if (statusType === 'data-error') {
    setTimeout(() => {
      closeMessage();
    }, timeToShowMessage);
  } else {
    message.querySelector(`.${statusType}__button`).addEventListener('click', () => {
      closeMessage();
    });

    document.addEventListener('keydown', (event) => {
      if (event.key.startsWith('Esc')) {
        event.stopPropagation();
        closeMessage();
      }
    }, true);

    document.addEventListener('click', (event) => {
      if (event.target === message) {
        closeMessage();
      }
    });
  }
};

export {renderStatus};
