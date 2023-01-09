import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector(".gallery");
const images = galleryItems
    .map((image, index) => {
        const html = `<div class = "gallery__item">
    <a class = "gallery__link" href="${image.original}">
    <img loading="lazy" data-set="${image.original}" class="gallery__image" 
    src="${image.preview}"
    alt="${image.description}"
    data-index = "${index}"
    /></a></div>`;
        return html;
    })
    .join("");
galleryEl.insertAdjacentHTML('beforeend', images);

let currentIndex = 0;


const instance = basicLightbox.create(
    `
    <img src="" alt="" width = "1280" />
    `, {
    onShow: (instance) => {
        document.onkeydown = function (e) {
            if (e.key === "Escape" && instance.visible()) {
                instance.close();
                return;
            }
            if (e.key === "ArrowLeft" && instance.visible()) {
                /*  if (currentIndex === 0) currentIndex = galleryEl.length;
                  const elem = instance.element().querySelector("img");
                  const nodesImg = galleryEl.querySelectorAll('img');
                  const newImg = nodesImg[(Math.abs(currentIndex - 1)) % 9];
                  elem.src = newImg.dataset.set;
                  currentIndex = currentIndex - 1;*/
                currentIndex = currentIndex - 1;
                if (currentIndex === -1) currentIndex = galleryItems.length - 1;
                const elem = instance.element().querySelector("img");
                elem.src = galleryItems[currentIndex].original;

            }
            if (e.key === "ArrowRight" && instance.visible()) {
                currentIndex = currentIndex + 1;
                if (currentIndex === galleryItems.length) currentIndex = 0;
                const elem = instance.element().querySelector("img");
                elem.src = galleryItems[currentIndex].original;

                /* if (currentIndex === galleryEl.length) currentIndex = 0;
                 const elem = instance.element().querySelector("img");
                 const nodesImg = galleryEl.querySelectorAll('img');
                 const newImg = nodesImg[(Math.abs(currentIndex + 1)) % 9];
                 elem.src = newImg.dataset.set;
                 currentIndex = currentIndex + 1;*/
            }
        }
    },
    onClose: (instance) => { document.onkeydown = '' },
}
);


galleryEl.addEventListener("click", (event) => {
    if (event.target.tagName !== 'IMG') return;
    //  console.log(event.target.outerHTML);
    event.preventDefault();
    console.log(event.target.dataset.set);
    const elem = instance.element().querySelector("img");
    elem.src = event.target.dataset.set;
    elem.alt = event.target.alt;
    currentIndex = Number(event.target.dataset.index);
    instance.show();
})





console.log(galleryItems);