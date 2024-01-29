import React from "react";
import { uniqlo } from "../../../assets/images";
import { NavLink } from "react-router-dom";

export default function MainHeader() {
  return (
    <div className="flex justify-between px-[20px] pt-[20px] pb-[10px]">
      <div className="flex">
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
      <div className="items-center">
        <button className="px-[25px]">
          <span>
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
        </button>
        <button className="px-[25px]">
          <NavLink to="/signin">
            <span>
              <i className="fa-regular fa-user"></i>
            </span>
          </NavLink>
        </button>
        <button className="px-[25px]">
          <span>
            <i className="fa-regular fa-heart"></i>
          </span>
        </button>
        <button className="px-[25px]">
          <span>
            <i className="fa-solid fa-cart-shopping"></i>
          </span>
        </button>
      </div>
    </div>
  );
}
