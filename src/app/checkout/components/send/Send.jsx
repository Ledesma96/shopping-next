'use client'
import React, { useState } from 'react'
import { LuCircleFadingPlus } from "react-icons/lu";
import './send.scss'

const initialAddresses = [
    {
        id: 1,
        fullName: "Gabriel López",
        street: "Av. San Martín 2450",
        city: "Berazategui",
        province: "Buenos Aires",
        postalCode: "1884",
        country: "Argentina",
        phone: "+54 11 2345-6789",
        isDefault: true
    },
    {
        id: 2,
        fullName: "Gabriel López",
        street: "Calle 9 Nº 1423, Piso 2, Depto B",
        city: "La Plata",
        province: "Buenos Aires",
        postalCode: "1900",
        country: "Argentina",
        phone: "+54 11 9876-5432",
        isDefault: false
    }
];

const Send = () => {
    const [send, setSend] = useState(true);
    const [addresses, setAddresses] = useState(initialAddresses);
    const [showForm, setShowForm] = useState(false);
    const [newAddress, setNewAddress] = useState({
        fullName: '',
        street: '',
        city: '',
        province: '',
        postalCode: '',
        country: '',
        phone: ''
    });

    const handleChange = (e) => {
        setNewAddress({ ...newAddress, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const id = addresses.length + 1;
        setAddresses([...addresses, { ...newAddress, id, isDefault: false }]);
        setNewAddress({
        fullName: '',
        street: '',
        city: '',
        province: '',
        postalCode: '',
        country: '',
        phone: ''
        });
        setShowForm(false);
    };

    const handleCancel = () => {
        setShowForm(false)
    }

    return (
        <section className='section-send'>
            <div className='container-send'>
                <label className='container-input'>
                    <input
                        type='radio'
                        value='send'
                        name='delivery'
                        checked={send === true}
                        onChange={() => setSend(true)}
                    />
                    <p>Envío a domicilio</p>
                </label>
                <label className='container-input'>
                    <input
                        type='radio'
                        value='withdraw'
                        name='delivery'
                        checked={send === false}
                        onChange={() => setSend(false)}
                    />
                    <p>Retiro en el local</p>
                </label>
            </div>

            {send && (
                <div className='addresses'>
                {addresses.map((address) => (
                    <label key={address.id} className='address-card'>
                        <input
                            type='radio'
                            name='shippingAddress'
                            value={address.id}
                            defaultChecked={address.isDefault}
                        />
                        <div className='container-info'>
                            <p>{address.fullName}</p>
                            <p>{address.street} - {address.city}</p>
                        </div>
                    </label>
                ))}

                <div
                    className='container-add-address'
                    onClick={() => setShowForm(!showForm)}
                >
                    <LuCircleFadingPlus strokeWidth={1} />
                    <p>Agregar dirección</p>
                </div>

                {showForm && (
                    <form className='form-add-address' onSubmit={handleSubmit}>
                        <input
                            type='text'
                            name='fullName'
                            placeholder='Nombre completo'
                            value={newAddress.fullName}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type='text'
                            name='street'
                            placeholder='Calle y número'
                            value={newAddress.street}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type='text'
                            name='city'
                            placeholder='Ciudad'
                            value={newAddress.city}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type='text'
                            name='province'
                            placeholder='Provincia'
                            value={newAddress.province}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type='text'
                            name='postalCode'
                            placeholder='Código postal'
                            value={newAddress.postalCode}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type='text'
                            name='country'
                            placeholder='País'
                            value={newAddress.country}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type='text'
                            name='phone'
                            placeholder='Teléfono'
                            value={newAddress.phone}
                            onChange={handleChange}
                            required
                        />
                        <button type='submit' className='confirm'>Guardar dirección</button>
                        <button className='cancel' onClick={handleCancel}>Cancelar</button>
                    </form>
                )}
                </div>
            )}
        </section>
    )
};

export default Send;
