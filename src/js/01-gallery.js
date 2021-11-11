// Add imports above this line
import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line
const gallerySL = document.querySelector('.gallery');
gallerySL.innerHTML = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<div class="gallery__item">
      <a href="${original}" class="gallery__link">
    <img src="${preview}" alt="${description}" class="gallery__image"></a>
    </div>`
  )
  .join('');
let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
console.log(galleryItems);
