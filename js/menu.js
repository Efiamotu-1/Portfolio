const hamburger = document.querySelector('.hamburger');
const ul = document.querySelector('.nav-active')
const envelope = document.querySelector('.mail')
const showClose = document.querySelector('.show-close-menu')
const open = document.querySelector('.nav');
const close = document.querySelector('.close-menu');
const list = document.querySelectorAll('.nav-links');

let showMenu = () => {

  open.classList.toggle('nav');
  open.classList.toggle('mobile-menu');
  ul.classList.toggle('menu')
  showClose.classList.toggle('menu-img')
  envelope.style.display = 'none'
  list.forEach((item) => {
    item.classList.toggle('nav-links')
    item.classList.toggle('menu-text')    
    });
}

let closeMenu = () => {
  open.classList.toggle('nav');
  open.classList.toggle('mobile-menu');
  ul.classList.toggle('menu')
  showClose.classList.toggle('menu-img')
  envelope.style.display = 'block'
  list.forEach((item) => {
    item.classList.toggle('nav-links')
    item.classList.toggle('menu-text')    
    });
}

hamburger.addEventListener('click', showMenu)

close.addEventListener('click', closeMenu);

list.forEach((item) => {
  item.addEventListener('click', closeMenu);
});