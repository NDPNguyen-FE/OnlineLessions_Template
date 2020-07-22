// text animation delay
function scrollText() {
    var introText = document.querySelector('.text-animation');
    var introPositon = introText.getBoundingClientRect().top;
    var scrollPosition = window.innerHeight;


    if (introPositon < scrollPosition) {
        introText.classList.add('.text-animation-late');
    }
}
//call function scrollText
window.addEventListener('scroll', scrollText);





//swipperCrousel
var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',

    },


})