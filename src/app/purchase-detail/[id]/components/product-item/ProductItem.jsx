import React from 'react'
import './productItem.scss'

const ProductItem = ({product}) => {
    return (
        <div className='container-item'>
            <img src={product.imagen} width={60} height={60} alt={product.nombre}/>
            <p>{product.nombre}</p>
            <p>{product.cantidad}</p>
            <p>${product.precio}</p>
        </div>
    )
}

export default ProductItem