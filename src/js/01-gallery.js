// import { galleryItems } from './gallery-items';
// // Change code below this line


// import SimpleLightbox from "simplelightbox";
// console.log(SimpleLightbox);
// // Додатковий імпорт стилів
// import "simplelightbox/dist/simple-lightbox.min.css";

// const list = document.querySelector(".gallery");
// list.style.listStyle = "none";

// const markup = createPictureGalery(galleryItems);

// function createPictureGalery (item){
// return galleryItems.map(({preview, original, description}) =>{
//     return`
//     <li class="gallery__item">
//     <a class="gallery__link" href="${original}">\
//     <img class="gallery__image" src="${preview}" alt="${description}" />
//     </a>
//     </li>`  
// }).join("");
// }    
//   var lightbox = new SimpleLightbox('.gallery a', 
//     { captionsData: "alt", captionDelay: "250" })





// import { galleryItems } from './gallery-items.js';
// import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';

// const galleryEl = document.querySelector('.gallery');
// const galleryList = galleryItems
//   .map(item => {
//     return `<li class="gallery__item">
//    <a class="gallery__link" href=${item.original}>
//       <img class="gallery__image" src=${item.preview} alt=${item.description} />
//    </a>
// </li>`;
//   })
//   .join('');

// galleryEl.innerHTML = galleryList;
// galleryEl.style.cssText = `list-style: none`;

// var lightbox = new SimpleLightbox('.gallery a', {
//   captionsData: 'alt',
//   captionDelay: 250,
//   showCounter: false,
//   close: false,
// });
// -------------------------------------------------
import { galleryItems } from './gallery-items.js';
// Change code below this line

const list = document.querySelector(".gallery");

const markup = galleryItems
  .map(({ preview, original, description }) => {
    return `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image"
       src="${preview}" 
       alt="${description}"/>
   </a>
</li>`
  })
  .join("");

list.innerHTML = markup;
list.style.cssText = `list-style: none`;

var lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",    
    captionDelay: 250
});

console.log(galleryItems);

  





