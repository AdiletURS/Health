

/Slaider/
var swiper = new Swiper('.swiper-container', {
  pagination: '.swiper-pagination',
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflow: {
    rotate: 100,
    stretch: 0,
    depth: 100, 
    modifier: 1,
    slideShadows : true
  },
  loop: true
});

