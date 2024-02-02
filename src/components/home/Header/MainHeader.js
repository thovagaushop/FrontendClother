import React from "react";
import { uniqlo } from "../../../assets/images";
import { NavLink } from "react-router-dom";

export default function MainHeader() {
  return (
    <div className="w-full sticky top-0 z-50" id="main-header">
      <div className="w-full h-10 bg-[#F4F4F4]">
        <div className="px-[200px] h-full flex justify-end gap-10 items-center">
          <div>Trợ giúp</div>
          <div>Hệ thống cửa hàng</div>
          <div>
            <span>English</span> | <span>Tiếng Việt</span>
          </div>
        </div>
      </div>

      <div className="w-full bg-white flex justify-between px-[200px] pt-[20px] pb-[20px]">
        <div className="flex items-center">
          <NavLink to="/">
            <img className="pr-[28px]" src={uniqlo} alt="" />
          </NavLink>
          <ul className="flex items-center ">
            <li>
              <NavLink className="px-[16px]" to="/shop">
                <span className="font-bold hover:border-b-4 hover:border-[#0369a1] ">
                  Nữ
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink className="px-[16px]" to="/shop">
                <span className="font-bold hover:border-b-4 hover:border-[#0369a1] ">
                  Nam
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink className="px-[16px]" to="/shop">
                <span className="font-bold hover:border-b-4 hover:border-[#0369a1] ">
                  Trẻ em
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink className="px-[16px]" to="/shop">
                <span className="font-bold hover:border-b-4 hover:border-[#0369a1] ">
                  Trẻ sơ sinh
                </span>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-10">
          <button>
            <span>
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
          </button>
          <button>
            <NavLink to="/signin">
              <span>
                <i className="fa-regular fa-user"></i>
              </span>
            </NavLink>
          </button>
          <button>
            <span>
              <i className="fa-regular fa-heart"></i>
            </span>
          </button>
          <button>
            <span>
              <i className="fa-solid fa-cart-shopping"></i>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
