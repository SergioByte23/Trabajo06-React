import { useEffect } from "react"
import useFetch from "../hooks/useFetch"
import getConfigToken from "../utils/getTokenConfig"
import PurchaseCard from "../components/PurchasesPage/PurchaseCard"
import './Styles/PurchasesPage.css'

const PurchasesPage = () => {
    const [purchasesPage,getPurchases]=useFetch()
    useEffect(()=>{
        const url='https://e-commerce-api-v2.academlo.tech/api/v1/purchases'
        getPurchases(url,getConfigToken())
    },[])
    console.log(purchasesPage);
    return (
    <div className="purchase">
        <h2 className="purchase__title">My Purchases</h2>
        <div className="purchase__card">
            {
                purchasesPage?.map(inforPurchase =>(
                    <PurchaseCard 
                        key={inforPurchase.id}
                        purchase={inforPurchase}
                    />
                ))
            }
        </div>
    </div>
  )
}

export default PurchasesPage