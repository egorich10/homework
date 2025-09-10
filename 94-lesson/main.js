const modal = document.querySelector('.modal');
const openBtn = document.querySelector('.btn-open');
const closeBtn = document.querySelector('.modal__close-btn');

openBtn.addEventListener('click', () => {
    modal.classList.add('modal--active');
});

closeBtn.addEventListener('click', () => {
    modal.classList.remove('modal--active');
});