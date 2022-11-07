import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);

// Gallery

const divEl = document.querySelector(".gallery");

function createGalleryItems(items) {
  return items
    .map(
      (item) => ` <div class="gallery__item">
        <a class="gallery__link" href="${item.original}">
         <img
         class="gallery__image"
         src="${item.preview}"
         data-source="${item.original}"
         alt="${item.description}"/>
        </a>
    </div>`
    )
    .join("");
}

const addGalleryItems = createGalleryItems(galleryItems);

divEl.innerHTML = addGalleryItems;
divEl.addEventListener("click", onImageClick);

function onImageClick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" alt="${evt.target.alt}" width="800" height="600">
`);
  instance.show();
  window.addEventListener("keydown", onKeyPress);

  // Close the lightbox
  function onKeyPress(evt) {
    if (evt.code === "Escape") {
      window.removeEventListener("keydown", onKeyPress);
      instance.close();
    }
  }
}
