
const PurchaseCard = ({purchase}) => {
  return (
    <article className="purchase__article">
        <header className="purchase__header">
            <img className="purchase__img" src={purchase.product.images[0].url} alt="" />
        </header>
        <h3 className="purchase__subtitle">{purchase.product.title}</h3>
        <span className="purchase__quantity">{purchase.quantity}</span>
        <div className="purchase__price">{purchase.product.price}</div>
    </article>
  )
}

export default PurchaseCard