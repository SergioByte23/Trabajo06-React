import { useState } from "react"
import { addProductTocartThunk } from "../../store/Slices/cart.slice"
import { useDispatch } from "react-redux"


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
        <img src={product?.images[0].url}alt="" />
        <h1>{product?.brand}</h1>
        <h2>{product?.title}</h2>
        <p>{product?.description}</p>
        <footer>
          <div>
            <span>Price</span>
            <span>{product?.price}</span>
          </div>
          <div>
            <button onClick={handleMinus}>-</button>
            <div>{quantity}</div>
            <button onClick={handlePlus}>+</button>
          </div>
          <button onClick={handleAddTocart}>Add to cart</button>
        </footer>
      </article>
  )
}

export default ProductInfo