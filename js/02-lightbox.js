import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector(".gallery");
const images = galleryItems
    .map((image) => {
        const html = `<li class = "gallery__link">
    <a class = "gallery__item" href="${image.original}">
    <img class="gallery__image" 
    src="${image.preview}"
    alt="${image.description}" /></a></li>`;
        return html;
    })
    .join("");
galleryEl.insertAdjacentHTML('beforeend', images);

var lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250, captionsData: "alt" });



console.log(galleryItems);
