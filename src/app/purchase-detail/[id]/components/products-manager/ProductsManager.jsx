'use client'
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import './productManager.scss';
import { getOrderByIdApi } from '../../../../api/order.api';
import ProductItem from '../product-item/ProductItem';

const ProductsManager = () => {
    const params = useParams();
    const [purchase, setPurchase] = useState(null);
    const [loading, setLoading] = useState(true);
    const id = params.id;

    useEffect(() => {
        const fetchOrder = async () => {
            if (!id) return;
            try {
                setLoading(true);
                const response = await getOrderByIdApi(id);
                setPurchase(response);
            } catch (error) {
                console.error("Error:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchOrder();
    }, [id]);

    if (loading) return <div className="loader">Cargando tu compra...</div>;
    if (!purchase) return <div className="error-msg">No encontramos esta orden.</div>;

    const date = new Date(purchase.createdAt).toLocaleDateString('es-AR', {
        day: 'numeric', month: 'long', year: 'numeric'
    });

    return (
        <div className='purchase-detail-page'>
            <header className='purchase-header'>
                <div className="purchase-header__main">
                    <h1>Detalle de Compra</h1>
                    <span className="order-number">#{purchase.orderNumber}</span>
                </div>
                <div className="purchase-header__info">
                    <p>Realizada el <strong>{date}</strong></p>
                    <p>Método: <strong>{purchase.shippingMethod}</strong></p>
                </div>
            </header>

            <main className='purchase-content'>
                <section className='packages-list'>
                    {purchase.subOrders?.map((subOrder, index) => (
                        <div key={subOrder._id} className="package-card">
                            <div className="package-card__header">
                                <h3>Paquete {index + 1} de {purchase.subOrders.length}</h3>
                                <span className={`status-tag ${subOrder.status}`}>
                                    {subOrder.status}
                                </span>
                            </div>
                            
                            <div className='package-card__products'>
                                {subOrder.products?.map((item) => (
                                    <ProductItem key={item._id} product={item} />
                                ))}
                            </div>
                            
                            <div className="package-card__footer">
                                <span>Subtotal del paquete</span>
                                <strong>${subOrder.subTotal.toLocaleString('es-AR')}</strong>
                            </div>
                        </div>
                    ))}
                </section>

                <aside className='purchase-summary'>
                    <h3>Resumen de pago</h3>
                    <div className="summary-row">
                        <span>Productos</span>
                        <span>${(purchase.totalAmount - purchase.shippingCost).toLocaleString('es-AR')}</span>
                    </div>
                    <div className="summary-row">
                        <span>Costo de envío</span>
                        <span>{purchase.shippingCost === 0 ? "Gratis" : `$${purchase.shippingCost.toLocaleString('es-AR')}`}</span>
                    </div>
                    <div className="summary-row total">
                        <span>Total pagado</span>
                        <span>${purchase.totalAmount?.toLocaleString('es-AR')}</span>
                    </div>
                    <footer className="summary-method">
                        Pagaste con {purchase.paymentMethod === 'mercadopago' ? 'Mercado Pago' : 'Efectivo'}
                    </footer>
                </aside>
            </main>
        </div>
    );
}

export default ProductsManager;