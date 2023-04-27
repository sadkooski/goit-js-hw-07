import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");

function createImagesGallery() {
  gallery.classList.add("gallery");
  // console.log(gallery.classList);
  for (const item of galleryItems) {
    let htmlImageString = `<li>
     <a class="gallery__item" href="${item.original}">
        <img 
        class="gallery__image" 
        src="${item.preview}" 
        alt="${item.description}"
        title="${item.description}"
     />
     </a>
   </li>`;
    gallery.innerHTML += htmlImageString;
  }
}
//
createImagesGallery();

new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: "alt",
});

// function selectedImage(event) {
//   event.preventDefault();
//   if (event.target.nodeName !== "IMG") {
//     return;
//   }
//   console.log(event.target.alt);
// }

// gallery.addEventListener("click", selectedImage);
