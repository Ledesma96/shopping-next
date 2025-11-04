'use client'
import React, { useState } from 'react'
import './productInfo.scss'

const ProductInfo = ({product}) => {
    const [count, setCount] = useState(1);
    
    const sumCount = (number) => {
        setCount((prev) => {
            const newCount = prev + number;
            return newCount < 1 ? 1 : newCount;
        });
    };
    return (
        <div className='product-info-container'>
            <p className='product-info-container__price'>${product.price}</p>
            <div className='product-info-container__count'>
                <button onClick={() => sumCount(-1)}>-</button>
                <p>{count}</p>
                <button onClick={() => sumCount(1)}>+</button>
            </div>
            <div className='product-info-container__actions'>
                <button>Comprar ahora</button>
                <button>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ProductInfo