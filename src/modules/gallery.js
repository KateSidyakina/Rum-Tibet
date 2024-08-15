import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import photo1 from '../img/photo/photo-1.jpg';
import photo2 from '../img/photo/photo-2.jpg';
import photo3 from '../img/photo/photo-3.jpg';
import photo4 from '../img/photo/photo-4.jpg';
import photo5 from '../img/photo/photo-5.jpg';
import photo6 from '../img/photo/photo-6.jpg';

const photos = [photo1, photo2, photo3, photo4, photo5, photo6];

Fancybox.bind('[data-fancybox]', {});

photos.forEach((photo) => {
  document.querySelector('.gallery').insertAdjacentHTML('beforeend', `
    <a href="${photo}" data-fancybox="gallery" class="gallery__item">
      <img class="gallery__image" src="${photo}" alt="">
    </a>
  `);
});
