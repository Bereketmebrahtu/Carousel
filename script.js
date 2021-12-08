const slidesEl = document.querySelectorAll('.slide');
// const slideImagesEl = document.querySelectorAll('.slide')
const prevBtnEl = document.querySelector('.prev-Btn');
const nextBtnEl = document.querySelector('.next-Btn')


slidesEl.forEach(function(slide, index) {
    slide.style.left = `${index * 100}%`
});

let counter = 0;

nextBtnEl.addEventListener('click', function(){
    counter++;

    carousel()
});

prevBtnEl.addEventListener('click', function(){
    counter--;

    carousel()
});

function carousel() {
    slidesEl.forEach(function(slide){
        slide.style.transform = `translateX(-${counter * 100}%)`
    });
}