import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "./Slice/MainSlice";

const Store = configureStore({
  reducer: {
    main: mainReducer,
  },
});

export default Store;
export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
