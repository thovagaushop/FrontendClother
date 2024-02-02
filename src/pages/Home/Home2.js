import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./home.css";
import { background1, background2, background3 } from "../../assets/images";
import SwiperCustom from "../../components/SwiperCustom/SwiperCustom";

export default function Home2() {
  const [headerHeight, setHeaderHeight] = useState(0);
  useEffect(() => {
    const headerHeight = document.getElementById("main-header");
    setHeaderHeight(headerHeight.offsetHeight);
  }, []);
  return (
    <div className="bg-red-400">
      <session>
        <Swiper
          direction="vertical"
          pagination={{
            clickable: true,
            bulletClass: "swiper-pagination-bullet",
          }}
          mousewheel={true}
          modules={[Mousewheel, Pagination]}
          className="verticalSwiper"
          style={{ height: `calc(100vh - ${headerHeight + 10}px)` }}
        >
          <SwiperSlide>
            <SwiperCustom images={[background1, background2, background3]} />
          </SwiperSlide>
          <SwiperSlide>
            <div> Slide 2 </div>
          </SwiperSlide>
          <SwiperSlide>
            <div> Slide 3 </div>
          </SwiperSlide>
        </Swiper>
      </session>
    </div>
  );
}
