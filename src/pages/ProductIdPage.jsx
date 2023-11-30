import { useParams } from "react-router-dom"
import ProductInfo from "../components/ProductIdPage/ProductInfo"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"
import SimilarProducts from "../components/ProductIdPage/SimilarProducts"
import SliderImg from "../components/ProductIdPage/SliderImg"
import './Styles/ProductIdPage.css'

const ProductIdPage = () => {
  const { id } = useParams()
  const [product, getProduct] = useFetch()


  useEffect(() => {
    const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}`
    getProduct(url)
  }, [id])
  console.log(product);
  return (
    <div>
      <div className="productidpage__box">
      <SliderImg product={product} />      
      <ProductInfo product={product} />
      </div>
      <SimilarProducts categoryId={product?.category.id} idProd={product?.id} />
    </div>
  )
}

export default ProductIdPage