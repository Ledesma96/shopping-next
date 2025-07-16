'use client';

import { useState } from 'react';
import './addOrEditAddress.scss';

export default function AddOrEditAddress({ address }) {
    const [form, setForm] = useState(
        address || {
        name: '',
        street: '',
        city: '',
        zip: '',
        }
    );

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (address) {
        console.log('Modificando dirección:', form);
        } else {
        console.log('Agregando nueva dirección:', form);
        }
    };

    return (
        <form onSubmit={handleSubmit} className='addressForm'>
            <input
                name="name"
                placeholder="Nombre (Casa, Oficina...)"
                value={form.name}
                onChange={handleChange}
            />
            <input
                name="street"
                placeholder="Calle y número"
                value={form.street}
                onChange={handleChange}
            />
            <input
                name="city"
                placeholder="Ciudad"
                value={form.city}
                onChange={handleChange}
            />
            <input
                name="zip"
                placeholder="Código postal"
                value={form.zip}
                onChange={handleChange}
            />

            <button type="submit">
                {address ? 'Modificar' : 'Agregar'}
            </button>
        </form>
    );
    }
