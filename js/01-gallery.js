import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
// console.log(galleryItems);

function createImagesGallery() {
  gallery.classList.add("gallery");
  // console.log(gallery.classList);

  for (const item of galleryItems) {
    const htmlImageString = `<li class="gallery__item"><img class="gallery__image" src="${item.preview}" alt="${item.description}"></li>`;
    gallery.innerHTML += htmlImageString;
  }
}

createImagesGallery();

function selectedImage(event) {
  if (event.target.nodeName !== "IMG") {
    return;
  }
  console.log(event.target.alt);

  for (const item of galleryItems) {
    if (event.target.alt === item.description) {
      const instance = basicLightbox.create(`
    <img src="${item.original}">`);
      instance.show();
      console.log(item.description);
    }
  }
}

gallery.addEventListener("click", selectedImage);

console.log(basicLightbox);
