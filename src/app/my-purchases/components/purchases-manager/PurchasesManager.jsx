import React from 'react'
import PurchasesList from '../purcharses-list/PurchasesList'
import './purchasesManager.scss'

const PurchasesManager = ({purchasesMock}) => {
    return (
        <div className='container-purchases'>
            {purchasesMock.length <= 0 ?
                <h5>Aún no has realizado ninguna compra</h5>
                :
                purchasesMock.map(purchase => (
                    <PurchasesList key={purchase.id} purchase={purchase} />
                ))
            }
        </div>
    )
}

export default PurchasesManager