import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
const modal = document.querySelector(".basicLightbox");

function createImagesGallery() {
  gallery.classList.add("gallery");

  for (const item of galleryItems) {
    const htmlImageString = `<li class="gallery__item">
     <a class="gallery__link" href="${item.original}">
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
      const instance = basicLightbox.create(`
      <img src="${item.original}">`);
      instance.show();

      document.addEventListener("keydown", (event) => {
        if (event.code !== "Escape") {
          return;
        }
        instance.close();
      });
    }
  }
}

gallery.addEventListener("click", selectedImage);
