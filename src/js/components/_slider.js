import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/swiper'
import 'swiper/modules/pagination'
import 'swiper/modules/navigation'


const swiperReview = new Swiper('.my-swiper', {
  modules: [Navigation, Pagination],

  slidesPerView: 1,
  spaceBetween: 20,

  pagination: {
    clickable: true,
    el: '.swiper-pagination-review',
  },

  navigation: {
    nextEl: '.my-button-next',
    prevEl: '.my-button-prev',
  },
  draggable: true,
  grabCursor: true,
  breakpoints: {
    320: {
      slidesPerView: 1.2,
    },
    768: {
      slidesPerView: 1.8,
    },
    991: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 1,
    },
  },
});

const swiperTeam = new Swiper('.team__swiper', {

  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  draggable: true,
  grabCursor: true,
  mousewheel: true,
  breakpoints: {
    320: {
      slidesPerView: 1.2,
    },
    768: {
      slidesPerView: 1.8,
    },
    991: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 1.2,
    },
  },
});
const swiperClient = new Swiper('.client__swiper', {

  slidesPerView: 1,
  spaceBetween: 20,
  draggable: true,
  grabCursor: true,
  mousewheel: true,
  autoHeight: false,
  breakpoints: {
    320: {
      slidesPerView: 1.2,
    },
    768: {
      slidesPerView: 1.8,
    },
    991: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3.4
    },
  },
});