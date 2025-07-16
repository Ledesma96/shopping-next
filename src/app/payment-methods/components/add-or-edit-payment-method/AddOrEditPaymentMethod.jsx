'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import './addOrEditPaymentMethod.scss';

export default function AddOrEditPaymentMethod({ method }) {
    const renderMaskedCardNumber = (number) => {
        const cleanNumber = number.replace(/\D/g, '');
        const totalDigits = 16;
        const digitsEntered = cleanNumber.length;
        const maskedPartLength = Math.max(0, totalDigits - digitsEntered);
        const enteredPart = cleanNumber.padEnd(digitsEntered, '').replace(/(.{4})/g, '$1 ').trim();
        const maskedPart = '*'.repeat(maskedPartLength).replace(/(.{4})/g, '$1 ').trim();
        const result = [enteredPart, maskedPart].filter(Boolean).join(' ').replace(/\s+/g, ' ').trim();
        return result || '**** **** **** ****';
    };
    const [form, setForm] = useState(
        method || {
        type: '',
        cardNumber: '',
        holder: '',
        expiry: '',
        }
    );

    const [detectedType, setDetectedType] = useState(method?.type || '');

    useEffect(() => {
        if (form.cardNumber.startsWith('4')) {
        setDetectedType('Visa');
        } else if (form.cardNumber.startsWith('5')) {
        setDetectedType('Mastercard');
        } else if (form.cardNumber.startsWith('3')) {
        setDetectedType('Amex');
        } else {
        setDetectedType('');
        }
    }, [form.cardNumber]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(method ? 'Modificando' : 'Agregando', form);
    };

    // Generar clase dinámica para la tarjeta
    const cardClass = detectedType ? `card${detectedType}` : 'cardDefault';

    return (
        <form onSubmit={handleSubmit} className="paymentForm">
            <div className={`cardPreview ${cardClass}`}>
                {detectedType ? (
                <Image
                    src={`/images/${detectedType.toLowerCase()}.png`}
                    alt={detectedType}
                    className="cardLogo"
                    width={60}
                    height={36}
                />
                ) : (
                <span className="noLogo">Sin marca</span>
                )}
                <div className="cardNumber">
                    {renderMaskedCardNumber(form.cardNumber)}
                </div>
                <div className="cardHolder">
                {form.holder || 'Nombre del titular'}
                </div>
                <div className="cardExpiry">
                {form.expiry || 'MM/AA'}
                </div>
            </div>

            <input
                name="cardNumber"
                placeholder="Número de tarjeta"
                value={form.cardNumber}
                onChange={handleChange}
                maxLength={16}
            />
            <input
                name="holder"
                placeholder="Titular"
                value={form.holder}
                onChange={handleChange}
            />
            <input
                name="expiry"
                placeholder="Vencimiento (MM/AA)"
                value={form.expiry}
                onChange={handleChange}
            />

            <button type="submit">
                {method ? 'Modificar' : 'Agregar'}
            </button>
        </form>
    );
    }
