import menu from './menu';

const galleryRef = document.querySelector('.js-menu')//отримуємо лінк на список куди будем рендерити розмітку

galleryRef.insertAdjacentHTML('beforeend', galleryMarkup(menu))//рендеримо розмітку
// galleryRef.innerHTML = galleryMarkup(menu)//рендиремо розмітку

galleryMarkup(menu)

function galleryMarkup(menu) {
    // console.log(menu)
    return menu.map(el => {
        return `<li class="menu__item">
                 <article class="card">
                 <img src="${el.image}" alt="${el.name}" class="card__image"/>
             <div class="card__content">
                 <h2 class="card__name">${el.name}</h2>
                 <p class="card__price"> <i class="material-icons"> monetization_on </i> ${el.price}</p>
                 <p class="card__descr">
                 ${el.description}
                 </p>

             <ul class="tag-list">
                 <li class="tag-list__item">Картопля</li>
                 <li class="tag-list__item">Часник</li>
                 <li class="tag-list__item">Сметана</li>
                 <li class="tag-list__item">Бекон</li>
                 <li class="tag-list__item">Твердий сир</li>
                 <li class="tag-list__item">Зелена цибуля</li>
             </ul>
             </div>

             <button class="card__button button">
                 <i class="material-icons button__icon"> shopping_cart </i>
             В корзину
             </button>
             </article>
             </li>`}).join('')
}









// function createGalleryListMarkup(gallery) {//ф-ція створення розмітки

//     return gallery.map(({preview, original, description}) => {
//         return `
//         <li class="gallery__item">
//             <a class="gallery__link"
//                 href="${preview}">
//                 <img class="gallery__image"
//                     src="${original}"
//                     data-source="${original}"
//                     alt="${description}"/>
//              </a>
//         </li>`
//     }).join('')
// }