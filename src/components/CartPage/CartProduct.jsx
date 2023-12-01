import React from 'react'
import { deleteProductFromCartThunk } from '../../store/Slices/cart.slice'
import { useDispatch } from 'react-redux'

const CartProduct = ({prod}) => {
    const dispatch=useDispatch()

    const handleDelete= () =>{
        dispatch(deleteProductFromCartThunk(prod.id))
    }
  return (
    <section className='cartproduct'>
        <header className='cartproduct__header'>
            <img className='cartproduct__img' src={prod.product.images[0].url} alt="" />
        </header>
        <article className='cartproduct__'>
            <h3 className='cartproduct__'>{prod.product.title}</h3>
            <span className='cartproduct__'>{prod.quantity}</span>
            <div className='cartproduct__'>
                <span className='cartproduct__'>price</span>
                <span className='cartproduct__'>{prod.product.price}</span>
            </div>
        </article>
        <button className='cartproduct__' onClick={handleDelete}>
        <i className='bx bx-trash' ></i>
        </button>
    </section>
  )
}

export default CartProduct