import Swiper, { Navigation } from 'swiper';

const setSefaultSettings = swiper => {
  switch (true) {
  case innerWidth < 640:
    swiper.slides.forEach(slide => slide.style.cssText = `z-index: 0; position: absolute;`);
    swiper.slides[swiper.activeIndex].style.cssText = `z-index: 1; position: absolute;`;
    swiper.slides[swiper.previousIndex] &&
      (swiper.slides[swiper.previousIndex].style.cssText = `z-index: 2 position: absolute;`);
    break;
  default:
    swiper.slides.forEach(slide => slide.style.cssText = `z-index: 0;`);
    swiper.slides[swiper.activeIndex].style.cssText = `z-index: 2;`;
    swiper.slides[swiper.previousIndex] &&
      (swiper.slides[swiper.previousIndex].style.cssText = `z-index: 1;`);
  }
};

new Swiper('.swiper', {
  init: true,
  virtualTranslate: true,
  allowTouchMove: false,
  preloadImages: true,
  initialSlide: 0,
  speed: 1200,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  breakpoints: {
    640: {
      virtualTranslate: false,
    }
  },
  on: {
    init: setSefaultSettings,
    breakpoint:
      swiper => swiper.wrapperEl.style.cssText = 'transition-duration: 0ms;',
    update: setSefaultSettings,
    beforeTransitionStart: setSefaultSettings,
    slideNextTransitionStart:
      swiper => {
        switch (true) {
        case innerWidth < 640:
          swiper.slides[swiper.previousIndex].style.cssText = `
            z-index: 2; position: absolute; transform: translateX(-100%); transition: transform 0.6s ease`;
          swiper.allowSlidePrev = true;
          break;
        default:
          swiper.slides[swiper.previousIndex].style.cssText = `
            z-index: 1; transform: translateX(50%); transition: transform 1.2s ease`;
          swiper.allowSlidePrev = false;
        }
      },
    slidePrevTransitionStart:
      swiper => {
        switch (true) {
        case innerWidth < 640:
          swiper.slides[swiper.previousIndex].style.cssText = `
            z-index: 2; position: absolute; transform: translateX(100%); transition: transform 0.6s ease`;
          swiper.allowSlideNext = true;
          break;
        default:
          swiper.slides[swiper.previousIndex].style.cssText = `
            z-index: 1; transform: translateX(-50%); transition: transform 1.2s ease`;
          swiper.allowSlideNext = false;
        }
      },
    slideNextTransitionEnd: swiper => swiper.allowSlidePrev = true,
    slidePrevTransitionEnd: swiper => swiper.allowSlideNext = true,
  },
  modules: [Navigation],
});
