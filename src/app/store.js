import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../slices/basketSlice";




// this is goble storage redux 
export const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
});





