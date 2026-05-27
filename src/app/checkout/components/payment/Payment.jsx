'use client'
import React, { useState } from 'react'
import { FaHandHoldingUsd, FaWallet } from "react-icons/fa";
import './payment.scss'

const Payment = ({selectedMethod, setSelectedMethod}) => {
    const [cashAmount, setCashAmount] = useState('');

    return (
        <section className='section-payment'>
            <h3>Método de pago</h3>

            <div className='payment-methods'>
                <label className={`payment-option ${selectedMethod === 'mercadopago' ? 'active' : ''}`}>
                    <input
                        type='radio'
                        name='paymentMethod'
                        value='mercadopago'
                        checked={selectedMethod === 'mercadopago'}
                        onChange={() => setSelectedMethod('mercadopago')}
                    />
                    <div className='option-content'>
                        <FaWallet className='icon' />
                        <span>Mercado Pago / Tarjeta</span>
                    </div>
                </label>

                <label className={`payment-option ${selectedMethod === 'efectivo' ? 'active' : ''}`}>
                    <input
                        type='radio'
                        name='paymentMethod'
                        value='efectivo'
                        checked={selectedMethod === 'efectivo'}
                        onChange={() => setSelectedMethod('efectivo')}
                    />
                    <div className='option-content'>
                        <FaHandHoldingUsd className='icon' />
                        <span>Efectivo</span>
                    </div>
                </label>
            </div>

            <div className='payment-details'>
                {selectedMethod === 'mercadopago' && (
                    <div className='mp-container'>
                        <p>Serás redirigido a Mercado Pago para completar tu pago de forma segura.</p>
                    
                        <p className='helper-text'>Acepta tarjetas de crédito, débito y dinero en cuenta.</p>
                    </div>
                )}

                {selectedMethod === 'efectivo' && (
                    <div className='cash-container'>
                        <div className='info-box'>
                            <p>Pagás al recibir tu pedido en la puerta de tu casa.</p>
                        </div>
                        <div className='change-request'>
                            <p>¿Con cuánto vas a abonar? (Opcional)</p>
                            <div className='input-wrapper'>
                                <span>$</span>
                                <input 
                                    type='number' 
                                    placeholder='Ej: 20000'
                                    value={cashAmount}
                                    onChange={(e) => setCashAmount(e.target.value)}
                                />
                            </div>
                            <small>Para que el repartidor lleve el cambio justo.</small>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Payment;