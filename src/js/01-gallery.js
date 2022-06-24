// Add imports above this line
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items';
// Change code below this line
const galleryRef = document.querySelector('.gallery');

const images = galleryItems.map(({ preview, description, original }) => {
  return `<div class="gallery">
  <a href=${original}>
    <img src=${preview} alt=${description} title=${description} />
  </a>
</div>`;
});

const image = images.join(' ');

galleryRef.insertAdjacentHTML('afterbegin', image);
console.log(image);

let gallery = new SimpleLightbox('.gallery a');
gallery.on('show.simplelightbox', function () {
  console.log(gallery);
});

gallery.on('error.simplelightbox', function (e) {
  console.log(e);
});

console.log(galleryItems);
//
