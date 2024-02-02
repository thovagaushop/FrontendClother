import React from "react";
import { uniqlo } from "../../assets/images";
import { NavLink } from "react-router-dom";

export default function Login() {
  return (
    <div>
      <header className="w-full h-[128px] border-b-2 border-[#DADADA] relative">
        <div className="ml-[200px] absolute bottom-7">
          <NavLink to="/">
            <img src={uniqlo} />
          </NavLink>
        </div>
      </header>

      <div className="mx-[200px] flex flex-col gap-[100px] items-center mt-[100px]">
        <div className="w-full h-auto border-2 border-[#DADADA] flex gap-1 items-start">
          <div className="w-1/2 mx-[20px] flex flex-col gap-5">
            <div className="flex justify-between items-center">
              <div className="text-[36px] font-bold">Login</div>
              <div className="flex flex-col text-[#378694] text-[14px] items-end">
                <div>Required</div>
                <span className="float-end">*</span>
              </div>
            </div>

            <div className="flex justify-between items-center text-[16px]">
              <div>Log in with your email address and password.</div>
              <i class="fa-solid fa-circle-info"></i>
            </div>

            <div>
              <label className="text-[18px] font-bold">
                EMAIL ADDRESS <span className="text-[#378694]">*</span>
              </label>
              <input
                type="email"
                className="w-full text-[16px] mt-2 bg-[#F7F7F7] p-[12px] outline-none"
                placeholder="Enter a valid email"
              />
            </div>
            <div>
              <label className="text-[18px] font-bold">
                PASSWORD <span className="text-[#378694]">*</span>
              </label>
              <input
                type="password"
                className="w-full text-[16px] mt-2 bg-[#F7F7F7] p-[12px] outline-none"
              />
              <div className="text-[16px]">
                Password must be at least 8 characters, and contain both letters
                and numbers. Only these symbols can be used -_.@
              </div>
            </div>
            <div className="text-[18px] my-[20px] flex items-center gap-2">
              <input type="checkbox" className="w-[24px] h-[24px]" />
              <span className="p">Show my password</span>
            </div>
            <div className="font-bold underline underline-offset-1 flex flex-col gap-2">
              <div>TERMS OF USE</div>
              <div>PRIVACY POLICY</div>
            </div>
            <button className="mt-[20px] py-[15px] w-1/2 bg-black text-white font-bold align-center">
              LOG IN
            </button>
            <div className="font-bold underline underline-offset-1 flex flex-col mb-10">
              <div>FORGOT PASSWORD</div>
            </div>
          </div>
          <div className="h-[600px] border-l-2 border-[#DADADA]"></div>
          <div className="w-1/2 mx-[20px]">
            <div className="text-[36px] font-bold">CREATE AN ACCOUNT</div>
            <p className="text-[16px] mt-5">
              If you create an account, you can get personalized services like
              checking purchase history and getting discount coupons with your
              membership. Register today for free!
            </p>
            <button className="mt-[20px] py-[15px] w-1/2 bg-black text-white font-bold align-center">
              CREATE AN ACCOUNT
            </button>
          </div>
        </div>
        <div className="text-[14px] font-bold">
          COPYRIGHT © 2022 UNIQLO VIETNAM CO., LTD. ALL RIGHTS RESERVED.
        </div>
      </div>
    </div>
  );
}
