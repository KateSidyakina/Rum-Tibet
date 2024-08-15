const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 1) {
    header.classList.add('header_scrolling');
  } else {
    header.classList.remove('header_scrolling');
  }
});
