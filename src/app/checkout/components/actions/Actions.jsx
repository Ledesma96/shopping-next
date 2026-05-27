'use client'
import React, { useEffect } from 'react'
import './actions.scss'
import { createOrderApi } from '../../../api/order.api';
import { useSelector } from 'react-redux';

const Actions = ({ onBack, selectedMethod, shippingCost = 1000, selectedAddress, send }) => {
    const {totalPrice} = useSelector(state => state.cart);
    const buttonText = selectedMethod === 'mercadopago' 
        ? 'Pagar con Mercado Pago' 
        : 'Finalizar Compra';

    const handleOrder = async () => {
        // Preparamos el objeto con los datos que le faltan al back
        const orderData = {
            paymentMethod: selectedMethod, // 'mercadopago' o 'cash'
            shippingCost: shippingCost,
            totalAmount: totalPrice,
            shippingMethod: send ? 'Envio a domicilio' : 'Retiro en el local',
            shippingAddress: send ? selectedAddress : null // El objeto de dirección que seleccionó en 'Send.jsx'
        };
        
        try {
            const response = await createOrderApi(orderData);
            // Aquí podrías redirigir a /success o al link de Mercado Pago
        } catch (error) {
            console.error("Error al crear la orden", error);
        }
    }
    return (
        <section className='section-actions'>
            <div className='order-summary'>
                {/* ... tu resumen de pedido ... */}
                <div className='summary-total'>
                    <span>Total</span>
                    <span>${totalPrice.toFixed(2)}</span>
                </div>
            </div>

            <div className='actions-buttons'>
                <button className='btn-back' onClick={onBack}>
                    Volver
                </button>
                <button 
                    className={`btn-confirm ${selectedMethod === 'mercadopago' ? 'mp-style' : ''}`} 
                    onClick={handleOrder}
                >
                    {buttonText}
                </button>
            </div>
            
            {/* ... cupón ... */}
        </section>
    )
}

export default Actions
