import { useAppDispatch } from "../../Store/hooks/hooks";
import data from "../../Data/data.json";
import { formatCurrency } from "../index";
import { removeCart } from "../../Store/Slice/MainSlice";

type CartItemProps = {
  id: number;
  quantity: number;
};

const CartItem = ({ id, quantity }: CartItemProps) => {
  const dispatch = useAppDispatch();

  const item = data.StoreItems.find((item) => item.id === id);

  if (item === null) return null;

  return (
    <div className="w-full flex items-center justify-between my-4 bg-neutral-100 p-2 rounded-md">
      <div className="flex items-center gap-2 relative">
        {quantity > 1 ? (
          <div className="absolute bottom-0 left-0 bg-indigo-500 text-white w-[30px] aspect-square grid place-content-center rounded-tr-md shadow-md">
            <span className="text-sm">x{quantity}</span>
          </div>
        ) : null}
        <img
          className="w-full max-w-[100px] aspect-square object-cover rounded-sm"
          src={item?.images}
          alt={item?.Name}
        />
        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-semibold capitalize">{item?.Name}</h3>
          <span className="text-sm font-medium text-neutral-600">
            {formatCurrency(item?.Price)}
          </span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-md font-medium">{formatCurrency(200)}</span>
        <button
          onClick={() => {
            dispatch(removeCart(id));
          }}
          className="w-8 hover:fill-red-400  transition-all duration-200 ease-in-out fill-red-500"
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
              d="m20.015 6.506h-16v14.423c0 .591.448 1.071 1 1.071h14c.552 0 1-.48 1-1.071 0-3.905 0-14.423 0-14.423zm-5.75 2.494c.414 0 .75.336.75.75v8.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-8.5c0-.414.336-.75.75-.75zm-4.5 0c.414 0 .75.336.75.75v8.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-8.5c0-.414.336-.75.75-.75zm-.75-5v-1c0-.535.474-1 1-1h4c.526 0 1 .465 1 1v1h5.254c.412 0 .746.335.746.747s-.334.747-.746.747h-16.507c-.413 0-.747-.335-.747-.747s.334-.747.747-.747zm4.5 0v-.5h-3v.5z"
              fillRule="nonzero"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
