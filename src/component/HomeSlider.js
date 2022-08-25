import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./HomeSlider.css";

import test from "../Imagess/aga_khan_Palace.jpg";
export default () => {
  const importAll = (r) => {
    return r.keys().map(r);
  };
  const sliderData = importAll(
    require.context("../Imagess", false, /\.(png|jpe?g|svg|jfif|JPG)$/)
  );
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={"auto"}
      navigation
      autoplay={{
        delay: 500,
      }}
      loop
      centeredSlides
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {sliderData.map((item) => {
        console.log(item);
        return (
          <SwiperSlide>
            <img src={item} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
