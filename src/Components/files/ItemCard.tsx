import { useEffect, useState } from "react";
import { formatCurrency } from "..";
import {
  increaseQuantity,
  decreaseQuantity,
  removeCart,
} from "../../Store/Slice/MainSlice";
import { useAppDispatch, useAppSelector } from "../../Store/hooks/hooks";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

const ItemCard = ({ data }: StoreItemProps) => {
  const { id, Name, Price, Quantity, images } = data;
  const dispatch = useAppDispatch();

  const cartItemsArray = useAppSelector((state) => state.main.cartItems);

  const item = cartItemsArray.find((item) => item.id === id);

  const [cartQuantity, setCartQuantity] = useState<number>(0);

  useEffect(() => {
    setCartQuantity(item?.quantity || 0);
  }, [item?.quantity]);

  return (
    <div className="bg-white rounded-md shadow-md overflow-hidden" key={id}>
      <img src={images} alt={Name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <div className="flex items-center justify-between ">
          <h2 className="text-lg text-gray-700">{Name}</h2>
          <p className="text-sm text-gray-500">{Quantity} Stock</p>
        </div>
        <span className="text-2xl text-lg font-medium text-gray-900 mt-4">
          {formatCurrency(Price)}
        </span>
        <div className="mt-4">
          {cartQuantity >= 1 ? (
            <div>
              <div className="counter w-full flex items-center justify-between gap-4">
                <button
                  className="w-full grid content-center bg-indigo-500 text-xl text-white rounded-lg p-2 hover:bg-indigo-400 transition-all ease-in-out duration-300"
                  onClick={() => {
                    dispatch(increaseQuantity(id));
                  }}
                >
                  +
                </button>
                <span className="text-xl ">{cartQuantity}</span>
                <button
                  className="w-full grid content-center bg-indigo-500 text-xl text-white rounded-lg p-2 hover:bg-indigo-400 transition-all ease-in-out duration-300"
                  onClick={() => {
                    dispatch(decreaseQuantity(id));
                  }}
                >
                  -
                </button>
              </div>
              <button
                className="w-full bg-red-500 text-white font-semibold p-2 rounded-lg hover:bg-red-400 transition-all ease-in-out duration-200 mt-4"
                onClick={() => {
                  dispatch(removeCart(id));
                }}
              >
                Remove
              </button>
            </div>
          ) : (
            <button
              onClick={() => {
                dispatch(increaseQuantity(id));
              }}
              className="w-full bg-indigo-600 text-white font-semibold p-2 rounded-lg hover:bg-indigo-500 transition-all ease-in-out duration-200"
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
