import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
// console.log(galleryItems);

function createImagesGallery() {
  gallery.classList.add("gallery");
  // console.log(gallery.classList);
  for (const item of galleryItems) {
    const htmlImageString = `<li class="gallery__link">
     <a class="gallery__item" href="${item.original}">
        <img 
        class="gallery__image" 
        src="${item.preview}" 
        data-source="${item.original}"  

        alt="${item.description}" />
     </a>
   </li>`;
    gallery.innerHTML += htmlImageString;
  }
}

createImagesGallery();

function selectedImage(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  console.log(event.target.alt);

  for (const item of galleryItems) {
    if (event.target.alt === item.description) {
      let lightbox = simpleLightbox.create(`<img src="${item.original}">`);
      lightbox.show();
      //   const instance = simpleLightbox.create(`
      // `);

      console.log(item.description);
    }
  }
}

gallery.addEventListener("click", selectedImage);

console.log(simpleLightbox);
