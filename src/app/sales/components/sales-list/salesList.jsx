'use client'
import React, { useEffect, useState } from 'react';
import { getSubordersApi } from '../../../api/order.api';
import './salesList.scss';
import SaleItem from '../sale-item/SaleItem';

const SalesList = () => {
    const [sales, setSales] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSales = async () => {
            try {
                const response = await getSubordersApi();
                console.log(response);
                
                setSales(response || []);
            } catch (error) {
                console.error("Error al cargar ventas:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchSales();
    }, []);

    if (loading) return <div className="loader-sales">Cargando tus ventas...</div>;

    return (
        <div className="sales-list-container">
            <div className="sales-table-wrapper">
                <table className="sales-table">
                    <thead>
                        <tr>
                            <th>Orden</th>
                            <th>Fecha</th>
                            <th className="hide-mobile">Cliente</th>
                            <th>Total</th>
                            <th>Estado</th>
                            <th>Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sales.length > 0 ? (
                            sales.map((sale) => (
                                <SaleItem key={sale._id} sale={sale} />
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" className="empty-row">Aún no has recibido ventas.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SalesList;