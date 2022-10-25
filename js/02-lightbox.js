import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallaryContainer = document.querySelector(".gallery");
const cardsMarkup = createColorCardsMarkup(galleryItems);

gallaryContainer.insertAdjacentHTML("beforeend", cardsMarkup);
gallaryContainer.addEventListener("click", onGallaryContainerClick);

const lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  enableKeyboard: true,
});

function createColorCardsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}"
       alt="${description}"
       title="${description}"/>
    </a> `;
    })
    .join("");
}

function onGallaryContainerClick(e) {
  e.preventDefault();
}
