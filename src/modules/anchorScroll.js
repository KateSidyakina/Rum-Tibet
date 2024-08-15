const anchors = document.querySelectorAll('a[href*="#"]');

for (const anchor of anchors) {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();

    const blockID = anchor.getAttribute('href').substring(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
}
