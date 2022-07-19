const hamburger = document.querySelector('.hamburger');
const open = document.querySelector('.mobile-menu');
const close = document.querySelector('.close-menu');
const list = document.querySelectorAll('.menu-text');
hamburger.addEventListener('click', () => {
  open.classList.toggle('hide');
});
close.addEventListener('click', () => {
  open.classList.toggle('hide');
});
list.forEach((item) => {
  item.addEventListener('click', () => {
    open.classList.toggle('hide');
  });
});