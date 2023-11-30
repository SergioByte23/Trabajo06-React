import { createSlice, current } from "@reduxjs/toolkit";
import getConfigToken from "../../utils/getTokenConfig";
import axios from "axios";

const cartSlice=createSlice({
    name:'cart',
    initialState:[],
    reducers: {
        addToCart: (currentValue,action)=>[...currentValue,action.payload],
        removeFromCart:(currentValue,action)=> {  return currentValue.filter(prod=>prod.id!==action.payload)
        },
        setCart:(currentValue,action)=>action.payload,
        }
})
export const {addToCart,removeFromCart,setCart}=cartSlice.actions
export default cartSlice.reducer

const baseUrl='https://e-commerce-api-v2.academlo.tech/api/v1/cart'
export const getCartThunk =()=>(dispatch)=>{
    const url=`${baseUrl}`
    axios.get(url,getConfigToken())
    .then(res=> dispatch(setCart(res.data)))
    .catch(err=>console.log(err))
}
export const addProductTocartThunk=(productId,quantity=1)=>(dispatch)=>{
    // recibe dos parametros lo puedes ver en la doc
    const url=`${baseUrl}`
    const data ={productId,quantity}
    axios.post(url,data,getConfigToken())
    .then(res=>console.log(res.data))
    .catch(err=>console.log(err))
}
export const deleteProductFromCartThunk =(id)=>(dispatch)=>{
    const url=`${baseUrl}/${id}`
    axios.delete(url,getConfigToken())
    .then(res=>{
        console.log(res.data)
        dispatch(removeFromCart(id))})
    .catch(err=>console.log(err))
}