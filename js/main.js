const theme1 = document.querySelector('.tema-1')
const theme2 = document.querySelector('.tema-2')
const imgTheme1 = document.querySelector('.tema-img-1')
const imgTheme2 = [...document.querySelectorAll('.tema-img-2')]
const windowHeight = window.innerHeight
window.scrollTo(0, 0);

window.addEventListener('resize', () => {
    windowHeight = window.innerHeight
})

setInterval(() => {
    const cordenadas1 = theme1.getBoundingClientRect()
    const cordenadas2 = theme2.getBoundingClientRect()
    
    if(cordenadas1.y === 0){
        window.scrollTo(0, 0);
        //ADIÇÃO DAS CLASSES
        theme1.classList.add('animation-section')
        theme2.classList.add('opacity-0')
        
        theme1.classList.remove('opacity-0')
        //REMOÇÃO DAS CLASSES
        theme2.classList.remove('animation-section')
        imgTheme2.map((img) => {
            img.classList.remove('animation-image')
        })
    }
    
    if(cordenadas2.y === 0){
        window.scrollTo(0, windowHeight);
        //ADIÇÃO DAS CLASSES
        theme2.classList.add('animation-section')
        imgTheme2.map((img) => {
            img.classList.add('animation-image')
        })

        theme1.classList.add('opacity-0')
        theme2.classList.remove('opacity-0')
        //REMOÇÃO DAS CLASSES
        theme1.classList.remove('animation-section')
        imgTheme1.classList.remove('animation-image')
    }

}, 300);

document.onkeypress = function(e) {
    console.log(e.key);
    if(e.key == 1){
        window.scrollTo(0, 0);
    }
    if(e.key == 2){
        window.scrollTo(0, windowHeight);
    }
}; 