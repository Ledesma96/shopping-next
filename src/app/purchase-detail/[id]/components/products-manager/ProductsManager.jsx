'use client'
import { useParams } from 'next/navigation';
import React from 'react';
import ProductItem from '../product-item/ProductItem';
import './productManager.scss';
const purchasesMock = [
    {
        id: "1",
        fecha: "2024-09-12",
        total: 45999,
        productos: [
            {
                id: "p1",
                title: "Remera deportiva Nike",
                price: 15999,
                quantity: 1,
                image: "/images/products/remera-nike.jpg",
            },
            {
                id: "p2",
                title: "Zapatillas running Adidas",
                price: 29999,
                quantity: 1,
                image: "/images/products/zapatillas-adidas.jpg",
            }
        ],
    },
    {
        id: "2",
        fecha: "2024-09-18",
        total: 78999,
        productos: [
            {
                id: "p3",
                title: "Campera impermeable Puma",
                price: 48999,
                quantity: 1,
                image: "/images/products/campera-puma.jpg",
            },
            {
                id: "p4",
                title: "Pantalón training Under Armour",
                price: 30000,
                quantity: 1,
                image: "/images/products/pantalon-under.jpg",
            }
        ],
    },
];

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