// import SimpleLightbox from "./";
import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
// console.log(galleryItems);
let htmlImageString = ``;
let images = document.querySelector(".gallery__image");
let imageTitleString = ``;

function createImagesGallery() {
  gallery.classList.add("gallery");
  // console.log(gallery.classList);
  for (const item of galleryItems) {
    htmlImageString = `<li>
     <a class="gallery__item" href="${item.original}">
        <img 
        class="gallery__image" 
        src="${item.preview}" 
        alt="${item.description}"
     />
     </a>
   </li>`;
    gallery.innerHTML += htmlImageString;
    ima
  }
}
//    title="${item.description}"
createImagesGallery();

function selectedImage(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  console.log(event.target.alt);
  let lightbox = new SimpleLightbox(".gallery a", {
    /* options */
  });
  _.debounce(() => {
    // const allImages = document.querySelectorAll(".gallery__image");
    // allImages.setAttribute("title", "jjjj");
    images.innerHTML += `title=""${item.description}`;
  }, 250);
}

gallery.addEventListener("click", selectedImage);

// console.log(simpleLightbox);
