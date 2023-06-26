import { galleryItems } from './gallery-items';


import SimpleLightbox from "simplelightbox";
console.log(SimpleLightbox);

import 'simplelightbox/dist/simple-lightbox.min.css';


const list = document.querySelector(".gallery");
list.style.listStyle = "none";

const markup = createPictureGalery(galleryItems);
list.insertAdjacentHTML('beforeend', markup);

function createPictureGalery (item){
return galleryItems.map(({preview, original, description}) =>{
    return`
    <li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>
    `  
}).join("");
}
var lightbox = new SimpleLightbox('.gallery a', 
  { captionsData: "alt", captionDelay: "250" })





