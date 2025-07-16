'use client'
import React, { useState } from 'react'
import './productInfo.scss'

const ProductInfo = ({product}) => {
    const [count, setCount] = useState(1)
    return (
        <div className='product-info-container'>
            <h2 className='product-info-container__title'>{product.title}</h2>
            <p className='product-info-container__price'>${product.price}</p>
            <div className='product-info-container__count'>
                <button>-</button>
                <p>{count}</p>
                <button>+</button>
            </div>
            <div className='product-info-container__actions'>
                <button>Comprar ahora</button>
                <button>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ProductInfo