const carouselSlide = document.querySelector('.carousel-slide');
const carouselItems = document.querySelectorAll('.items');


//button
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//count
let counter = 1;
const size = carouselItems[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';