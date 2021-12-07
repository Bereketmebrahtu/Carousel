const slides = document.querySelectorAll('.slides');
const prevbutton = document.querySelector('.prev-Btn');
const nextbutton = document.querySelector('.next-Btn')


slides.forEach(function(slide, index) {
    slide.style.left = `${index * 100}%`
});

let counter = 0;

nextbutton.addEventListener('click', function(){
    counter++;

    carousel()
});

prevbutton.addEventListener('click', ()=> {
    counter--;

    carousel()
})

function carousel() {
    slides.forEach(function(slide){
        slide.style.transform = `translateX(-${counter * 100}%)`
    })
}