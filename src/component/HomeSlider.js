import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./HomeSlider.css";

import test from "../Imagess/aga_khan_Palace.jpg";
import { useState } from "react";
export default () => {
  const importAll = (r) => {
    return r.keys().map(r);
  };
  const sliderData = importAll(
    require.context("../Imagess", false, /\.(png|jpe?g|svg|jfif|JPG)$/)
  );

  const SliderContent = ({ caption, item }) => {
    const [isCaption, setCaption] = useState(false);
    return (
      <>
        <img
          src={item}
          onMouseEnter={() => setCaption(true)}
          onMouseLeave={() => setCaption(false)}
        />
        <div
          className={`caption-div ${
            !isCaption ? "hide-caption" : "show-caption"
          }`}
        >
          <div>{caption}</div>
        </div>
      </>
    );
  };
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={"auto"}
      navigation
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      loop
      centeredSlides
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {sliderData.map((item) => {
        console.log(item);
        const caption = item
          .split(`/`)[3]
          .replaceAll("-", " ")
          .replaceAll("_", " ")
          .split(".")[0];
        return (
          <SwiperSlide>
            <SliderContent caption={caption} item={item} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
