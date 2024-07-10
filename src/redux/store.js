import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './CartSlice'
import ProductReducer from "./ProductSlice";

const store = configureStore({
    reducer:{
        cart: cartReducer,
        products: ProductReducer
    }
})

export default store