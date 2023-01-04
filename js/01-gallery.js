import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector(".gallery");
const images = galleryItems
    .map((image) => {
        const html = `<div class = "gallery__item">
    <a class = "gallery__link" href="${image.original}">
    <img loading="lazy" class="gallery__image" 
    src="${image.preview}"
    alt="${image.description}"/></a></div>`;
        return html;
    })
    .join("");
galleryEl.insertAdjacentHTML('beforeend', images);


galleryEl.addEventListener("click", (event) => {
    if (event.target.tagName !== 'IMG') return;
    event.preventDefault();
    let instance = basicLightbox.create(
        `<img loading="lazy" src="${event.target.parentNode.href}" alt = "${event.target.alt}" />`);
    instance.show();
    document.onkeydown = '';
    document.onkeydown = function (e) {
        if (e.key === "Escape" && instance.visible()) {
            instance.close();
            document.onkeydown = '';
        }
    };
})





console.log(galleryItems);
