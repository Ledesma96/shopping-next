'use client'
import React, { useState } from 'react';
import './email.scss';

const Email = () => {
    const [email, setEmail] = useState('');
    const [codeSent, setCodeSent] = useState(false);
    const [verificationCode, setVerificationCode] = useState('');
    const [inputCode, setInputCode] = useState('');
    const [emailVerified, setEmailVerified] = useState(false);

    const handleSendCode = () => {
        if (!email.includes('@')) return alert('Ingresa un email válido.');
        const code = Math.floor(100000 + Math.random() * 900000).toString();
        console.log(`Código de verificación enviado al email: ${code}`);
        setVerificationCode(code);
        setCodeSent(true);
    };

    const handleVerifyCode = () => {
        if (inputCode === verificationCode) {
            setEmailVerified(true);
        } else {
            alert('Código incorrecto.');
        }
    };

    return (
        <div className='authentication-email'>
            <h4>Verificación de Email</h4>

            {emailVerified ? (
                <p className='verified'>Email verificado ✅</p>
            ) : (
                <>
                    <input
                        type="email"
                        placeholder="Ingresa tu email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={codeSent}
                    />
                    {!codeSent && (
                        <button onClick={handleSendCode}>
                            Solicitar código
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

export default Email;
