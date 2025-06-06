const openBtn = document.querySelector('#open-modal');
const dialog = document.querySelector('#dialog');
const closeBtn = document.querySelector('#close-modal');

openBtn.addEventListener('click', () => dialog.showModal());
closeBtn.addEventListener('click', () => dialog.close());
