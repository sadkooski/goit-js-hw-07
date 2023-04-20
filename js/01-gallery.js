import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
console.log(galleryItems);

// gallery.addEventListener("click", modalImage);

// function modalImage()

function createImagesGallery() {
  // for (let i = 0; i < galleryItems.length - 1; i++)
  gallery.classList.add("gallery");
  console.log(gallery.classList);
  for (const item of galleryItems) {
    const htmlImageString = `<li class="gallery__item"><img class="gallery__image" src="${item.preview}" alt="${item.description}"></li>`;
    gallery.innerHTML += htmlImageString;
  }
}

createImagesGallery();
