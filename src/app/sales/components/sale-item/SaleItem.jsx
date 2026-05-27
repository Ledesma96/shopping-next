import React from 'react';
import { useRouter } from 'next/navigation';
import './saleItem.scss';

const SaleItem = ({ sale }) => {
    const router = useRouter();
    // Datos que vienen del populate de parentOrderId
    const customerInfo = sale.parentOrderId || {}; 

    return (
        <tr className="sale-item-row">
            <td className="sale-item-row__id">
                <span>#{sale.orderNumber?.slice(-5) || '0000'}</span>
            </td>
            <td className="sale-item-row__date">
                {new Date(sale.createdAt).toLocaleDateString('es-AR')}
            </td>
            <td className="sale-item-row__customer hide-mobile">
                <strong>{customerInfo.customerName || 'Usuario'}</strong>
                <span>{customerInfo.shippingMethod || 'Envío'}</span>
            </td>
            <td className="sale-item-row__total">
                ${sale.subTotal?.toLocaleString('es-AR')}
            </td>
            <td className="sale-item-row__status">
                <span className={`status-pill ${sale.status}`}>
                    {sale.status}
                </span>
            </td>
            <td className="sale-item-row__action">
                <button onClick={() => router.push(`/dashboard/sales/${sale._id}`)} className="btn-detail">
                    Detalle
                </button>
            </td>
        </tr>
    );
};

export default SaleItem