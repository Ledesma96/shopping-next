import React from 'react';
import { AddOrEditPaymentMethod, PaymentMethodsManager } from './components';
import './page.scss';
const paymentMethodsMock = [
    {
        id: '1',
        type: 'Visa',
        cardNumber: '**** **** **** 1234',
        holder: 'Homero Simpson',
        expiry: '12/25',
    },
    {
        id: '2',
        type: 'Mastercard',
        cardNumber: '**** **** **** 5678',
        holder: 'Marge Simpson',
        expiry: '11/24',
    },
];
const page = () => {
    return (
        <div className='paymentContainer'>
            <h2 className='paymentTitle'>Métodos de Pago</h2>
            <PaymentMethodsManager paymentMethods={paymentMethodsMock}/>
            <AddOrEditPaymentMethod />
        </div>
    )
}

export default page