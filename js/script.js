let init = false;
let swiper = Swiper;

function swiperMode() {
    let mobile = window.matchMedia('(min-width: 0px) and (max-width: 767px)');
    let tablet = window.matchMedia('(min-width: 768px) and (max-width: 1024px)');
    let desktop = window.matchMedia('(min-width: 1025px)');
    
    if (mobile.matches) {
        if (!init) {
            init = true;
            swiper = new Swiper('.brands-slider', {
                    spaceBetween: 16,
                    slidesPerView: 1.2,
                    watchOverflow: true,
                    pagination: {
                        el: '.brands-slider__pagination',
                        clickable: true,
                    },
                    breakpoints: {
                        0: {
                          slidesPerView: "auto",
                        },
                      },
                });
        }
    } else if(tablet.matches) {
        swiper.destroy();
        init = false;
    } else if(desktop.matches) {
        swiper.destroy();
        init = false;
    }
}

    
window.addEventListener('load', function() {
    swiperMode();
});

window.addEventListener('resize', function() {
    swiperMode();
});


let clickButton = document.querySelector('.brands__btn');
let slideShow = document.querySelectorAll('.brands-slider__slide');

clickButton.addEventListener('click', function () {
    if (clickButton.textContent != 'Скрыть') {
        clickButton.textContent = 'Скрыть';
    } else {
        clickButton.textContent = 'Показать всё'
    }
    for (let i = 0; i < slideShow.length; i++) {
        slideShow[i].classList.toggle('brands-slider__slide--show')
    }


})