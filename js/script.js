/* heart-like show starts */
let heart = document.querySelector('.header .header-right .heart');
let heartLike = document.querySelector('.header .heart-like');

heart.onclick = () =>{
    heartLike.classList.toggle('active');
    addToCart.classList.remove('active');
    prifileMedia.classList.remove('active');
    categories.classList.remove('active');
}
/* heart-like show ends */


/* shopping-cart show starts */
let shoppingCart = document.querySelector('.header .header-right .shopping-cart');
let addToCart = document.querySelector('.header .add-to-cart');

shoppingCart.onclick = () =>{
    addToCart.classList.toggle('active');
    prifileMedia.classList.remove('active');
    categories.classList.remove('active');
    heartLike.classList.remove('active');
}
/* shopping-cart show ends */


/* profile show starts */
let profile = document.querySelector('.header .header-right .profile');
let prifileMedia = document.querySelector('.header .profile-media');

profile.onclick = () =>{
    prifileMedia.classList.toggle('active');
    addToCart.classList.remove('active');
    categories.classList.remove('active');
    heartLike.classList.remove('active');
}
/* profile show ends */


/* categories show starts */
let categoriesBtn = document.querySelector('.navbar .navbar-btn');
let categories = document.querySelector('.navbar .navbar-categories');

categoriesBtn.onclick = () =>{
    categories.classList.toggle('active');
    prifileMedia.classList.remove('active');
    addToCart.classList.remove('active');
    heartLike.classList.remove('active');
}
/* categories show ends */


/* explore categories swiper section starts */
var swiper = new Swiper(".explore-bottom", {
    navigation: {
      nextEl: ".swiper-btn-next",
      prevEl: ".swiper-btn-prev",
    },
});
/* explore categories swiper section ends */


/* featured categories swiper section starts */
var swiper = new Swiper(".featured-bottom", {
    navigation: {
      nextEl: ".swiper-btn-next",
      prevEl: ".swiper-btn-prev",
    },
});
/* featured categories swiper section ends */


/* daily categories swiper section starts */
var swiper = new Swiper(".daily-bottom", {
    navigation: {
      nextEl: ".swiper-bn-next",
      prevEl: ".swiper-bn-prev",
    },
});
/* daily categories swiper section ends */