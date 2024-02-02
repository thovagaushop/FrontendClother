import React from "react";

export default function MainFooter() {
  return (
    <footer className="bg-[#f4f4f4] flex justify-center flex-col items-center mt-[100px]">
      <div class="w-full py-[52px] w-[100%] h-[344px] flex justify-center">
        <div class="px-[200px] w-full flex justify-between">
          <div class="flex-col w-[246.41px] h-[240px]">
            <div>
              <span class="font-bold text-[17px] ">Về uniqlo</span>
            </div>
            <div class="my-[16px]">
              <a class="text-[14px] " href="">
                Thông tin
              </a>
            </div>
            <div class="my-[16px]">
              <a class="text-[14px]" href="">
                Danh sách cửa hàng
              </a>
            </div>
            <div>
              <a class="text-[14px]" href="">
                Cơ hội nghề nghiệp
              </a>
            </div>
          </div>
          <div class="flex-col w-[246.41px] h-[240px]">
            <div>
              <span class="font-bold text-[17px] ">Trợ giúp</span>
            </div>
            <div class="my-[16px]">
              <a class="text-[14px] " href="">
                FAQ
              </a>
            </div>
            <div class="my-[16px]">
              <a class="text-[14px]" href="">
                Chính sách trả hàng
              </a>
            </div>
            <div class="my-[16px]">
              <a class="text-[14px]" href="">
                Chính sách bảo mật
              </a>
            </div>
            <div>
              <a class="text-[14px]" href="">
                Tiếp cận
              </a>
            </div>
          </div>
          <div class="flex-col w-[246.41px] h-[240px]">
            <div>
              <span class="font-bold text-[17px] ">Tài khoản</span>
            </div>
            <div class="my-[16px]">
              <a class="text-[14px] " href="">
                Tư cách thành viên
              </a>
            </div>
            <div class="my-[16px]">
              <a class="text-[14px]" href="">
                Hồ sơ
              </a>
            </div>
            <div>
              <a class="text-[14px]" href="">
                Coupons
              </a>
            </div>
          </div>
          <div class="flex-col w-[246.41px] h-[240px]">
            <div>
              <span class="font-bold text-[17px] ">Bản tin điện tử</span>
            </div>
            <div class="mt-[16px] w-[180px] h-[176px]">
              <a class="text-[14px] " href="">
                Đăng ký ngay và là người đầu tiên nắm được thông tin khi có mặt
                hàng mới, khuyến mãi, các sự kiện sắp diễn ra tại cửa hàng và
                nhiều thông tin hữu ích khác.
              </a>
            </div>
            <div>
              <a class="text-[16px] border-b-2 border-black font-bold" href="">
                ĐĂNG KÝ NGAY
              </a>
            </div>
          </div>
          <div class="flex-col w-[246.41px] h-[240px]">
            <div>
              <span class="font-bold text-[17px]">Tài khoản xã hội UNIQLO</span>
            </div>
            <div class="mt-[16px]">
              <ul class="flex">
                <li class="w-[40px] h-[40px]">
                  <i class="fa-brands fa-facebook"></i>
                </li>
                <li class="w-[40px] h-[40px]">
                  <i class="fa-brands fa-instagram"></i>
                </li>
                <li class="w-[40px] h-[40px]">
                  <i class="fa-brands fa-youtube"></i>
                </li>
                <li class="w-[40px] h-[40px]">
                  <i class="fa-brands fa-tiktok"></i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="flex">
        <div class="text-[16px]">ENGLISH</div>
        <div class="text-[16px] mx-[5px]">|</div>
        <div class="text-[16px] font-bold">Tiếng việt</div>
      </div>
      <hr class="text-[#dadada] my-[20px]"></hr>
    </footer>
  );
}
