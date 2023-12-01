import { Link } from "react-router-dom"
import './Styles/HeaderNav.css'
import { useState } from "react"
const HeaderNav = () => {
  // const [cartActivate, setCartActivate] = useState(false)
  // const handleActivateCard=()=>{
  //   setCartActivate(!cartActivate);
  // }
  return (
    <header className="headernav">
    <h1 className="headernav__title"><Link  to='/'> <span className="headernav__span">e-commerce </span></Link></h1>
    <nav className=" headernav__nav">
        <ul className="headernav__ul">
            <li className="headernav__li headernav__register"><Link to='/register'><i className='bx bx-user-plus bx-sm'></i></Link></li>
            <li className="headernav__li headernav__login"><Link to='/login'><i className='bx bxs-user bx-sm' ></i></Link></li>
            <li className="headernav__li headernav__cart"><Link to='/cart'><i className='bx bxs-cart-add bx-sm' ></i></Link></li>
            {/* <li onClick={handleActivateCard} className={`headernav__li headernav__cart ${cartActivate && 'form__disablee'}`} ><i  className='bx bxs-cart-add bx-sm' /></li> */}
            <li className="headernav__li headernav__Compras"><Link to='/purchases'><i className='bx bx-store bx-sm'></i></Link></li>
        </ul>
    </nav>
    </header>
  )
}

export default HeaderNav
