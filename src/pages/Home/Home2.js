import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./home.css";
import {
  background1,
  background2,
  background3,
  background4,
  background5,
  background6,
  background7,
  background8,
  background9,
  background10,
  background11,
  background12,
  background13,
  background14,
  background15,
  background16,
  background17,
  background18,
  background19,
  background20,
  background21,
  background22,
  background23,
  background24,
  background25,
  background26,
  background27,
  background28,
  background29,
  background30,
  background31,
  background32,
  background33,
  background34,
  background35,
  background36,
  background37,
  background38,
  background39,
} from "../../assets/images";
import SwiperCustom from "../../components/SwiperCustom/SwiperCustom";
import Notice from "../../components/Notice/Notice";

export default function Home2() {
  const [headerHeight, setHeaderHeight] = useState(0);
  useEffect(() => {
    const headerHeight = document.getElementById("main-header");
    setHeaderHeight(headerHeight.offsetHeight);
  }, []);
  return (
    <div className="bg-white">
      <session>
        <Swiper
          direction="vertical"
          pagination={{
            clickable: true,
          }}
          mousewheel={true}
          modules={[Mousewheel, Pagination, Navigation]}
          className="verticalSwiper"
          style={{ height: `calc(100vh - ${headerHeight + 10}px)` }}
        >
          <SwiperSlide>
            <SwiperCustom images={[background1, background2, background3]} />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperCustom
              images={[background4, background5, background6, background7]}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperCustom
              images={[background8, background9, background10, background11]}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperCustom
              images={[background12, background13, background14, background15]}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperCustom
              images={[background16, background17, background18, background19]}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperCustom
              images={[background20, background21, background22, background23]}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperCustom
              images={[background24, background25, background26, background27]}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperCustom
              images={[background28, background29, background30, background31]}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperCustom
              images={[background32, background33, background34, background35]}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperCustom
              images={[background36, background37, background38, background39]}
            />
          </SwiperSlide>
        </Swiper>
        <Notice />
      </session>
    </div>
  );
}
