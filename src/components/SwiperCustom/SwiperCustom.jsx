import { Navigation, Pagination } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import { useEffect, useState } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function SwiperCustom({ images }) {
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const headerHeight = document.getElementById("main-header");
    setHeaderHeight(headerHeight.offsetHeight);
  }, []);
  return (
    <Swiper
      navigation={true}
      pagination={true}
      className="mySwiper h-full w-full"
      modules={[Navigation, Pagination]}
    >
      {images.length &&
        images.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className={`w-full h-full bg-cover bg-center `}
              style={{
                backgroundImage: `url(${image})`,
                height: `calc(100vh - ${headerHeight + 10}px)`,
              }}
            ></div>
          </SwiperSlide>
        ))}
    </Swiper>
  );
}
