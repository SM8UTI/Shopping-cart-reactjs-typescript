import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CartItem = {
  id: number;
  quantity: number;
};

type ShoppingCartState = {
  cartSlider: boolean;
  cartItems: CartItem[];
};

const initialState: ShoppingCartState = {
  cartSlider: false,
  cartItems: [],
};

const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    // actions
    cartSlider: (state, action: PayloadAction<boolean>) => {
      state.cartSlider = action.payload;
    },

    increaseQuantity: (state, action: PayloadAction<number>) => {
      const itemId = action.payload;
      const item = state.cartItems.find((item) => item.id === itemId);
      if (item == null) {
        state.cartItems.push({ id: itemId, quantity: 1 });
      } else {
        item.quantity++;
      }
    },
    decreaseQuantity: (state, action: PayloadAction<number>) => {
      const itemId = action.payload;
      const item = state.cartItems.find((item) => item.id === itemId);
      if (item != null) {
        if (item.quantity === 1) {
          state.cartItems = state.cartItems.filter(
            (item) => item.id !== itemId
          );
        } else {
          item.quantity--;
        }
      }
    },
    removeCart: (state, action: PayloadAction<number>) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
  },
});

export const {
  cartSlider,
  increaseQuantity,
  decreaseQuantity,
  removeCart,
  getItemQuantity,
} = mainSlice.actions;
export default mainSlice.reducer;
