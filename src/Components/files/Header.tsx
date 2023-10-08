import { Link, NavLink } from "react-router-dom";
import { Wrapper } from "../index";
import { useAppDispatch, useAppSelector } from "../../Store/hooks/hooks";
import { cartSlider } from "../../Store/Slice/MainSlice";
import { useMemo } from "react";

const Header = () => {
  const links: { name: string; path: string }[] = [
    { name: "Home", path: "/" },
    { name: "Store", path: "/store" },
  ];

  const CartSliderValue = useAppSelector((state) => state.main.cartSlider);
  const cartItemsArray = useAppSelector((state) => state.main.cartItems);
  const dispatch = useAppDispatch();

  const cart = useMemo(() => {
    let total = 0;

    cartItemsArray.forEach((item) => {
      total += item.quantity;
    });

    return total;
  }, [cartItemsArray]);

  return (
    <header className="p-4 bg-white sticky top-0 left-0">
      <Wrapper>
        <div id="header-container" className="flex justify-between">
          <h1 className="text-lg font-bold uppercase">
            <Link to={"/"}>TSconnects</Link>
          </h1>
          <nav>
            <div
              id="navlinks"
              className="flex gap-4 items-center text-neutral-700 text-lg font-semibold"
            >
              {links.map((link, index) => (
                <NavLink
                  key={index}
                  to={link.path}
                  className="hover:text-indigo-600 transition-all ease-in-out duration-300"
                >
                  {link.name}
                </NavLink>
              ))}
              <button
                className=" aspect-square bg-indigo-600 p-2 rounded-md hover:opacity-[.7] transition-all ease-in-out duration-300 relative"
                onClick={() => {
                  dispatch(cartSlider(!CartSliderValue));
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#fff"
                >
                  <path d="M10 20.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm6.304-17l-3.431 14h-2.102l2.541-11h-16.812l4.615 13h13.239l3.474-14h2.178l.494-2h-4.196z" />
                </svg>
                {cartItemsArray.length !== 0 && (
                  <div className="text-sm w-[30px] aspect-square bg-indigo-400 text-white rounded-full border-2 border-white absolute bottom-[-.8rem] right-[-1rem] z-10 grid content-center">
                    <span>{cart}</span>
                  </div>
                )}
              </button>
            </div>
          </nav>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
