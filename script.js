const slidesEl = document.querySelector('.slides');
const prevbtn = document.querySelector('prev-Btn');
const nextbtn = document.querySelector('.next-Btn')


slides.forEach(function(slides, index) {
    slidesEl.style.left = `${index * 100}%`
});

let counter = 0;

nextbtn.addEventListener('click', () => {
    counter++;
    carousel()
});

prevbtn.addEventListener('click', ()=> {
    counter--;
    carousel()
})

function counter() {
    slidesEl.forEach(function(slides){
        slides.style.transform = `translateX(-${counter*100}%)`
    })
}