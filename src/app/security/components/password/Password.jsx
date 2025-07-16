'use client'
import React, { useEffect, useRef, useState } from 'react';
import { CiCircleCheck } from "react-icons/ci";
import { MdOutlineCancel } from "react-icons/md";
import './password.scss';
const Password = () => {
    const refUno = useRef(null);
    const [conditions, setConditions] = useState(false)
    const [password, setPassword] = useState(null);
    const [newPassword, setNewPassword] = useState(null);
    const [repeatPassword, setRepeatPassword] = useState(null);
    const [characters, setCharacters] = useState(false);
    const [specialCharacter, setSpecialCharacter] = useState(false);
    const [numberCharacter, setNumberCharacter] = useState(false);
    const [inputFocus, setInputFocus] = useState(false);
    const [equalPasswords, setEqualPasswords] = useState(true);

    const handleSubmit  = (e) => {
        e.preventDefault();
        
        if(!conditions) alert('condiciones incompletas')
        
        if(!password || !newPassword || !repeatPassword){
            return
        }

        if(newPassword != repeatPassword){
            setEqualPasswords(false)
        } else setEqualPasswords(true)
    }

    useEffect(() => {
        const input = refUno.current;

        const handleFocus = () => setInputFocus(true);

        if (input) {
            input.addEventListener('focus', handleFocus);
        }

        return () => {
            if (input) {
                input.removeEventListener('focus', handleFocus);
            }
        };
    }, []);

    useEffect(() => {
        const value = newPassword || '';

        const isLongEnough = value.length >= 6;
        const hasNumber = /\d/.test(value);
        const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(value);

        setCharacters(isLongEnough);
        setNumberCharacter(hasNumber);
        setSpecialCharacter(hasSpecial);

        setConditions(isLongEnough && hasNumber && hasSpecial);
    }, [newPassword]);

    return (
        <div className='container-change-password'>
            <h4 className='container-change-password__h4'>Cambiar contraseña</h4>
            <form className='container-change-password__form-password'>
                <input placeholder='Contraseña actual' onChange={(e) => setPassword(e.target.value)}/>
                <input ref={refUno} placeholder='Nueva contraseña' onChange={(e) => setNewPassword(e.target.value)}/>
                {!equalPasswords &&
                    <p className='passwordsIncorrect'>Las contraseñas no coinciden</p>
                }
                {inputFocus &&
                    (<section>
                        <div style={{ color: characters ? 'green' : 'red' }}>
                            {characters ?
                                <CiCircleCheck />
                            :
                                <MdOutlineCancel />
                            }
                            <p>Al menos 6 caracteres</p>
                        </div>
                        <div style={{ color: numberCharacter ? 'green' : 'red' }}>
                            {numberCharacter ?
                                <CiCircleCheck />
                            :
                                <MdOutlineCancel />
                            }
                            <p>Al menos un numero</p>
                        </div>
                        <div style={{ color: specialCharacter ? 'green' : 'red' }}>
                            {specialCharacter ?
                                <CiCircleCheck />
                            :
                                <MdOutlineCancel />
                            }
                            <p>Al menos un caracter especial &#40;.,!...&#41;</p>
                        </div>
                    </section>)
                }
                <input placeholder='Repetir contraseña' onChange={(e) => setRepeatPassword(e.target.value)}/>
                {!equalPasswords &&
                    <p className=''>Las contraseñas no coinciden</p>
                }
                <button onClick={(e) => handleSubmit(e)}>Confirmar</button>
            </form>
        </div>
    )
}

export default Password