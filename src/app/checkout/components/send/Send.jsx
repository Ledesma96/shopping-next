'use client'
import React, { useEffect, useState } from 'react'
import { LuCircleFadingPlus, LuStore, LuClock } from "react-icons/lu";
import { FaMapMarkerAlt } from "react-icons/fa";
import './send.scss'
import { useDispatch, useSelector } from 'react-redux';
import { addAddress } from '../../../store/userSlice';

const Send = ({selectedAddress, setSelectedAddress, send, setSend}) => {
    const { address } = useSelector(state => state.user.user);
    const dispatch = useDispatch();
    const [addresses, setAddresses] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [newAddress, setNewAddress] = useState({
        addressType: '', street: '', city: '', province: '', cp: ''
    });

    useEffect(() => {
        setAddresses(address)
    }, [address])

    useEffect(() => {
        const defaultAddr = address[0]
        if (defaultAddr) {
            setSelectedAddress(defaultAddr);
        }
    }, [address]);

    const handleSelectAddress = (addre) => {
        setSelectedAddress(addre)
    }

    const handleChange = (e) => {
        setNewAddress({ ...newAddress, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addAddress(newAddress));
        setNewAddress({ addressType:'', street: '', city: '', province: '', cp: '' });
        setShowForm(false);
    };

    return (
        <section className='section-send'>
            <div className='container-send'>
                <label className={`container-input ${send ? 'active' : ''}`}>
                    <input
                        type='radio'
                        name='delivery'
                        checked={send === true}
                        onChange={() => setSend(true)}
                    />
                    <p>Envío a domicilio</p>
                </label>
                <label className={`container-input ${!send ? 'active' : ''}`}>
                    <input
                        type='radio'
                        name='delivery'
                        checked={send === false}
                        onChange={() => setSend(false)}
                    />
                    <p>Retiro en el local</p>
                </label>
            </div>

            {send ? (
                <div className='addresses'>
                    {addresses.map((address) => (
                        <label key={address._id} className={`address-card ${selectedAddress._id === address._id ? 'selected' : ''}`}>
                            <input
                                type='radio'
                                name='shippingAddress'
                                checked={selectedAddress._id === address._id}
                                onChange={() => handleSelectAddress(address)}
                            />
                            <div className='container-info'>
                                <p className='type'>{address.addressType}</p>
                                <p>{address.street} - {address.city}</p>
                                <p className='cp'>CP: {address.cp}</p>
                            </div>
                        </label>
                    ))}

                    <div className='container-add-address' onClick={() => setShowForm(!showForm)}>
                        <LuCircleFadingPlus strokeWidth={1} />
                        <p>Agregar dirección</p>
                    </div>

                    {showForm && (
                        <form className='form-add-address' onSubmit={handleSubmit}>
                            <input type='text' name='addressType' placeholder='Ej: Casa / Trabajo' value={newAddress.addressType} onChange={handleChange} required />
                            <input type='text' name='street' placeholder='Calle y número' value={newAddress.street} onChange={handleChange} required />
                            <div className='form-row-grid'>
                                <input type='text' name='city' placeholder='Ciudad' value={newAddress.city} onChange={handleChange} required />
                                <input type='text' name='cp' placeholder='CP' value={newAddress.cp} onChange={handleChange} required />
                            </div>
                            <button type='submit' className='confirm'>Guardar dirección</button>
                            <button type='button' className='cancel' onClick={() => setShowForm(false)}>Cancelar</button>
                        </form>
                    )}
                </div>
            ) : (
                <div className='withdraw-container'>
                    <div className='store-card'>
                        <div className='store-icon'>
                            <LuStore />
                        </div>
                        <div className='store-info'>
                            <h4>Distribuidora Berazategui</h4>
                            <p><FaMapMarkerAlt /> Calle Falsa 123, Berazategui</p>
                            <p><LuClock /> Lunes a Sábados: 09:00 a 20:00hs</p>
                        </div>
                    </div>
                    <div className='withdraw-notice'>
                        <p>Tu pedido estará listo para retirar en <strong>45 minutos</strong> después de confirmar la compra.</p>
                    </div>
                </div>
            )}
        </section>
    )
};

export default Send;