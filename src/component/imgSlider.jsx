import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import "../css/textSlider.css";

const TextSlider = () => {
  return (
    <>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
        //   navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
              <p>"Move fast and break things. Unless you are breaking stuff, you are not moving fast enough."</p>
              <h4>Mark Zuckerberg</h4>
              <p>CEO of Facebook</p>
          </SwiperSlide>
          <SwiperSlide>
              <p>“Your time is limited, so don’t waste it living someone else’s life.”</p>
              <h4>steve jobs</h4>
              <p>CEO of Apple</p>
          </SwiperSlide>
          <SwiperSlide>
              <p>“A person who is happy is not because everything is right in his life, He is happy because of his attitude towards everything in his life is right.”</p>
              <h4>sunder pichai</h4>
              <p>CEO of Google</p>
          </SwiperSlide>
        </Swiper>
    </>
  )
}

export default TextSlider