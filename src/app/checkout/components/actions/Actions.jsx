'use client'
import React from 'react'
import './actions.scss'

const Actions = ({ total = 25999, onBack, onConfirm }) => {
    return (
        <section className='section-actions'>
            <div className='order-summary'>
                <h4>Resumen del pedido</h4>
                <div className='summary-row'>
                <span>Subtotal</span>
                <span>$24.999</span>
                </div>
                <div className='summary-row'>
                <span>Envío</span>
                <span>$1.000</span>
                </div>
                <div className='summary-total'>
                <span>Total</span>
                <span>${total.toLocaleString()}</span>
                </div>
            </div>

            <div className='actions-buttons'>
                <button className='btn-back' onClick={onBack}>
                Volver
                </button>
                <button className='btn-confirm' onClick={onConfirm}>
                Finalizar compra
                </button>
            </div>

            <div className='coupon'>
                <input type='text' placeholder='Código de descuento' />
                <button className='btn-apply'>Aplicar</button>
            </div>
        </section>
    )
}

export default Actions
