import Swiper from "swiper/bundle";
// import styles bundle
import "swiper/css/bundle";
var swiper = new Swiper(".swiper-container.two", {
  effect: "coverflow",
  loop: true,
  autoplay: true,
  autoplaySpeed: 5000,
  speed: 3500,

  centeredSlides: true,
  slidesPerView: "auto",
  coverflow: {
    rotate: 50,
    stretch: 100,
    depth: 250,
    modifier: 2.5,
    slideShadows: true,
  },
});
