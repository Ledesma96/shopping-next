import Link from 'next/link';
import React from 'react';
import './purchasesList.scss';

const PurchasesList = ({ purchase }) => {
    // 1. Calculamos el total de productos sumando todas las subórdenes
    // Recorremos cada subOrder y sumamos las cantidades de sus productos
    const totalProducts = purchase.subOrders?.reduce((acc, subOrder) => {
        const subOrderCount = subOrder.products.reduce((sum, prod) => sum + prod.quantity, 0);
        return acc + subOrderCount;
    }, 0);

    // 2. Formateamos la fecha (createdAt)
    const formattedDate = new Date(purchase.createdAt).toLocaleDateString('es-AR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });

    return (
        <Link href={`/purchase-detail/${purchase._id}`} className='container-item-purchase'>
            <div className='container-item-purchase__left'>
                {/* Usamos el orderNumber que es más amigable que el _id */}
                <p className='container-item-purchase__left__id'>{purchase.orderNumber}</p>
                <p className='container-item-purchase__left__count'>
                    {totalProducts} {totalProducts === 1 ? 'producto' : 'productos'}
                </p>
            </div>
            <div className='container-item-purchase__right'>
                <p className='container-item-purchase__right__day'>{formattedDate}</p>
                <p className='container-item-purchase__right__price'>
                    ${purchase.totalAmount?.toLocaleString('es-AR')}
                </p>
            </div>
        </Link>
    );
};

export default PurchasesList;