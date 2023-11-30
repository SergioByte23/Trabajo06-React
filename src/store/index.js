import { configureStore } from "@reduxjs/toolkit";
import products from './Slices/products.slice'
import cart from './Slices/cart.slice'

export default configureStore({
    reducer:{
        products,
        cart
    }
})
