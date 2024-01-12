/* Мобильная навигация */

const nav = document.querySelector('.nav');
const navToggle = document.querySelector('.nav__toggle');

nav.classList.remove('nav--no-js');
navToggle.classList.remove('nav__toggle--no-js');

navToggle.addEventListener('click', () => {
  if (nav.classList.contains('nav--closed')) {
    nav.classList.remove('nav--closed');
    nav.classList.add('nav--opened');
  } else {
    nav.classList.add('nav--closed');
    nav.classList.remove('nav--opened');
  }
});
