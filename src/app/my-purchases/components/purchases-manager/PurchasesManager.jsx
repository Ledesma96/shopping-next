'use client'
import React, { useEffect, useState } from 'react'
import PurchasesList from '../purcharses-list/PurchasesList'
import './purchasesManager.scss'
import { getOrdersUserApi } from '../../../api/order.api'

const PurchasesManager = () => {
    const [purchases, setPurchases] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('')

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                setLoading(true);
                const response = await getOrdersUserApi();
                console.log(response);
                
                // Verificamos que sea un array antes de setear
                if (Array.isArray(response)) {
                    setPurchases(response);
                    console.log(purchases);
                    
                } else {
                    setPurchases([]);
                }
            } catch (err) {
                console.error("Error al traer órdenes:", err);
                setError("No pudimos cargar tus compras. Reintentá más tarde.");
            } finally {
                setLoading(false);
            }
        };
        fetchOrders();
    }, []);
    if(loading){
        return(
            <p>Loading</p>
        )
    }
    return (
        <div className='container-purchases'>
            {purchases?.length <= 0 ?
                <h5>Aún no has realizado ninguna compra</h5>
                :
                purchases?.map(purchase => (
                    <PurchasesList key={purchase._id} purchase={purchase} />
                ))
            }
        </div>
    )
}

export default PurchasesManager