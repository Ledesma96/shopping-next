'use client'
import React, { useState } from 'react';
import './phone.scss';

const Phone = () => {
    const [phone, setPhone] = useState('');
    const [codeSent, setCodeSent] = useState(false);
    const [verificationCode, setVerificationCode] = useState('');
    const [inputCode, setInputCode] = useState('');
    const [phoneVerified, setPhoneVerified] = useState(false);

    const handleSendCode = () => {
        if (phone.length < 6) return alert('Ingresa un número válido.');
        const code = Math.floor(100000 + Math.random() * 900000).toString();
        console.log(`Código SMS enviado: ${code}`);
        setVerificationCode(code);
        setCodeSent(true);
    };

    const handleVerifyCode = () => {
        if (inputCode === verificationCode) {
            setPhoneVerified(true);
        } else {
            alert('Código incorrecto.');
        }
    };

    return (
        <div className='authentication-phone'>
            <h4>Verificación de Teléfono</h4>

            {phoneVerified ? (
                <p className='verified'>Teléfono verificado ✅</p>
            ) : (
                <>
                    <input
                        type="tel"
                        placeholder="Ingresa tu número"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        disabled={codeSent}
                    />
                    {!codeSent && (
                        <button onClick={handleSendCode}>
                            Solicitar código SMS
                        </button>
                    )}
                    {codeSent && (
                        <>
                            <input
                                type="text"
                                placeholder="Ingresa el código recibido"
                                value={inputCode}
                                onChange={(e) => setInputCode(e.target.value)}
                            />
                            <button onClick={handleVerifyCode}>
                                Verificar código
                            </button>
                        </>
                    )}
                </>
            )}
        </div>
    );
};

export default Phone;
