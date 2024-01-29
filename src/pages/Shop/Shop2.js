import React from "react";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import { banner1, product1, product2 } from "../../assets/images";
import { useNavigate } from "react-router-dom";

export default function Shop2() {
  const navigate = useNavigate();
  return (
    <div className="px-[100px]">
      <Breadcrumbs title="Products" />
      {/* ================= Products Start here =================== */}
      <h1 className="font-bold pt-[50px] text-[50px]">BỘ SƯU TẬP ÁO</h1>
      <div className="flex justify-between font-bold pt-[30px]">
        <span className="text-[#757575] hover:text-black px-[16px] w-[25%] text-center hover:border-b-4 hover:border-[#0369a1]">
          NỮ
        </span>
        <span className="text-[#757575] hover:text-black px-[16px] w-[25%] text-center hover:border-b-4 hover:border-[#0369a1]">
          NAM
        </span>
        <span className="text-[#757575] hover:text-black px-[16px] w-[25%] text-center hover:border-b-4 hover:border-[#0369a1]">
          TRẺ EM
        </span>
        <span className="text-[#757575] hover:text-black px-[16px] w-[25%] text-center hover:border-b-4 hover:border-[#0369a1]">
          TRẺ SƠ SINH
        </span>
      </div>
      <div>
        <img src={banner1} alt="" />
      </div>
      <h1 className="font-bold py-[40px] text-[50px]">Sản Phẩm Bán Chạy</h1>
      <div className="flex justify-between">
        <div
          className="w-[293px] hover:cursor-pointer"
          onClick={() => navigate("/")}
        >
          <div>
            <img src={product2} alt="" />
          </div>
          <div className="my-[20px]">
            <ul className="flex ">
              <li className="p-[10px] bg-white mr-[5px] mb-[10px]"></li>
              <li className="p-[10px] bg-black mr-[5px] mb-[10px]"></li>
              <li className="p-[10px] bg-red-400 mr-[5px] mb-[10px]"></li>
              <li className="p-[10px] bg-amber-100 mr-[5px] mb-[10px]"></li>
              <li className="p-[10px] bg-indigo-950 mr-[5px] mb-[10px]"></li>
            </ul>
          </div>
          <div className="flex justify-between">
            <div className="text-[#ABABAB] font-bold">Nữ</div>
            <div className="text-[#ABABAB] font-bold">XS-XXL</div>
          </div>
          <div className="font-bold text-[20px]">
            Áo Polo Vải Pique Co Giãn Ngắn Tay
          </div>
          <div className="mt-[20px] font-bold text-[20px]">489.000 VND</div>
        </div>
        <div
          className="w-[293px] hover:cursor-pointer"
          onClick={() => navigate("/")}
        >
          <div>
            <img src={product1} alt="" />
          </div>
          <div className="my-[20px]">
            <ul className="flex">
              <li className="p-[10px] bg-white mr-[5px] mb-[10px]"></li>
              <li className="p-[10px] bg-black mr-[5px] mb-[10px]"></li>
              <li className="p-[10px] bg-red-400 mr-[5px] mb-[10px]"></li>
              <li className="p-[10px] bg-amber-100 mr-[5px] mb-[10px]"></li>
              <li className="p-[10px] bg-indigo-950 mr-[5px] mb-[10px]"></li>
              <li className="p-[10px] bg-red-400 mr-[5px] mb-[10px]"></li>
              <li className="p-[10px] bg-red-400 mr-[5px] mb-[10px]"></li>
            </ul>
          </div>
          <div className="flex justify-between">
            <div className="text-[#ABABAB] font-bold">Nữ</div>
            <div className="text-[#ABABAB] font-bold">XS-XXL</div>
          </div>
          <div className="font-bold text-[20px]">
            Áo Polo Vải Pique Co Giãn Ngắn Tay
          </div>
          <div className="mt-[20px] font-bold text-[20px]">489.000 VND</div>
          <div className="flex justify-center">
            <div className="text-[#F79028] mr-[20px] text-[12px]">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-regular fa-star"></i>
            </div>
            <div>(57)</div>
          </div>
        </div>
        <div
          className="w-[293px] hover:cursor-pointer"
          onClick={() => navigate("/")}
        >
          <div>
            <img src={product2} alt="" />
          </div>
          <div className="my-[20px]">
            <ul className="flex ">
              <li className="p-[10px] bg-white mr-[5px] mb-[10px]"></li>
              <li className="p-[10px] bg-black mr-[5px] mb-[10px]"></li>
              <li className="p-[10px] bg-red-400 mr-[5px] mb-[10px]"></li>
              <li className="p-[10px] bg-amber-100 mr-[5px] mb-[10px]"></li>
              <li className="p-[10px] bg-indigo-950 mr-[5px] mb-[10px]"></li>
            </ul>
          </div>
          <div className="flex justify-between">
            <div className="text-[#ABABAB] font-bold">Nữ</div>
            <div className="text-[#ABABAB] font-bold">XS-XXL</div>
          </div>
          <div className="font-bold text-[20px]">
            Áo Polo Vải Pique Co Giãn Ngắn Tay
          </div>
          <div className="mt-[20px] font-bold text-[20px]">489.000 VND</div>
          <div className="flex justify-center">
            <div className="text-[#F79028] mr-[20px] text-[12px]">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-regular fa-star"></i>
            </div>
            <div>(57)</div>
          </div>
        </div>
        <div
          className="w-[293px] hover:cursor-pointer"
          onClick={() => navigate("/")}
        >
          <div>
            <img src={product2} alt="" />
          </div>
          <div className="my-[20px]">
            <ul className="flex ">
              <li className="p-[10px] bg-white mr-[5px] mb-[10px]"></li>
              <li className="p-[10px] bg-black mr-[5px] mb-[10px]"></li>
              <li className="p-[10px] bg-red-400 mr-[5px] mb-[10px]"></li>
              <li className="p-[10px] bg-amber-100 mr-[5px] mb-[10px]"></li>
              <li className="p-[10px] bg-indigo-950 mr-[5px] mb-[10px]"></li>
            </ul>
          </div>
          <div className="flex justify-between">
            <div className="text-[#ABABAB] font-bold">Nữ</div>
            <div className="text-[#ABABAB] font-bold">XS-XXL</div>
          </div>
          <div className="font-bold text-[20px]">
            Áo Polo Vải Pique Co Giãn Ngắn Tay
          </div>
          <div className="mt-[20px] font-bold text-[20px]">489.000 VND</div>
          <div className="flex justify-center">
            <div className="text-[#F79028] mr-[20px] text-[12px]">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-regular fa-star"></i>
            </div>
            <div>(57)</div>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-[50px]">
        <div>
          <div className="font-bold">KẾT QUẢ</div>
          <div className="mt-[20-px]">101 Items</div>
        </div>
        <div>
          <div>SẮP XẾP THEO</div>
        </div>
      </div>
      <div className="flex mt-[30px]">
        <div className="pt-[10px] w-[300px] fixer top-0 left-0 right-0 ">
          <div className="border-b-[0.5px] border-slate-800">
            <h1 className="font-bold text-[30px]">NỮ</h1>
            <h2 className="font-semibold my-[10px]">ÁO</h2>
            <h3 className="font-semibold ml-[15px]">Tất cả áo</h3>
            <h4 className="mt-[10px] ml-[15px]">Áo thun</h4>
            <h4 className="mt-[10px] ml-[15px]">Bra Tops</h4>
            <h4 className="mt-[10px] ml-[15px]">Áo sơ mi & áo kiểu</h4>
            <h4 className="mt-[10px] ml-[15px]">Áo thun in họa tiết</h4>
            <h4 className="mt-[10px] ml-[15px]">ÁO nỉ và áo hoodle</h4>
            <h4 className="mt-[10px] ml-[15px]">Áo len</h4>
            <h4 className="mt-[10px] ml-[15px]">Áo cardigan</h4>
            <h4 className="my-[10px] ml-[15px]">PEACE FOR ALL</h4>
            <h1 className="text-[19px] mb-[10px]">ĐỒ MẶC NGOÀI</h1>
            <h1 className="text-[19px] mb-[10px]">QUẦN</h1>
            <h1 className="text-[19px] mb-[10px]">ĐẦM & CHÂN VÁY</h1>
            <h1 className="text-[19px] mb-[10px]">SPORT UTILITY WEAR</h1>
            <h1 className="text-[19px] mb-[10px]">ĐỒ MẶC TRONG & ĐỒ LÓT</h1>
            <h1 className="text-[19px] mb-[10px]">ĐỒ MẶC NHÀ</h1>
            <h1 className="text-[19px] mb-[10px]">PHỤ KIỆN</h1>
            <h1 className="text-[19px] mb-[10px]">ĐỒ BẦU</h1>
          </div>
          <div className="flex-col">
            <h1 className="text-[19px] mb-[10px]">Kích cỡ</h1>
            <h1 className="text-[19px] mb-[10px]">Màu sắc</h1>
            <h1 className="text-[19px] mb-[10px]">Giá</h1>
            <h1 className="text-[19px] mb-[10px]">Tieu Chi Khác</h1>
          </div>
        </div>
        <div className="flex-col">
          <div className="flex mb-[50px]">
            <div className="w-[214px]">
              <div>
                <img src={product2} alt="" />
              </div>
              <div className="my-[20px]">
                <ul className="flex ">
                  <li className="p-[10px] bg-white mr-[5px] mb-[10px]"></li>
                  <li className="p-[10px] bg-black mr-[5px] mb-[10px]"></li>
                  <li className="p-[10px] bg-red-400 mr-[5px] mb-[10px]"></li>
                  <li className="p-[10px] bg-amber-100 mr-[5px] mb-[10px]"></li>
                  <li className="p-[10px] bg-indigo-950 mr-[5px] mb-[10px]"></li>
                </ul>
              </div>
              <div className="flex justify-between">
                <div className="text-[#ABABAB] font-bold">Nữ</div>
                <div className="text-[#ABABAB] font-bold">XS-XXL</div>
              </div>
              <div className="font-bold text-[17px]">
                Áo Polo Vải Pique Co Giãn Ngắn Tay
              </div>
              <div className="mt-[20px] font-semibold text-[13px] line-through">
                489.000 VND
              </div>
              <div>
                <span className="text-[#ff0000] text-[22px] font-bold">
                  391.000 VND
                </span>
              </div>
              <div>
                <a href="">
                  <span className="text-[16px] text-[#ff0000]">
                    Limited Offer Từ 26 Jan 2024 - 01 Feb 2024
                  </span>
                </a>
              </div>
            </div>
            <div className="w-[214px] mx-[20px]">
              <div>
                <img src={product2} alt="" />
              </div>
              <div className="my-[20px]">
                <ul className="flex ">
                  <li className="p-[10px] bg-white mr-[5px] mb-[10px]"></li>
                  <li className="p-[10px] bg-black mr-[5px] mb-[10px]"></li>
                  <li className="p-[10px] bg-red-400 mr-[5px] mb-[10px]"></li>
                  <li className="p-[10px] bg-amber-100 mr-[5px] mb-[10px]"></li>
                  <li className="p-[10px] bg-indigo-950 mr-[5px] mb-[10px]"></li>
                </ul>
              </div>
              <div className="flex justify-between">
                <div className="text-[#ABABAB] font-bold">Nữ</div>
                <div className="text-[#ABABAB] font-bold">XS-XXL</div>
              </div>
              <div className="font-bold text-[17px]">
                Áo Polo Vải Pique Co Giãn Ngắn Tay
              </div>
              <div className="mt-[20px] font-semibold text-[13px] line-through">
                293.000 VND
              </div>
              <div>
                <span className="text-[#ff0000] text-[22px] font-bold">
                  195.000 VND
                </span>
              </div>
              <div>
                <a href="">
                  <span className="text-[16px] text-[#ff0000]">
                    Limited Offer Từ 26 Jan 2024 - 01 Feb 2024
                  </span>
                </a>
              </div>
              <div className="text-[#f59e0b] mr-[20px] text-[15px]">
                <span>
                  <i className="fa-solid fa-star"></i>
                </span>
                <span>
                  <i className="fa-solid fa-star"></i>
                </span>
                <span>
                  <i className="fa-solid fa-star"></i>
                </span>
                <span>
                  <i className="fa-solid fa-star"></i>
                </span>
                <span>
                  <i className="fa-solid fa-star-half"></i>
                </span>
                <span className="ml-[10px] text-black text-[14px]">(183)</span>
              </div>
            </div>
            <div className="w-[214.75px] h-[214.75px]">
              <div>
                <img src={product2} alt="" />
              </div>
              <div className="my-[20px]">
                <ul className="flex ">
                  <li className="p-[10px] bg-white mr-[5px] mb-[10px]"></li>
                  <li className="p-[10px] bg-black mr-[5px] mb-[10px]"></li>
                  <li className="p-[10px] bg-red-400 mr-[5px] mb-[10px]"></li>
                  <li className="p-[10px] bg-amber-100 mr-[5px] mb-[10px]"></li>
                  <li className="p-[10px] bg-indigo-950 mr-[5px] mb-[10px]"></li>
                </ul>
              </div>
              <div className="flex justify-between">
                <div className="text-[#ABABAB] font-bold">Nữ</div>
                <div className="text-[#ABABAB] font-bold">XS-XXL</div>
              </div>
              <div className="font-bold text-[17px]">
                Áo Polo Vải Pique Co Giãn Ngắn Tay
              </div>
              <div className="mt-[20px] font-semibold text-[13px] line-through">
                293.000 VND
              </div>
              <div>
                <span className="text-[#ff0000] text-[22px] font-bold">
                  195.000 VND
                </span>
              </div>
              <div>
                <a href="">
                  <span className="text-[16px] text-[#ff0000]">
                    Limited Offer Từ 26 Jan 2024 - 01 Feb 2024
                  </span>
                </a>
              </div>
              <div className="text-[#f59e0b] mr-[20px] text-[15px]">
                <span>
                  <i className="fa-solid fa-star"></i>
                </span>
                <span>
                  <i className="fa-solid fa-star"></i>
                </span>
                <span>
                  <i className="fa-solid fa-star"></i>
                </span>
                <span>
                  <i className="fa-solid fa-star"></i>
                </span>
                <span>
                  <i className="fa-solid fa-star-half"></i>
                </span>
                <span className="ml-[10px] text-black text-[14px]">(964)</span>
              </div>
            </div>
            <div className="w-[214px] ml-[20px]">
              <div>
                <img src={product2} alt="" />
              </div>
              <div className="my-[20px]">
                <ul className="flex ">
                  <li className="p-[10px] bg-white mr-[5px] mb-[10px]"></li>
                  <li className="p-[10px] bg-black mr-[5px] mb-[10px]"></li>
                  <li className="p-[10px] bg-red-400 mr-[5px] mb-[10px]"></li>
                  <li className="p-[10px] bg-amber-100 mr-[5px] mb-[10px]"></li>
                  <li className="p-[10px] bg-indigo-950 mr-[5px] mb-[10px]"></li>
                </ul>
              </div>
              <div className="flex justify-between">
                <div className="text-[#ABABAB] font-bold">Nữ</div>
                <div className="text-[#ABABAB] font-bold">XS-XXL</div>
              </div>
              <div className="font-bold text-[17px]">
                Áo Polo Vải Pique Co Giãn Ngắn Tay
              </div>
              <div className="mt-[20px] font-semibold text-[13px] line-through">
                391.000 VND
              </div>
              <div>
                <span className="text-[#ff0000] text-[22px] font-bold">
                  293.000 VND
                </span>
              </div>
              <div>
                <a href="">
                  <span className="text-[16px] text-[#ff0000]">
                    Limited Offer Từ 26 Jan 2024 - 01 Feb 2024
                  </span>
                </a>
              </div>
              <div className="text-[#f59e0b] mr-[20px] text-[15px]">
                <span>
                  <i className="fa-solid fa-star"></i>
                </span>
                <span>
                  <i className="fa-solid fa-star"></i>
                </span>
                <span>
                  <i className="fa-solid fa-star"></i>
                </span>
                <span>
                  <i className="fa-solid fa-star"></i>
                </span>
                <span>
                  <i className="fa-solid fa-star-half"></i>
                </span>
                <span className="ml-[10px] text-black text-[14px]">(172)</span>
              </div>
            </div>
          </div>
          <div className="flex mb-[50px]">
            <div className="w-[214px]">
              <div>
                <img src={product2} alt="" />
              </div>
              <div className="my-[20px]">
                <ul className="flex ">
                  <li className="p-[10px] bg-white mr-[5px] mb-[10px]"></li>
                  <li className="p-[10px] bg-black mr-[5px] mb-[10px]"></li>
                  <li className="p-[10px] bg-red-400 mr-[5px] mb-[10px]"></li>
                  <li className="p-[10px] bg-amber-100 mr-[5px] mb-[10px]"></li>
                  <li className="p-[10px] bg-indigo-950 mr-[5px] mb-[10px]"></li>
                </ul>
              </div>
              <div className="flex justify-between">
                <div className="text-[#ABABAB] font-bold">Nữ</div>
                <div className="text-[#ABABAB] font-bold">XS-XXL</div>
              </div>
              <div className="font-bold text-[17px]">
                Áo Polo Vải Pique Co Giãn Ngắn Tay
              </div>
              <div className="mt-[20px] font-bold text-[20px]">489.000 VND</div>
            </div>
            <div className="w-[214px] mx-[20px]">
              <div>
                <img src={product2} alt="" />
              </div>
              <div className="my-[20px]">
                <ul className="flex ">
                  <li className="p-[10px] bg-white mr-[5px] mb-[10px]"></li>
                  <li className="p-[10px] bg-black mr-[5px] mb-[10px]"></li>
                  <li className="p-[10px] bg-red-400 mr-[5px] mb-[10px]"></li>
                  <li className="p-[10px] bg-amber-100 mr-[5px] mb-[10px]"></li>
                  <li className="p-[10px] bg-indigo-950 mr-[5px] mb-[10px]"></li>
                </ul>
              </div>
              <div className="flex justify-between">
                <div className="text-[#ABABAB] font-bold">Nữ</div>
                <div className="text-[#ABABAB] font-bold">XS-XXL</div>
              </div>
              <div className="font-bold text-[17px]">
                Áo Polo Vải Pique Co Giãn Ngắn Tay
              </div>
              <div className="mb-[4px]">
                <span className="text-[#7d7d7d]">NEW</span>
              </div>
              <div className="font-bold text-[20px]">489.000 VND</div>
            </div>
            <div className="w-[214px] ">
              <div>
                <img src={product2} alt="" />
              </div>
              <div className="my-[20px]">
                <ul className="flex ">
                  <li className="p-[10px] bg-white mr-[5px] mb-[10px]"></li>
                  <li className="p-[10px] bg-black mr-[5px] mb-[10px]"></li>
                  <li className="p-[10px] bg-red-400 mr-[5px] mb-[10px]"></li>
                  <li className="p-[10px] bg-amber-100 mr-[5px] mb-[10px]"></li>
                  <li className="p-[10px] bg-indigo-950 mr-[5px] mb-[10px]"></li>
                </ul>
              </div>
              <div className="flex justify-between">
                <div className="text-[#ABABAB] font-bold">Nữ</div>
                <div className="text-[#ABABAB] font-bold">XS-XXL</div>
              </div>
              <div className="font-bold text-[17px]">
                Áo Polo Vải Pique Co Giãn Ngắn Tay
              </div>
              <div className="mt-[20px] font-bold text-[20px]">489.000 VND</div>
              <div className="text-[#f59e0b] mr-[20px] text-[15px]">
                <span>
                  <i className="fa-solid fa-star"></i>
                </span>
                <span>
                  <i className="fa-solid fa-star"></i>
                </span>
                <span>
                  <i className="fa-solid fa-star"></i>
                </span>
                <span>
                  <i className="fa-solid fa-star"></i>
                </span>
                <span>
                  <i className="fa-solid fa-star"></i>
                </span>
                <span className="ml-[10px] text-black text-[14px]">(3)</span>
              </div>
            </div>
            <div className="w-[214px] ml-[20px]">
              <div>
                <img src={product2} alt="" />
              </div>
              <div className="my-[20px]">
                <ul className="flex ">
                  <li className="p-[10px] bg-white mr-[5px] mb-[10px]"></li>
                  <li className="p-[10px] bg-black mr-[5px] mb-[10px]"></li>
                  <li className="p-[10px] bg-red-400 mr-[5px] mb-[10px]"></li>
                  <li className="p-[10px] bg-amber-100 mr-[5px] mb-[10px]"></li>
                  <li className="p-[10px] bg-indigo-950 mr-[5px] mb-[10px]"></li>
                </ul>
              </div>
              <div className="flex justify-between">
                <div className="text-[#ABABAB] font-bold">Nữ</div>
                <div className="text-[#ABABAB] font-bold">XS-XXL</div>
              </div>
              <div className="font-bold text-[17px]">
                Áo Polo Vải Pique Co Giãn Ngắn Tay
              </div>
              <div className="mt-[20px] font-bold text-[20px]">489.000 VND</div>
              <div className="text-[#f59e0b] mr-[20px] text-[15px]">
                <span>
                  <i className="fa-solid fa-star"></i>
                </span>
                <span>
                  <i className="fa-solid fa-star"></i>
                </span>
                <span>
                  <i className="fa-solid fa-star"></i>
                </span>
                <span>
                  <i className="fa-solid fa-star"></i>
                </span>
                <span>
                  <i className="fa-solid fa-star"></i>
                </span>
                <span className="ml-[10px] text-black text-[14px]">(3)</span>
              </div>
            </div>
          </div>
          <div className="flex mb-[50px]">
            <div className="w-[214px]">
              <div>
                <img src={product2} alt="" />
              </div>
              <div className="my-[20px]">
                <ul className="flex ">
                  <li className="p-[10px] bg-white mr-[5px] mb-[10px]"></li>
                  <li className="p-[10px] bg-black mr-[5px] mb-[10px]"></li>
                  <li className="p-[10px] bg-red-400 mr-[5px] mb-[10px]"></li>
                  <li className="p-[10px] bg-amber-100 mr-[5px] mb-[10px]"></li>
                  <li className="p-[10px] bg-indigo-950 mr-[5px] mb-[10px]"></li>
                </ul>
              </div>
              <div className="flex justify-between">
                <div className="text-[#ABABAB] font-bold">Nữ</div>
                <div className="text-[#ABABAB] font-bold">XS-XXL</div>
              </div>
              <div className="font-bold text-[17px]">
                Áo Polo Vải Pique Co Giãn Ngắn Tay
              </div>
              <div className="mt-[20px] font-bold text-[20px]">489.000 VND</div>
              <div className="text-[#f59e0b] mr-[20px] text-[15px]">
                <span>
                  <i className="fa-solid fa-star"></i>
                </span>
                <span>
                  <i className="fa-solid fa-star"></i>
                </span>
                <span>
                  <i className="fa-solid fa-star"></i>
                </span>
                <span>
                  <i className="fa-solid fa-star"></i>
                </span>
                <span>
                  <i className="fa-solid fa-star"></i>
                </span>
                <span className="ml-[10px] text-black text-[14px]">(3)</span>
              </div>
            </div>
            <div className="w-[214px] mx-[20px]">
              <div>
                <img src={product2} alt="" />
              </div>
              <div className="my-[20px]">
                <ul className="flex ">
                  <li className="p-[10px] bg-white mr-[5px] mb-[10px]"></li>
                  <li className="p-[10px] bg-black mr-[5px] mb-[10px]"></li>
                  <li className="p-[10px] bg-red-400 mr-[5px] mb-[10px]"></li>
                  <li className="p-[10px] bg-amber-100 mr-[5px] mb-[10px]"></li>
                  <li className="p-[10px] bg-indigo-950 mr-[5px] mb-[10px]"></li>
                </ul>
              </div>
              <div className="flex justify-between">
                <div className="text-[#ABABAB] font-bold">Nữ</div>
                <div className="text-[#ABABAB] font-bold">XS-XXL</div>
              </div>
              <div className="font-bold text-[17px]">
                Áo Polo Vải Pique Co Giãn Ngắn Tay
              </div>
              <div className="mt-[20px] font-bold text-[20px]">489.000 VND</div>
              <div className="text-[#f59e0b] mr-[20px] text-[15px]">
                <span>
                  <i className="fa-solid fa-star"></i>
                </span>
                <span>
                  <i className="fa-solid fa-star"></i>
                </span>
                <span>
                  <i className="fa-solid fa-star"></i>
                </span>
                <span>
                  <i className="fa-solid fa-star"></i>
                </span>
                <span>
                  <i className="fa-solid fa-star"></i>
                </span>
                <span className="ml-[10px] text-black text-[14px]">(3)</span>
              </div>
            </div>
            <div className="w-[214px] ">
              <div>
                <img src={product2} alt="" />
              </div>
              <div className="my-[20px]">
                <ul className="flex ">
                  <li className="p-[10px] bg-white mr-[5px] mb-[10px]"></li>
                  <li className="p-[10px] bg-black mr-[5px] mb-[10px]"></li>
                  <li className="p-[10px] bg-red-400 mr-[5px] mb-[10px]"></li>
                  <li className="p-[10px] bg-amber-100 mr-[5px] mb-[10px]"></li>
                  <li className="p-[10px] bg-indigo-950 mr-[5px] mb-[10px]"></li>
                </ul>
              </div>
              <div className="flex justify-between">
                <div className="text-[#ABABAB] font-bold">Nữ</div>
                <div className="text-[#ABABAB] font-bold">XS-XXL</div>
              </div>
              <div className="font-bold text-[17px]">
                Áo Polo Vải Pique Co Giãn Ngắn Tay
              </div>
              <div className="mt-[20px] font-bold text-[20px]">489.000 VND</div>
              <div className="text-[#f59e0b] mr-[20px] text-[15px]">
                <span>
                  <i className="fa-solid fa-star"></i>
                </span>
                <span>
                  <i className="fa-solid fa-star"></i>
                </span>
                <span>
                  <i className="fa-solid fa-star"></i>
                </span>
                <span>
                  <i className="fa-solid fa-star"></i>
                </span>
                <span>
                  <i className="fa-solid fa-star"></i>
                </span>
                <span className="ml-[10px] text-black text-[14px]">(3)</span>
              </div>
            </div>
            <div className="w-[214px] ml-[20px]">
              <div>
                <img src={product2} alt="" />
              </div>
              <div className="my-[20px]">
                <ul className="flex ">
                  <li className="p-[10px] bg-white mr-[5px] mb-[10px]"></li>
                  <li className="p-[10px] bg-black mr-[5px] mb-[10px]"></li>
                  <li className="p-[10px] bg-red-400 mr-[5px] mb-[10px]"></li>
                  <li className="p-[10px] bg-amber-100 mr-[5px] mb-[10px]"></li>
                  <li className="p-[10px] bg-indigo-950 mr-[5px] mb-[10px]"></li>
                </ul>
              </div>
              <div className="flex justify-between">
                <div className="text-[#ABABAB] font-bold">Nữ</div>
                <div className="text-[#ABABAB] font-bold">XS-XXL</div>
              </div>
              <div className="font-bold text-[17px]">
                Áo Polo Vải Pique Co Giãn Ngắn Tay
              </div>
              <div className="mt-[20px] font-bold text-[20px]">489.000 VND</div>
              <div className="text-[#f59e0b] mr-[20px] text-[15px]">
                <span>
                  <i className="fa-solid fa-star"></i>
                </span>
                <span>
                  <i className="fa-solid fa-star"></i>
                </span>
                <span>
                  <i className="fa-solid fa-star"></i>
                </span>
                <span>
                  <i className="fa-solid fa-star"></i>
                </span>
                <span>
                  <i className="fa-solid fa-star"></i>
                </span>
                <span className="ml-[10px] text-black text-[14px]">(3)</span>
              </div>
            </div>
          </div>
          <div className="flex mb-[50px]">
            <div className="w-[214px]">
              <div>
                <img src={product2} alt="" />
              </div>
              <div className="my-[20px]">
                <ul className="flex ">
                  <li className="p-[10px] bg-white mr-[5px] mb-[10px]"></li>
                  <li className="p-[10px] bg-black mr-[5px] mb-[10px]"></li>
                  <li className="p-[10px] bg-red-400 mr-[5px] mb-[10px]"></li>
                  <li className="p-[10px] bg-amber-100 mr-[5px] mb-[10px]"></li>
                  <li className="p-[10px] bg-indigo-950 mr-[5px] mb-[10px]"></li>
                </ul>
              </div>
              <div className="flex justify-between">
                <div className="text-[#ABABAB] font-bold">Nữ</div>
                <div className="text-[#ABABAB] font-bold">XS-XXL</div>
              </div>
              <div className="font-bold text-[17px]">
                Áo Polo Vải Pique Co Giãn Ngắn Tay
              </div>
              <div className="mt-[20px] font-bold text-[20px]">489.000 VND</div>
              <div className="text-[#f59e0b] mr-[20px] text-[15px]">
                <span>
                  <i className="fa-solid fa-star"></i>
                </span>
                <span>
                  <i className="fa-solid fa-star"></i>
                </span>
                <span>
                  <i className="fa-solid fa-star"></i>
                </span>
                <span>
                  <i className="fa-solid fa-star"></i>
                </span>
                <span>
                  <i className="fa-solid fa-star"></i>
                </span>
                <span className="ml-[10px] text-black text-[14px]">(3)</span>
              </div>
            </div>
            <div className="w-[214px] mx-[20px]">
              <div>
                <img src={product2} alt="" />
              </div>
              <div className="my-[20px]">
                <ul className="flex ">
                  <li className="p-[10px] bg-white mr-[5px] mb-[10px]"></li>
                  <li className="p-[10px] bg-black mr-[5px] mb-[10px]"></li>
                  <li className="p-[10px] bg-red-400 mr-[5px] mb-[10px]"></li>
                  <li className="p-[10px] bg-amber-100 mr-[5px] mb-[10px]"></li>
                  <li className="p-[10px] bg-indigo-950 mr-[5px] mb-[10px]"></li>
                </ul>
              </div>
              <div className="flex justify-between">
                <div className="text-[#ABABAB] font-bold">Nữ</div>
                <div className="text-[#ABABAB] font-bold">XS-XXL</div>
              </div>
              <div className="font-bold text-[17px]">
                Áo Polo Vải Pique Co Giãn Ngắn Tay
              </div>
              <div className="mt-[20px] font-bold text-[20px]">489.000 VND</div>
              <div className="text-[#f59e0b] mr-[20px] text-[15px]">
                <span>
                  <i className="fa-solid fa-star"></i>
                </span>
                <span>
                  <i className="fa-solid fa-star"></i>
                </span>
                <span>
                  <i className="fa-solid fa-star"></i>
                </span>
                <span>
                  <i className="fa-solid fa-star"></i>
                </span>
                <span>
                  <i className="fa-solid fa-star"></i>
                </span>
                <span className="ml-[10px] text-black text-[14px]">(3)</span>
              </div>
            </div>
            <div className="w-[214px] ">
              <div>
                <img src={product2} alt="" />
              </div>
              <div className="my-[20px]">
                <ul className="flex ">
                  <li className="p-[10px] bg-white mr-[5px] mb-[10px]"></li>
                  <li className="p-[10px] bg-black mr-[5px] mb-[10px]"></li>
                  <li className="p-[10px] bg-red-400 mr-[5px] mb-[10px]"></li>
                  <li className="p-[10px] bg-amber-100 mr-[5px] mb-[10px]"></li>
                  <li className="p-[10px] bg-indigo-950 mr-[5px] mb-[10px]"></li>
                </ul>
              </div>
              <div className="flex justify-between">
                <div className="text-[#ABABAB] font-bold">Nữ</div>
                <div className="text-[#ABABAB] font-bold">XS-XXL</div>
              </div>
              <div className="font-bold text-[17px]">
                Áo Polo Vải Pique Co Giãn Ngắn Tay
              </div>
              <div>
                <span className="mb-[4px] text-[#7d7d7d] text-[16px]">NEW</span>
              </div>
              <div className="font-bold text-[20px]">489.000 VND</div>
            </div>
            <div className="w-[214px] ml-[20px]">
              <div>
                <img src={product2} alt="" />
              </div>
              <div className="my-[20px]">
                <ul className="flex ">
                  <li className="p-[10px] bg-white mr-[5px] mb-[10px]"></li>
                  <li className="p-[10px] bg-black mr-[5px] mb-[10px]"></li>
                  <li className="p-[10px] bg-red-400 mr-[5px] mb-[10px]"></li>
                  <li className="p-[10px] bg-amber-100 mr-[5px] mb-[10px]"></li>
                  <li className="p-[10px] bg-indigo-950 mr-[5px] mb-[10px]"></li>
                </ul>
              </div>
              <div className="flex justify-between">
                <div className="text-[#ABABAB] font-bold">Nữ</div>
                <div className="text-[#ABABAB] font-bold">XS-XXL</div>
              </div>
              <div className="font-bold text-[17px]">
                Áo Polo Vải Pique Co Giãn Ngắn Tay
              </div>
              <div>
                <span className="mb-[4px] text-[#7d7d7d] text-[16px]">NEW</span>
              </div>
              <div className=" font-bold text-[20px]">489.000 VND</div>
              <div className="text-[#f59e0b] mr-[20px] text-[15px]">
                <span>
                  <i className="fa-solid fa-star"></i>
                </span>
                <span>
                  <i className="fa-solid fa-star"></i>
                </span>
                <span>
                  <i className="fa-solid fa-star"></i>
                </span>
                <span>
                  <i className="fa-solid fa-star"></i>
                </span>
                <span>
                  <i className="fa-solid fa-star"></i>
                </span>
                <span className="ml-[10px] text-black text-[14px]">(3)</span>
              </div>
            </div>
          </div>
          <div className="flex mb-[50px]">
            <div className="w-[214px]">
              <div>
                <img src={product2} alt="" />
              </div>
              <div className="my-[20px]">
                <ul className="flex ">
                  <li className="p-[10px] bg-white mr-[5px] mb-[10px]"></li>
                  <li className="p-[10px] bg-black mr-[5px] mb-[10px]"></li>
                  <li className="p-[10px] bg-red-400 mr-[5px] mb-[10px]"></li>
                  <li className="p-[10px] bg-amber-100 mr-[5px] mb-[10px]"></li>
                  <li className="p-[10px] bg-indigo-950 mr-[5px] mb-[10px]"></li>
                </ul>
              </div>
              <div className="flex justify-between">
                <div className="text-[#ABABAB] font-bold">Nữ</div>
                <div className="text-[#ABABAB] font-bold">XS-XXL</div>
              </div>
              <div className="font-bold text-[17px]">
                Áo Polo Vải Pique Co Giãn Ngắn Tay
              </div>
              <div className="mt-[20px] font-bold text-[20px]">489.000 VND</div>
            </div>
            <div className="w-[214px] mx-[20px]">
              <div>
                <img src={product2} alt="" />
              </div>
              <div className="my-[20px]">
                <ul className="flex ">
                  <li className="p-[10px] bg-white mr-[5px] mb-[10px]"></li>
                  <li className="p-[10px] bg-black mr-[5px] mb-[10px]"></li>
                  <li className="p-[10px] bg-red-400 mr-[5px] mb-[10px]"></li>
                  <li className="p-[10px] bg-amber-100 mr-[5px] mb-[10px]"></li>
                  <li className="p-[10px] bg-indigo-950 mr-[5px] mb-[10px]"></li>
                </ul>
              </div>
              <div className="flex justify-between">
                <div className="text-[#ABABAB] font-bold">Nữ</div>
                <div className="text-[#ABABAB] font-bold">XS-XXL</div>
              </div>
              <div className="font-bold text-[17px]">
                Áo Polo Vải Pique Co Giãn Ngắn Tay
              </div>
              <div className="mt-[20px] font-bold text-[20px]">489.000 VND</div>
            </div>
            <div className="w-[214px] ">
              <div>
                <img src={product2} alt="" />
              </div>
              <div className="my-[20px]">
                <ul className="flex ">
                  <li className="p-[10px] bg-white mr-[5px] mb-[10px]"></li>
                  <li className="p-[10px] bg-black mr-[5px] mb-[10px]"></li>
                  <li className="p-[10px] bg-red-400 mr-[5px] mb-[10px]"></li>
                  <li className="p-[10px] bg-amber-100 mr-[5px] mb-[10px]"></li>
                  <li className="p-[10px] bg-indigo-950 mr-[5px] mb-[10px]"></li>
                </ul>
              </div>
              <div className="flex justify-between">
                <div className="text-[#ABABAB] font-bold">Nữ</div>
                <div className="text-[#ABABAB] font-bold">XS-XXL</div>
              </div>
              <div className="font-bold text-[17px]">
                Áo Polo Vải Pique Co Giãn Ngắn Tay
              </div>
              <div className="mt-[20px] font-bold text-[20px]">489.000 VND</div>
            </div>
            <div className="w-[214px] mb-[30px] ">
              <div>
                <img src={product2} alt="" />
              </div>
              <div className="my-[20px]">
                <ul className="flex ">
                  <li className="p-[10px] bg-white mr-[5px] mb-[10px]"></li>
                  <li className="p-[10px] bg-black mr-[5px] mb-[10px]"></li>
                  <li className="p-[10px] bg-red-400 mr-[5px] mb-[10px]"></li>
                  <li className="p-[10px] bg-amber-100 mr-[5px] mb-[10px]"></li>
                  <li className="p-[10px] bg-indigo-950 mr-[5px] mb-[10px]"></li>
                </ul>
              </div>
              <div className="flex justify-between">
                <div className="text-[#ABABAB] font-bold">Nữ</div>
                <div className="text-[#ABABAB] font-bold">XS-XXL</div>
              </div>
              <div className="font-bold text-[17px]">
                Áo Polo Vải Pique Co Giãn Ngắn Tay
              </div>
              <div className="mt-[20px] font-bold text-[20px]">489.000 VND</div>
            </div>
          </div>
          <div className="flex justify-center border-t-[0.5px] border-slate-800">
            <button>
              <span className="text-black hover:text-slate-800 font-bold text-[20px]">
                Tải thêm
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
