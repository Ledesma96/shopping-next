'use client'
import { useParams } from 'next/navigation';
import React from 'react';
import ProductItem from '../product-item/ProductItem';
import './productManager.scss';
const ProductsManager = () => {
    const params = useParams();
    const id = params.id;
    const purchase = purchasesMock.find(p => p.id === id)
    return (
        <div className='container-detail'>
            <div className='container-detail__header'>
                <p>{purchase.id}</p>
                <p>{purchase.fecha}</p>
            </div>
            <div className='container-detail__products'>
                {purchase.productos.map(product => (
                    <ProductItem key={product.id} product={product}/>
                ))}
            </div>
            <div className='container-detail__price'>
                <p>total:</p>
                <p>${purchase.total}</p>
            </div>
        </div>
    )
}

export default ProductsManager