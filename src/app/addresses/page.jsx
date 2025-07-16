import React from 'react';
import { AddressesList } from './components';
import './page.scss';
const addressesMock = [
    {
        id: '1',
        name: 'Casa',
        street: 'Av. Siempre Viva 742',
        city: 'Springfield',
        zip: '12345',
    },
    {
        id: '2',
        name: 'Oficina',
        street: 'Calle Falsa 123',
        city: 'Shelbyville',
        zip: '67890',
    },
];
const page = () => {
    return (
        <main className='page'>
            <h1>Mis Direcciones</h1>
            <AddressesList addresses={addressesMock} />
        </main>
    )
}

export default page