'use client'
import React, { useState } from 'react'
import { LuCircleFadingPlus } from "react-icons/lu";
import './payment.scss'

const userCards = [
    {
        id: 1,
        brand: 'Visa',
        last4: '1234',
        holder: 'Gabriel López',
        exp: '12/26',
        isDefault: true
    },
    {
        id: 2,
        brand: 'Mastercard',
        last4: '5678',
        holder: 'Gabriel López',
        exp: '03/25',
        isDefault: false
    }
];

const Payment = () => {
    const [selectedMethod, setSelectedMethod] = useState('card');
    const [cards, setCards] = useState(userCards);
    const [showForm, setShowForm] = useState(false);
    const [newCard, setNewCard] = useState({
        holder: '',
        number: '',
        exp: '',
        cvv: ''
    });

    const handleChange = (e) => {
        setNewCard({ ...newCard, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const id = cards.length + 1;
        const last4 = newCard.number.slice(-4);
        setCards([
        ...cards,
        { id, brand: 'Nueva tarjeta', last4, holder: newCard.holder, exp: newCard.exp }
        ]);
        setNewCard({ holder: '', number: '', exp: '', cvv: '' });
        setShowForm(false);
    };

    return (
        <section className='section-payment'>
            <h3>Método de pago</h3>

            <div className='payment-methods'>
                <label className='payment-option'>
                <input
                    type='radio'
                    name='paymentMethod'
                    value='card'
                    checked={selectedMethod === 'card'}
                    onChange={() => setSelectedMethod('card')}
                />
                <span>Tarjeta</span>
                </label>

                <label className='payment-option'>
                <input
                    type='radio'
                    name='paymentMethod'
                    value='cash'
                    checked={selectedMethod === 'cash'}
                    onChange={() => setSelectedMethod('cash')}
                />
                <span>Efectivo</span>
                </label>
            </div>

            {selectedMethod === 'card' && (
                <div className='cards-container'>
                {cards.map((card) => (
                    <label key={card.id} className='card-item'>
                    <input
                        type='radio'
                        name='selectedCard'
                        value={card.id}
                        defaultChecked={card.isDefault}
                    />
                    <div className='card-info'>
                        <p className='brand'>{card.brand}</p>
                        <p className='details'>**** **** **** {card.last4}</p>
                        <p className='holder'>{card.holder} — {card.exp}</p>
                    </div>
                    </label>
                ))}

                <div className='add-card' onClick={() => setShowForm(!showForm)}>
                    <LuCircleFadingPlus strokeWidth={1} />
                    <p>Agregar nueva tarjeta</p>
                </div>

                {showForm && (
                    <form className='form-add-card' onSubmit={handleSubmit}>
                        <input
                            type='text'
                            name='holder'
                            placeholder='Nombre del titular'
                            value={newCard.holder}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type='text'
                            name='number'
                            placeholder='Número de tarjeta'
                            value={newCard.number}
                            onChange={handleChange}
                            required
                        />
                        <div className='form-row'>
                            <input
                            type='text'
                            name='exp'
                            placeholder='MM/AA'
                            value={newCard.exp}
                            onChange={handleChange}
                            required
                            />
                            <input
                            type='text'
                            name='cvv'
                            placeholder='CVV'
                            value={newCard.cvv}
                            onChange={handleChange}
                            required
                            />
                        </div>
                        <button type='submit'>Guardar tarjeta</button>
                        <button type='submit' className='cancel'>Cancelar</button>
                    </form>
                )}
                </div>
            )}

            {selectedMethod === 'cash' && (
                <div className='cash-info'>
                <p>Podrás abonar en efectivo al momento de recibir tu pedido.</p>
                </div>
            )}
        </section>
    );
};

export default Payment;
