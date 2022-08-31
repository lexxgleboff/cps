import '../scss/style.scss';

import Swiper from './swiper.js'

let init = false;
let swiperBrands
let swiperElectronics
let swiperPrice

function swiperMode() {
    let mobile = window.matchMedia('(min-width: 0px) and (max-width: 767px)');
    let tablet = window.matchMedia('(min-width: 768px) and (max-width: 1024px)');
    let desktop = window.matchMedia('(min-width: 1025px)');

    if (mobile.matches) {
        if (!init) {
            init = true;
            swiperBrands = new Swiper('.brands-slider', {
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
              // loop: true,
          });
          swiperElectronics = new Swiper('.electronics-slider', {
              // spaceBetween: 16,
              slidesPerView: 1.2,
              watchOverflow: true,
              pagination: {
                  el: '.electronics-slider__pagination',
                  clickable: true,
              },
              breakpoints: {
                  0: {
                    slidesPerView: "auto",
                  },
              },
              // loop: true,
          });
          swiperPrice = new Swiper('.price-slider', {
              // spaceBetween: 16,
              slidesPerView: 1.2,
              watchOverflow: true,
              pagination: {
                  el: '.price-slider__pagination',
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
        swiperBrands.destroy();
        swiperElectronics.destroy();
        swiperPrice.destroy();
        init = false;
    } else if((desktop.matches) && (init)) {
        swiperBrands.destroy();
        swiperElectronics.destroy();
        swiperPrice.destroy();
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


const btnBrands = document.querySelector('.brands__btn');
const sliderBrands = document.querySelector('.brands-slider');

btnBrands.addEventListener('click', function () {
  if (btnBrands.textContent != 'Скрыть') {
    btnBrands.textContent = 'Скрыть';
  } else {
    btnBrands.textContent = 'Показать всё'
  }
  sliderBrands.classList.toggle('brands-slider--show')
  btnBrands.classList.toggle('btn-more--rotate')
})

const btnEl = document.querySelector('.electronics__btn')
const electronicsSlider = document.querySelector('.electronics-slider')
btnEl.addEventListener('click', function () {
  console.log(btnEl);
  if (btnEl.textContent != 'Скрыть') {
    btnEl.textContent = 'Скрыть';
  } else {
    btnEl.textContent = 'Показать всё'
  }
  electronicsSlider.classList.toggle('electronics-slider--show')
  btnEl.classList.toggle('btn-more--rotate')
})

function muteMenu() {
  let desktop = window.matchMedia('(min-width: 1120px)');

  if (desktop.matches) {
    menu.classList.remove('menu--active')
    main.classList.remove('main--mute')
    header.classList.remove('header--mute')
  }
}

const menu = document.getElementById('menu')
const menuBurger = document.querySelector('.menu__burger')
const main = document.querySelector('.main')
const header = document.querySelector('.header')
const headerMute = document.querySelector('.header--mute')
const headerBurger = document.querySelector('.header__burger')
const feedbackChat = document.querySelectorAll('.menu-feedback__chat')
const feedbackCall = document.querySelectorAll('.menu-feedback__call')
const feedbackClose = document.querySelector('.feedback__close')
const feedback = document.getElementById('feedback')
const call = document.getElementById('call')
const callClose = document.querySelector('.call__close')
const navigation = document.querySelectorAll('.navigation__item')

for (let i = 0; i < navigation.length; i++) {
  navigation[i].addEventListener('click', addClass)
}

function addClass() {
  const active = document.getElementsByClassName('navigation__item--active')
  active[0].className = active[0].className.replace(' navigation__item--active', '')
  this.className += ' navigation__item--active'
}


headerBurger.addEventListener('click', (event) => {
  if (event.target.closest('.header__burger')) {
    menu.classList.add('menu--active')
    main.classList.add('main--mute')
    header.classList.add('header--mute')
    document.body.style.overflow = "hidden"
  }
})

menuBurger.addEventListener('click', (event) => {
  if (event.target.closest('.menu__burger')) {
    menu.classList.remove('menu--active')
    main.classList.remove('main--mute')
    header.classList.remove('header--mute')
    document.body.style.overflow = ""
  }
})
document.addEventListener('click', (event) => {
  if ((event.target.closest('.main')) && (!event.target.closest('.menu-feedback__chat')) && (!event.target.closest('.header__burger'))) {
    menu.classList.remove('menu--active')
    menu.classList.remove('menu--mute')
    main.classList.remove('main--mute')
    header.classList.remove('header--mute')
    feedback.classList.remove('feedback--active')
    call.classList.remove('call--active')
    document.body.style.overflow = ""
  }

  if ((event.target.closest('.header')) && (!event.target.closest('.menu-feedback__chat')) && (!event.target.closest('.menu-feedback__call')) && (!event.target.closest('.header__burger'))) {
    call.classList.remove('call--active')
    feedback.classList.remove('feedback--active')
    menu.classList.remove('menu--active')
    menu.classList.remove('menu--mute')
    main.classList.remove('main--mute')
    header.classList.remove('header--mute')
    document.body.style.overflow = ""
  }
  if ((event.target.closest('.menu')) && (!event.target.closest('.menu-feedback__chat')) && (!event.target.closest('.menu-feedback__call'))) {
    call.classList.remove('call--active')
    feedback.classList.remove('feedback--active')
    menu.classList.remove('menu--active')
    menu.classList.remove('menu--mute')
    main.classList.remove('main--mute')
    header.classList.remove('header--mute')
    document.body.style.overflow = ""
  }

   if ((feedback.classList.contains('feedback--active')) && (event.target)) {
    menu.classList.remove('menu--active')
    menu.classList.remove('menu--mute')
    main.classList.remove('main--mute')
    call.classList.remove('call--active')
    document.body.style.overflow = ""

  }
   if ((call.classList.contains('call--active')) && (event.target)) {
    menu.classList.remove('menu--active')
    menu.classList.remove('menu--mute')
    main.classList.remove('main--mute')
    feedback.classList.remove('feedback--active')
    document.body.style.overflow = ""

  }
   if (feedback.classList.contains('feedback--active')) {
    menu.classList.remove('menu--active')
    menu.classList.add('menu--mute')
    main.classList.add('main--mute')
    header.classList.add('header--mute')
    call.classList.remove('call--active')
    document.body.style.overflow = "hidden"

  }
   if (call.classList.contains('call--active')) {
    menu.classList.remove('menu--active')
    menu.classList.add('menu--mute')
    main.classList.add('main--mute')
    header.classList.add('header--mute')
    feedback.classList.remove('feedback--active')
    document.body.style.overflow = "hidden"
  }


})



// function menuShow(event) {

//   if (event.target.closest('.menu__burger')) {
//     menu.classList.remove('menu--active')
//     main.classList.remove('main--mute')
//     header.classList.remove('header--mute')

//   }
  // if ((!event.target.closest('.menu')) && (!event.target.closest('.header__burger')) && (!event.target.closest('.menu-feedback__chat'))) {
  //   menu.classList.remove('menu--active')
  //   menu.classList.remove('menu--mute')
  //   main.classList.remove('main--mute')
  //   header.classList.remove('header--mute')
  //   feedback.classList.remove('feedback--active')
  // }
  // if (((!event.target.closest('.menu-feedback__chat')) && (!event.target.closest('.feedback')))) {
  //   menu.classList.remove('menu--active')
  //   menu.classList.remove('menu--mute')
  //   main.classList.remove('main--mute')
  //   header.classList.remove('header--mute')
  //   feedback.classList.remove('feedback--active')
  // }

  // if ((feedback.classList.contains('feedback--active')) && (event.target)) {
  //   menu.classList.remove('menu--active')
  //   menu.classList.remove('menu--mute')

  // }


  // if (event.target.closest('.main--mute') && (event.target.closest('.menu--mute'))) {
  //   feedback.classList.remove('feedback--active')
  //   menu.classList.remove('menu--mute')
  //   main.classList.remove('main--mute')
  // }
// }





for (let i = 0; i < feedbackCall.length; i++) {
  feedbackCall[i].addEventListener('click', (event) => {
    event.preventDefault()
    if (!event.target.closest('.call')) {
      call.classList.toggle('call--active')
      document.body.style.overflow = ""
    }
  })
  feedbackChat[i].addEventListener('click', (event) => {
    event.preventDefault()
    if (!event.target.closest('.feedback')) {
      feedback.classList.toggle('feedback--active')
      document.body.style.overflow = ""
    }
  })
}

feedbackClose.addEventListener('click', (event) => {
  event.preventDefault()

    feedback.classList.remove('feedback--active')
    menu.classList.remove('menu--mute')
    main.classList.remove('main--mute')
    header.classList.remove('header--mute')
    document.body.style.overflow = ""
})



callClose.addEventListener('click', (event) => {
  event.preventDefault()

    call.classList.remove('call--active')
    menu.classList.remove('menu--mute')
    main.classList.remove('main--mute')
    header.classList.remove('header--mute')
    document.body.style.overflow = ""
})

