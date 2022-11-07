import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

const createGalleryItems = () => {
  const img = galleryItems
    .map(
      (item) => ` 
        <a class="gallery__item" href="${item.original}">
         <img
         class="gallery__image"
         src="${item.preview}"
         alt="${item.description}"/>
        </a>`
    )
    .join("");
  galleryEl.innerHTML = img;
};

createGalleryItems();

let lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
});
