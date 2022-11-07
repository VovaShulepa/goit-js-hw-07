import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

galleryEl.insertAdjacentHTML("beforeend", createGalleryItems(galleryItems));

function createGalleryItems(items) {
  return items
    .map(
      (item) => `  <li>
        <a class="gallery__item" href="${item.original}">
         <img
         class="gallery__image"
         src="${item.preview}"
         alt="${item.description}"
        />
        </a>
     </li>`
    )
    .join("");
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
