'use client'
import React, { useState } from 'react';
import { EditableField } from './components';

const Page = () => {
    const [profile, setProfile] = useState({
        nombre: "Gabriel Torres",
        email: "gabriel@example.com",
        telefono: "+54 11 5555-5555",
        direccion: "Av. Siempre Viva 123",
        ciudad: "Buenos Aires",
        pais: "Argentina"
    });

    const handleFieldSave = (key, newValue) => {
        setProfile(prev => ({ ...prev, [key]: newValue }));
    };

    return (
        <main>
            {Object.entries(profile).map(([key, value]) => (
                <EditableField
                    key={key}
                    label={key.charAt(0).toUpperCase() + key.slice(1)}
                    value={value}
                    onSave={(newValue) => handleFieldSave(key, newValue)}
                />
            ))}
        </main>
    );
};

export default Page;
