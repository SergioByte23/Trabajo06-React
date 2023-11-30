import { useNavigate } from "react-router-dom"
import { addProductTocartThunk } from "../../store/Slices/cart.slice"
import { useDispatch } from "react-redux"
import './Styles/ProductCard.css'

const ProductCard = ({product}) => {

    const navigate=useNavigate()
    // hook usenavigate nos genera un hook que permite navegar a otras rutas

    const dispatch =useDispatch()
    // hook para despachar
    const handleNavigate=()=>{
        navigate(`/product/${product.id}`)

    }
    const handleAddCart = e=>{
        e.stopPropagation()
        dispatch(addProductTocartThunk(product.id))
    }
  return (
    <article className="product" onClick={handleNavigate}>
        <header className="product__header">
            <img className="product__img product__img-1" src={product.images[0].url} alt="" />
            <img className="product__img product__img-2" src={product.images[1].url} alt="" />
        </header>
        <section className="product__body">
            <h4 className="product__brand">{product.brand}</h4>
            <h3 className="product__name">{product.title}</h3>
            <div className="product__price">
                <span className="product__price__label">Price</span>
                <span className="product__price__Value">{product.price}</span>                
            </div>
            <button className="product__btn" onClick={handleAddCart}>
                <i className='bx bx-cart product__iconcart'></i>
            </button>
        </section>
    </article>
    
  )
}

export default ProductCard