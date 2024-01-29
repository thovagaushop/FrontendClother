import React from "react";
import { uniqlo } from "../../assets/images";

export default function Home2() {
  return (
    <div className="px-[100px]">
      <div className="w-[100%] flex flex-col">
        <div
          className="bg-background1 bg-cover bg-center h-screen w-[100%]"
          // style={{ backgroundImage: "url(../../assets/images/background1.jpg)" }}
        >
          <div className="flex justify-between text-[54px] h-screen items-center px-[20px]">
            <button>
              <span className="text-white">
                <i className="fa-solid fa-chevron-left"></i>
              </span>
            </button>
            <button>
              <span className="text-white">
                <i className="fa-solid fa-chevron-right"></i>
              </span>
            </button>
          </div>
        </div>
        <div
          className="bg-background2 bg-cover bg-center h-screen"
          // style={{ backgroundImage: "url(../../assets/images/background1.jpg)" }}
        >
          <div>
            <img
              className="object-cover w-screep h-[60px] pt-[30px] pl-[30px]"
              src={uniqlo}
              alt=""
            />
          </div>
          <h2 className="text-white font-bold text-[50px] flex items-center pl-[20px] h-screen">
            <span>BỘ SƯU TẬP LifeWear</span>
            <div className="flex justify-between text-[54px] h-screen items-center px-[20px]">
              <button>
                <span className="text-white">
                  <i className="fa-solid fa-chevron-left"></i>
                </span>
              </button>
              <button>
                <span className="text-white">
                  <i className="fa-solid fa-chevron-right"></i>
                </span>
              </button>
            </div>
          </h2>
        </div>
      </div>
    </div>
  );
}
