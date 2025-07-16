import Link from 'next/link';
import React from 'react';
import './purchasesList.scss';
const PurchasesList = ({purchase}) => {
    console.log(purchase);
    
    return (
        <Link href={`/purchase-detail/${purchase.id}`} className='container-item-purchase'>
            <div className='container-item-purchase__left'>
                <p className='container-item-purchase__left__id'>{purchase.id}</p>
                <p className='container-item-purchase__left__count'>Productos {purchase.productos.length}</p>
            </div>
            <div className='container-item-purchase__right'>
                <p className='container-item-purchase__right__day'>{purchase.fecha}</p>
                <p className='container-item-purchase__right__price'>${purchase.total}</p>
            </div>
        </Link>
    )
}

export default PurchasesList