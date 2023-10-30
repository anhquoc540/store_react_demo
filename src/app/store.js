import { configureStore, getDefaultMiddleware  } from "@reduxjs/toolkit";
import materialReducer from "../action/features/materials/materialSlice";
import clothReducer from "../action/features/clothes/clothSlice"
import filterReducer from "../action/features/filter/filterSlice"
import cartReducer from "../action/features/cart/cartSlice";
import orderReducer from "../action/features/orders/orderSlice"
export const store = configureStore({
    reducer: {
        material: materialReducer,
        cloth: clothReducer,
        filter: filterReducer,
        cart: cartReducer,
        order:orderReducer,
       
    },

});