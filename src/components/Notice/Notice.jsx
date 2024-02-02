import React from "react";

export default function Notice() {
  return (
    <div className="mx-[200px] mt-[20px] px-20 py-10 border-2 border-[#E6E6E6]">
      <div className="text-[22px]">NOTICE</div>
      <div className="mt-7 underline underline-offset-2 font-bold flex flex-col gap-5">
        <a className="hover:cursor-pointer hover:text-[#ece6e6]">
          - Delivery Leadtime in January & February. Find out more!
        </a>
        <a className="hover:cursor-pointer hover:text-[#ece6e6]">
          - VAT Tax reduction
        </a>
        <a className="hover:cursor-pointer hover:text-[#ece6e6]">
          - Special Price (For Online and All Stores)
        </a>
      </div>
    </div>
  );
}
