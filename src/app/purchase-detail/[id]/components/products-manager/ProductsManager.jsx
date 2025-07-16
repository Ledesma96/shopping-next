'use client'
import { useParams } from 'next/navigation';
import React from 'react';
import ProductItem from '../product-item/ProductItem';
import './productManager.scss';
const purchasesMock = [
    {
        "id": "compra-001",
        "fecha": "2025-07-06",
        "total": 157.50,
        "productos": [
            {
                "id": "prod-01",
                "nombre": "Zapatillas Deportivas",
                "precio": 80.00,
                "cantidad": 1,
                "imagen": "https://www.digitalsport.com.ar/files/products/671a26f6509c2-661326-500x500.jpg"
            },
            {
                "id": "prod-02",
                "nombre": "Remera Dry Fit",
                "precio": 25.00,
                "cantidad": 2,
                "imagen": "https://www.digitalsport.com.ar/files/products/68413f908840f-698644-500x500.jpg"
            },
            {
                "id": "prod-03",
                "nombre": "Short Deportivo",
                "precio": 27.50,
                "cantidad": 1,
                "imagen": "https://www.digitalsport.com.ar/files/products/66fff3eed9559-638710-500x500.jpg"
            }
        ]
        },
        {
        "id": "compra-002",
        "fecha": "2025-07-05",
        "total": 60.00,
        "productos": [
            {
                "id": "prod-04",
                "nombre": "Guantes de Boxeo",
                "precio": 60.00,
                "cantidad": 1,
                "imagen": "https://celadasa.vtexassets.com/arquivos/ids/531398-800-auto?v=638817835173230000&width=800&height=auto&aspect=true"
            }
        ]
    }
]
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