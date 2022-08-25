import '../scss/style.scss';

import Swiper from './swiper.js'

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
              // spaceBetween: 16,
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
    } else if((tablet.matches) && (init)) {
        swiper.destroy();
        init = false;
    } else if((desktop.matches) && (init)) {
        swiper.destroy();
        init = false;
    }
}


window.addEventListener('load', function() {
    swiperMode();
});

window.addEventListener('resize', function() {
    swiperMode();
    muteMenu();
});


const clickButton = document.querySelector('.brands__btn');
const slideShow = document.querySelectorAll('.brands-slider__slide');

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



const menu = document.querySelector('.menu')

document.addEventListener('click', menuShow)

function menuShow(event) {
  if (event.target.closest('.header__burger')) {
    menu.classList.add('menu--active')
    document.querySelector('.main').classList.add('main--mute')
    document.querySelector('.header').classList.add('header--mute')
  }
  if (event.target.closest('.menu__burger')) {
    menu.classList.remove('menu--active')
    document.querySelector('.main').classList.remove('main--mute')
    document.querySelector('.header').classList.remove('header--mute')

  }
  if ((!event.target.closest('.menu')) && !(event.target.closest('.header__burger'))) {
    menu.classList.remove('menu--active')
    document.querySelector('.main').classList.remove('main--mute')
    document.querySelector('.header').classList.remove('header--mute')
  }
}


function muteMenu() {
  let desktop = window.matchMedia('(min-width: 1120px)');

  if (desktop.matches) {
    document.querySelector('.menu').classList.remove('menu--active')
    document.querySelector('.main').classList.remove('main--mute')
    document.querySelector('.header').classList.remove('header--mute')
  }
}

const navigation = document.getElementsByClassName('.navigation__list')
const navigationItem = document.getElementsByClassName('.navigation__item')
const active = document.getElementsByClassName('.navigation__item--active')

for (let i = 0; i < navigation.length; i++) {
  navigation[i].onClick = () => {

    if (active[0])
      currentActive.classList.remove("navigation__item--active");

    if (active[0] !== this)
      this.classList.add("navigation__item--active");
  }
}

// for (let i = 0; navigation.length > i; i++) {
//   navigation[i].addEventListener('click', () => {
//     if (active[i]) {

//     }
//   })
// }

// for (let item of navigation) {
//   navigation.addEventListener('click', () => {
//     if (item.contains('.navigation__item--active')) {
//       item.classList.remove('.navigation__item--active')
//     }
//     if (!item.contains('.navigation__item--active')) {
//       item.classList.add('.navigation__item--active')
//     }
//   })
// }

// menu.addEventListener('click', () => {
//   for (let item of navigation) {
//     console.log(item);
//     item.classList.add('navigation__item--active')

//   }

// })
