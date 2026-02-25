'use client';

import { useState, useEffect } from 'react';
import './addOrEditAddress.scss';
import { useDispatch } from 'react-redux';
import { addAddress, deleteAddress, updateAddress } from '../../../store/userSlice';

export default function AddOrEditAddress({ address }) {
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(address)

    }, [address])
    
    // Inicializamos el estado. Si viene 'address', es modo edición.
    const [form, setForm] = useState({
        addressType: '',
        street: '',
        city: '',
        cp: '',
    });

    // Sincronizar el form si la prop 'address' cambia
    useEffect(() => {
        if (address) {
            setForm(address);
        }
    }, [address]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (address?._id) {
            const addressData = {
                _id: address._id,
                ...form
            }
            console.log(addressData);
            
            dispatch(updateAddress(addressData));
        } else {
            // MODO CREACIÓN
            dispatch(addAddress(form));
            // Limpiar form solo si es creación
            setForm({ addressType: '', street: '', city: '', cp: '' });
        }
    };

    const handleDelete = () => {
        if (window.confirm('¿Estás seguro de que deseas eliminar esta dirección?')) {
            dispatch(deleteAddress(address._id));
        }
    };

    return (
        <div className="addressContainer">
            <form onSubmit={handleSubmit} className='addressForm'>
                <input
                    name="addressType"
                    placeholder="Nombre (Casa, Oficina...)"
                    value={form.addressType || ''}
                    onChange={handleChange}
                    required
                />
                <input
                    name="street"
                    placeholder="Calle y número"
                    value={form.street || ''}
                    onChange={handleChange}
                    required
                />
                <input
                    name="city"
                    placeholder="Ciudad"
                    value={form.city || ''}
                    onChange={handleChange}
                    required
                />
                <input
                    name="cp"
                    placeholder="Código postal"
                    value={form.cp || ''}
                    onChange={handleChange}
                    required
                />

                <div className="actions">
                    <button type="submit" className="btn-save">
                        {address?._id ? 'Actualizar Dirección' : 'Guardar Dirección'}
                    </button>

                    {/* Solo mostrar botón eliminar si la dirección ya existe */}
                    {address?._id && (
                        <button 
                            type="button" 
                            className="btn-delete" 
                            onClick={handleDelete}
                        >
                            Eliminar
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
}