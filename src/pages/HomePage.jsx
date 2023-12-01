import { useDispatch, useSelector } from "react-redux"
import { getProductsThunk } from "../store/Slices/products.slice";
import { useEffect, useRef, useState } from "react";
import ProductCard from "../components/HomePage/ProductCard";
import FilterCategory from "../components/HomePage/FilterCategory";
import FilterPrice from "../components/HomePage/FilterPrice";
import './Styles/HomePage.css'
import CartPage from "./CartPage";



const HomePage = () => {
  const [nameValue, setNameValue] = useState('')
  const [valueFilter, setValueFilter] = useState(true)
  const [categorySelected, setCategorySelected] = useState('all')
  const [priceRange, setPriceRange] = useState({
    from:0,
    to:Infinity
  })
  //    el useselector recibe una funcion callback
  // recibe de parametro
  const dispatch = useDispatch()
  const products = useSelector(store => store.products)
  // sirve para acceder a la store

  useEffect(() => {
    dispatch(getProductsThunk())
  }, []);
  const inputName = useRef()
  const handleInputName = () => {
    setNameValue(inputName.current.value)
  };
  console.log(nameValue);
  const callbackFilter = prod => {
    const filterName = prod.title.toLowerCase().includes(nameValue);
    const FilterCategory = categorySelected === 'all' ? true : categorySelected === prod.category.id;
    // filtrado por Precio
    const price=+prod.price;
    const filterPrice=priceRange.from<=price && price<=priceRange.to;
    return filterName && FilterCategory &&filterPrice;
  }
  const handleFilter = ()=>{
    setValueFilter(!valueFilter)
  }
  return (
    <>
    
    <div className="Homepage">
      <input className="Homepage__search" ref={inputName} onChange={handleInputName} type="text" placeholder="What are you looking for?" />
      <span onClick={handleInputName}>
        <i className='bx bx-search-alt-2 bx-sm search'>
        </i>
      </span>
      <div className="Homepage__filter__btn"   onClick={handleFilter}>
      <i class='bx bx-filter-alt'></i><span>filter</span>
      </div>
      <div className={`Homepage__filter ${valueFilter && 'form__disable'}`}>
        <h2 className="Homepage__title__price">Price</h2>
        <hr className="Homepage__hr" />
        <FilterPrice setPriceRange={setPriceRange} />
        <FilterCategory setCategorySelected={setCategorySelected} />
      </div>
      
      <div className="product-container">
        {
          // para que sirven los parentesis en est caso es que es un return implicito
          // para ya no usar la palabra return
          products?.filter(callbackFilter).map(prod => (
            <ProductCard
              key={prod.id}
              product={prod}
            />

          ))
        }
      </div>
    </div>
    </>
  )
}

export default HomePage