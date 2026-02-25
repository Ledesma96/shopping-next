'use client';

import React, { useEffect, useState } from 'react';
import { EditableField } from './components';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '../store/userSlice';
import { updateUserApi } from '../api/users.api';
import { useRouter } from 'next/navigation';

const FIELD_MAP = {
    nombre: 'name',
    email: 'email',
    telefono: 'phone',
    direccion: 'address',
};

const Page = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const { user, loading } = useSelector(state => state.auth);

    const [profile, setProfile] = useState({});

    // 🔁 Redirect si no hay usuario
    useEffect(() => {
        if (!loading && !user) {
            router.replace('/login');
        }
    }, [user, loading, router]);

    // 🔁 Sync UI con Redux
    useEffect(() => {
        if (user) {
            console.log(user);
            
            setProfile({
                nombre: user.name ?? '',
                email: user.email ?? '',
                telefono: user.phone ?? '',
                direccion: user.address ?? '',
            });
        }
    }, [user]);

    if (loading) return <p>Cargando...</p>;
    if (!user) return null;

    const handleFieldSave = async (uiKey, newValue) => {
        const apiKey = FIELD_MAP[uiKey];
        console.log(apiKey);
        
        if (!apiKey) return;

        // 🔹 Update optimista (UI inmediata)
        setProfile(prev => ({
            ...prev,
            [uiKey]: newValue,
        }));

        try {
            const result = await updateUserApi({ [apiKey]: newValue });
            if (!result?.data.success) throw new Error();

            dispatch(updateUser({ [apiKey]: newValue }));
        } catch (err) {
            console.error('Error al actualizar usuario', err);

            // 🔙 rollback si falla backend
            setProfile(prev => ({
                ...prev,
                [uiKey]: user[apiKey] ?? '',
            }));
        }
    };

    return (
        <main>
            {Object.entries(profile).map(([key, value]) => (
                <EditableField
                    key={key}
                    label={key.charAt(0).toUpperCase() + key.slice(1)}
                    value={String(value)}
                    onSave={(newValue) => handleFieldSave(key, newValue)}
                />
            ))}
        </main>
    );
};

export default Page;
