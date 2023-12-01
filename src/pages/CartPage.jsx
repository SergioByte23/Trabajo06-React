import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCartThunk, setCart } from "../store/Slices/cart.slice"
import CartProduct from "../components/CartPage/CartProduct"
import axios from "axios"
import getConfigToken from "../utils/getTokenConfig"
import './Styles/CartPage.css'

const CartPage = () => {

    
    const cart =useSelector(store =>store.cart)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getCartThunk())
    },[])
    console.log(cart);
    const totalPriceCart =cart.reduce((acc,cv)=>{
        return acc + cv.product.price * cv.quantity
    },0)

    const handlePurchase =()=>{
        const url="https://e-commerce-api-v2.academlo.tech/api/v1/purchases"
        axios.post(url,"",getConfigToken())
        .then(res=>{
            console.log(res.data)
            dispatch(setCart([]))
        })
        .catch(err=console.log(err))

    }
    return (
         <div className="cart">
            <h1 className="cart__title">Cart</h1>
            <div className="cart__div">
                {
                    cart.map(prod=>(
                        <CartProduct 
                        key={prod.id}
                        prod={prod} />
                    ))
                }
            </div>
            <hr />
            <footer className="cart__footer">
                <span className="cart__span">Total</span>
                <span className="cart__span">{totalPriceCart}</span>
                <button className="cart__btn" onClick={handlePurchase}>Checkout</button>
            </footer>
         </div>
    )
}

export default CartPage