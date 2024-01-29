import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import { resetCart } from "../../redux/orebiSlice";
import {
  emptyCart,
  product1InCart,
  product2InCart,
} from "../../assets/images/index";
import ItemCard from "./ItemCard";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.orebiReducer.products);
  const [totalAmt, setTotalAmt] = useState("");
  const [shippingCharge, setShippingCharge] = useState("");
  useEffect(() => {
    let price = 0;
    products.map((item) => {
      price += item.price * item.quantity;
      return price;
    });
    setTotalAmt(price);
  }, [products]);
  useEffect(() => {
    if (totalAmt <= 200) {
      setShippingCharge(30);
    } else if (totalAmt <= 400) {
      setShippingCharge(25);
    } else if (totalAmt > 401) {
      setShippingCharge(20);
    }
  }, [totalAmt]);
  return (
    <div className="px-[100px]">
      <Breadcrumbs title="Cart" />

      {/* {products.length > 0 ? (
        <div className="pb-20">
          <div className="w-full h-20 bg-[#F5F7F7] text-primeColor hidden lgl:grid grid-cols-5 place-content-center px-6 text-lg font-titleFont font-semibold">
            <h2 className="col-span-2">Product</h2>
            <h2>Price</h2>
            <h2>Quantity</h2>
            <h2>Sub Total</h2>
          </div>
          <div className="mt-5">
            {products.map((item) => (
              <div key={item._id}>
                <ItemCard item={item} />
              </div>
            ))}
          </div>

          <button
            onClick={() => dispatch(resetCart())}
            className="py-2 px-10 bg-red-500 text-white font-semibold uppercase mb-4 hover:bg-red-700 duration-300"
          >
            Reset cart
          </button>

          <div className="flex flex-col mdl:flex-row justify-between border py-4 px-4 items-center gap-2 mdl:gap-0">
            <div className="flex items-center gap-4">
              <input
                className="w-44 mdl:w-52 h-8 px-4 border text-primeColor text-sm outline-none border-gray-400"
                type="text"
                placeholder="Coupon Number"
              />
              <p className="text-sm mdl:text-base font-semibold">
                Apply Coupon
              </p>
            </div>
            <p className="text-lg font-semibold">Update Cart</p>
          </div>
          <div className="max-w-7xl gap-4 flex justify-end mt-4">
            <div className="w-96 flex flex-col gap-4">
              <h1 className="text-2xl font-semibold text-right">Cart totals</h1>
              <div>
                <p className="flex items-center justify-between border-[1px] border-gray-400 border-b-0 py-1.5 text-lg px-4 font-medium">
                  Subtotal
                  <span className="font-semibold tracking-wide font-titleFont">
                    ${totalAmt}
                  </span>
                </p>
                <p className="flex items-center justify-between border-[1px] border-gray-400 border-b-0 py-1.5 text-lg px-4 font-medium">
                  Shipping Charge
                  <span className="font-semibold tracking-wide font-titleFont">
                    ${shippingCharge}
                  </span>
                </p>
                <p className="flex items-center justify-between border-[1px] border-gray-400 py-1.5 text-lg px-4 font-medium">
                  Total
                  <span className="font-bold tracking-wide text-lg font-titleFont">
                    ${totalAmt + shippingCharge}
                  </span>
                </p>
              </div>
              <div className="flex justify-end">
                <Link to="/paymentgateway">
                  <button className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300">
                    Proceed to Checkout
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col mdl:flex-row justify-center items-center gap-4 pb-20"
        >
          <div>
            <img
              className="w-80 rounded-lg p-4 mx-auto"
              src={emptyCart}
              alt="emptyCart"
            />
          </div>
          <div className="max-w-[500px] p-4 py-8 bg-white flex gap-4 flex-col items-center rounded-md shadow-lg">
            <h1 className="font-titleFont text-xl font-bold uppercase">
              Your Cart feels lonely.
            </h1>
            <p className="text-sm text-center px-10 -mt-2">
              Your Shopping cart lives to serve. Give it purpose - fill it with
              books, electronics, videos, etc. and make it happy.
            </p>
            <Link to="/shop">
              <button className="bg-primeColor rounded-md cursor-pointer hover:bg-black active:bg-gray-900 px-8 py-2 font-titleFont font-semibold text-lg text-gray-200 hover:text-white duration-300">
                Continue Shopping
              </button>
            </Link>
          </div>
        </motion.div>
      )} */}
      <div className="flex justify-between">
        <div className="flex w-[100%] justify-between">
          <div className="flex-col">
            <div className="w-[770px] h-[265.16px] flex">
              <div className="w-[215.59px] h-[237.16px]">
                <span>
                  <img src={product1InCart} alt="" />
                </span>
              </div>
              <div className="flex ">
                <div className="flex-col pl-[20px] w-[554.41px]">
                  <div className="flex justify-between">
                    <div>
                      <div>
                        <p className="text-[20px] font-bold">Áo Nỉ</p>
                      </div>
                      <div className="my-[8px] flex">
                        <span className="text-[#7d7d7d] text-[16px]">
                          Mã sản phẩm:
                        </span>
                        <span className="text-[#7d7d7d] text-[16px] ml-[4.5px]">
                          465199
                        </span>
                      </div>
                      <div className="mb-[8px] flex">
                        <span className="text-[16px]">Màu sắc:</span>
                        <span className="text-[16px] ml-[4.5px]">52 GREEN</span>
                      </div>
                      <div className="mb-[8px] flex">
                        <span className="text-[16px]">Kích cỡ:</span>
                        <span className="text-[16px] ml-[4.5px]">Unisex S</span>
                      </div>
                      <div className="mt-[8px]">
                        <span className="text-[16px]">686.000 VND</span>
                      </div>
                    </div>
                    <div className="w-[30px] h-[145.56px] ">
                      <span className="text-[30px]">
                        <i className="fa-solid fa-xmark"></i>
                      </span>
                    </div>
                  </div>
                  <div className="my-[8px]">
                    <span className="font-semibold text-[16px]">SỐ LƯỢNG</span>
                  </div>
                  <div className="flex justify-between">
                    <div>
                      <button className="flex justify-around items-center border-[1px] border-[#ABABAB] w-[134px] h-[45px]">
                        <span>1</span>
                        <span className="text-[#757575]">
                          <i className="fa-solid fa-chevron-down"></i>
                        </span>
                      </button>
                    </div>
                    <div className="flex">
                      <span className="text-[16px] items-center flex justify-center">
                        TỔNG:
                      </span>
                      <span className="text-[20px] font-bold ml-[5px] items-center flex justify-center">
                        686.000 VND
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="text-[0.5px] text-[#7d7d7d] mt-[28px] mb-[10px]" />
            <div className="w-[770px] h-[265.16px] flex">
              <div className="w-[215.59px] h-[237.16px]">
                <span>
                  <img src={product2InCart} alt="" />
                </span>
              </div>
              <div className="flex ">
                <div className="flex-col pl-[20px] w-[554.41px]">
                  <div className="flex justify-between">
                    <div>
                      <div>
                        <p className="text-[20px] font-bold">Áo Nỉ</p>
                      </div>
                      <div className="my-[8px] flex">
                        <span className="text-[#7d7d7d] text-[16px]">
                          Mã sản phẩm:
                        </span>
                        <span className="text-[#7d7d7d] text-[16px] ml-[4.5px]">
                          465199
                        </span>
                      </div>
                      <div className="mb-[8px] flex">
                        <span className="text-[16px]">Màu sắc:</span>
                        <span className="text-[16px] ml-[4.5px]">52 GREEN</span>
                      </div>
                      <div className="mb-[8px] flex">
                        <span className="text-[16px]">Kích cỡ:</span>
                        <span className="text-[16px] ml-[4.5px]">Unisex S</span>
                      </div>
                      <div className="mt-[8px]">
                        <span className="text-[16px]">686.000 VND</span>
                      </div>
                    </div>
                    <div className="w-[30px] h-[145.56px] ">
                      <span className="text-[30px]">
                        <i className="fa-solid fa-xmark"></i>
                      </span>
                    </div>
                  </div>
                  <div className="my-[8px]">
                    <span className="font-semibold text-[16px]">SỐ LƯỢNG</span>
                  </div>
                  <div className="flex justify-between">
                    <div>
                      <button className="flex justify-around items-center border-[1px] border-[#ABABAB] w-[134px] h-[45px]">
                        <span>1</span>
                        <span className="text-[#757575]">
                          <i className="fa-solid fa-chevron-down"></i>
                        </span>
                      </button>
                    </div>
                    <div className="flex">
                      <span className="text-[16px] items-center flex justify-center">
                        TỔNG:
                      </span>
                      <span className="text-[20px] font-bold ml-[5px] items-center flex justify-center">
                        686.000VND
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col ml-[70px] w-[385px]">
            <div className="w-[385px] h-[260.77px] py-[28px] px-[20px] border-[1px] border-[#e0e0e0] ">
              <div className="flex mb-[28px]">
                <span className="text-[19px] font-bold">TỔNG ĐƠN HÀNG</span>
                <span className="text-[19px] font-bold">| 2 SẢN PHẨM</span>
              </div>
              <div className="flex justify-between mb-[16px]">
                <span className="text-[16px]">Tổng cộng</span>
                <span className="text-[16px]">979.000 VND</span>
              </div>
              <div className="flex justify-between ">
                <span className="text-[20px] font-bold">TỔNG</span>
                <span className="text-[20px] font-bold">979.000 VND</span>
              </div>
              <div className="flex justify-between mt-[9.6px] mb-[16px]">
                <span className="text-[16px]">
                  Đã bao gồm thuế giá trị gia tăng
                </span>
                <span className="text-[16px]">72.519 VND</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[20px] font-bold">TỔNG ĐƠN ĐẶT HÀNG</span>
                <span className="text-[16px] font-bold">979.000 VND</span>
              </div>
            </div>
            <div className="flex py-[14px] justify-between border-t-[0.5px] border-[#7d7d7d] mt-[30px]">
              <button className="flex justify-between w-[100%]">
                <div className="flex">
                  <span>
                    <img src="images/coupon.svg" alt="" />
                  </span>
                  <span className="text-[16px] text-[#7d7d7d]">
                    Phiếu giảm giá
                  </span>
                </div>
                <div>
                  <span className="text-[#7d7d7d]">
                    <i className="fa-solid fa-chevron-right"></i>
                  </span>
                </div>
              </button>
            </div>
            <div className="flex py-[14px] justify-between border-t-[0.5px] border-[#7d7d7d]">
              <button className="flex justify-between w-[100%] h-[64px] mb-[12px]">
                <div className="flex">
                  <span className="mr-[8px]">
                    <i className="fa-solid fa-gift"></i>
                  </span>
                  <span className="text-[16px] text-[#7d7d7d]">
                    Tùy chọn quà tặng
                  </span>
                </div>
                <div>
                  <span className="text-[#7d7d7d]">
                    <i className="fa-solid fa-chevron-right"></i>
                  </span>
                </div>
              </button>
            </div>
            <div className="flex w-[385px]">
              <div className="pr-[29.5px] text-[15px] w-[361px] h-[288px]">
                Từ 26.01 - 08.02.2024, 4,000 đơn hàng online đầu tiên sẽ nhận
                ngay 01 Bộ 5 Bao Lì Xì. Chương trình có thể kết thúc sớm khi hết
                quà. Từ 19.01- 15.02.2024, với bất kỳ đơn hàng sử dụng dịch vụ
                Click & Collect (Đặt Online và Nhận hàng tại các cửa hàng) chọn
                nhận hàng tại tất cả cửa hàng UNIQLO trên toàn quốc, tặng mã
                giảm giá 100.000VND cho đơn hàng tiếp theo tại website/ứng dụng
                từ 1.000.000VND. Miễn phí giao hàng áp dụng cho đơn hàng giao
                tận nơi từ 999.000VND và tất cả các đơn nhận tại cửa hàng (Click
                & Collect).
              </div>
              <div className="items-center flex justify-center w-[21px]">
                <i className="fa-solid fa-circle-info"></i>
              </div>
            </div>
            <div className="bg-[#FE0202] py-[8px] px-[4px] flex justify-center w-[385px]">
              <button>
                <span className="text-white text-[16px] font-bold items-center ">
                  THANH TOÁN
                </span>
              </button>
            </div>
            <div className="group bg-white hover:border-[#7d7d7d] hover:text-[#7d7d7d] mt-[16px] w-[385px] h-[45px] border-[1px] border-black flex justify-center w-[385px]">
              <button className="">
                <span className="text-black text-[16px] group-hover:text-[#7d7d7d] font-bold">
                  TIẾP TỤC MUA SẮM
                </span>
              </button>
            </div>
            <div className=" mt-[10px]">
              <span className="text-[#7d7d7d] text-[13px]">
                Đặt mua thêm 20.000 VND (bao gồm VAT), hoặc chọn hình thức Click
                & Collect, để được miễn phí giao hàng.ĐÃ XEM GẦN ĐÂY
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
