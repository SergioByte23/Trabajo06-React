import { useState } from "react"
import { addProductTocartThunk } from "../../store/Slices/cart.slice"
import { useDispatch } from "react-redux"
import './styles/ProductInfo.css'


const ProductInfo = ({product}) => {

  const [quantity, setQuantity] = useState(1)
  
  const dispatch=useDispatch()
  const handleMinus=()=>{
    if(quantity-1>=1){
      dispatch(setQuantity(quantity-1))
    }
    
  }
  const handlePlus=()=>setQuantity(quantity+1)
  const handleAddTocart =()=>{
    dispatch(addProductTocartThunk(product.id,quantity))
  }
  return (
      <article>
        {/* <img src={product?.images[0].url}alt="" /> */}
        <h1>{product?.brand}</h1>
        <h2>{product?.title}</h2>
        <p>{product?.description}</p>
        <footer className="ProductInfo">
          <div className="ProductInfo__price">
            <span className="ProductInfo__quantity__subtitle">Price</span>
            <h3>{product?.price}</h3>
          </div>
          <div className="ProductInfo__quantity">
            <h3 className="ProductInfo__quantity__subtitle" >Quantity</h3>
            <div className="ProductInfo__quantity__count">
            <button onClick={handleMinus}>-</button>
            <div className="ProductInfo__quantity__number">{quantity}</div>
            <button onClick={handlePlus}>+</button>
            </div>
          </div>          
          <button className="ProductInfo__addCart" onClick={handleAddTocart}>Add to cart</button>
        
        </footer>
      </article>
  )
}

export default ProductInfo