// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

import SimpleLightbox from "simplelightbox";
console.log(SimpleLightbox);
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

const list = document.querySelector(".gallery");
list.style.listStyle = "none";
const markup = galleryItems
  .map(
    ({ preview, original, description }) => 
    `<li class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
)
    .join('');
  
list.insertAdjacentHTML('beforeend', markup)
list.addEventListener("click", (onClick));

function onClick(event) {
    
  event.preventDefault()
  if (event.target.nodeName !== 'IMG'){
   return
  }
    
  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}">
  `)
  instance.show()     
}
  console.log(galleryItems);

// const galleryEl = document.querySelector(".gallery");
// galleryEl.style.listStyle = "none";

// const pictureCards = createPictureGalery(galleryItems);
// galleryEl.insertAdjacentHTML('beforeend', pictureCards);

// function createPictureGalery (item){
// return galleryItems.map(({preview, original, description}) =>{
//     return`
//     <li class="gallery__item">
//    <a class="gallery__link" href="${original}">
//       <img class="gallery__image" src="${preview}" alt="${description}" />
//    </a>
// </li>
//     `  
// }).join("");
// }
// var lightbox = new SimpleLightbox('.gallery a', 
// {captionsData: "alt", captionDelay: "250"})


