import { useEffect, useMemo, useRef } from "react";
import { cartSlider } from "../../Store/Slice/MainSlice";
import { useAppDispatch, useAppSelector } from "../../Store/hooks/hooks";
import { CartItem, formatCurrency } from "..";
import data from "../../Data/data.json";

const CartSlider = () => {
  const CartSliderValue = useAppSelector((state) => state.main.cartSlider);

  const cartItemsArray = useAppSelector((state) => state.main.cartItems);

  const dispatch = useAppDispatch();

  const bg = useRef<HTMLDivElement>(null);

  const totalPrice = useMemo(() => {
    let total = 0;
    cartItemsArray.forEach((item) => {
      const itemData = data.StoreItems.find((data) => data.id === item.id);
      total += (itemData?.Price || 0) * item.quantity;
    });

    return formatCurrency(total);
  }, [cartItemsArray]);

  useEffect(() => {
    const closeSlider = (e: MouseEvent) => {
      if (bg.current && e.target === bg.current) {
        dispatch(cartSlider(false));
      }
    };

    window.addEventListener("click", closeSlider);

    return () => {
      window.removeEventListener("click", closeSlider);
    };
  }, [CartSliderValue]);

  return (
    <div className="w-full fixed top-0 left-0 z-[999]">
      <div
        className={`w-full h-full bg-neutral-500 opacity-40  fixed top-0 transition-all ease-in duration-200 ${
          CartSliderValue ? "right-0 opacity-1" : "-right-full opacity-0"
        }`}
        ref={bg}
      ></div>
      <div
        className={`fixed top-0  h-screen w-[80%] sm:w-[60%] lg:w-1/3 ${
          CartSliderValue ? "right-0" : "-right-full"
        }  bg-white z-50 shadow-lg transition-all ease-in-out duration-300 overflow-y-auto scrollbar-hide`}
      >
        <div className="sticky top-0 left-0 bg-white pl-4 z-10 pb-4">
          <button
            className="close-ico fill-red-500 hover:fill-red-400 transition-all ease-in-out duration-300 w-14 ml-auto inline-block  flex items-end"
            onClick={() => {
              dispatch(cartSlider(!CartSliderValue));
            }}
          >
            <svg
              clipRule="evenodd"
              fillRule="evenodd"
              strokeLinejoin="round"
              strokeMiterlimit="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m21 3.998c0-.478-.379-1-1-1h-16c-.62 0-1 .519-1 1v16c0 .621.52 1 1 1h16c.478 0 1-.379 1-1zm-8.991 6.932 2.717-2.718c.146-.146.338-.219.53-.219.405 0 .751.325.751.75 0 .193-.073.384-.219.531l-2.718 2.717 2.728 2.728c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.384-.073-.531-.219l-2.728-2.728-2.728 2.728c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l2.728-2.728-2.722-2.722c-.146-.147-.219-.338-.219-.531 0-.425.346-.749.75-.749.192 0 .384.073.53.219z"
                fillRule="nonzero"
              />
            </svg>
          </button>
          <h3 className="text-xl font-semibold mt-[-2.5rem]">Shopping Cart</h3>
        </div>
        <div id="cartSlider-container" className="w-full p-2 pl-4 ">
          {cartItemsArray.length !== 0 ? (
            <>
              {cartItemsArray.map((item) => (
                <CartItem key={item.id} {...item} />
              ))}
              <div className="pl-2 font-bold text-2xl text-neutral-700">
                <h4>Total: {totalPrice}</h4>
              </div>
            </>
          ) : (
            <div className="w-full min-h-[90dvh] grid place-content-center">
              <h2 className="text-xl">Cart is Empty</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartSlider;
