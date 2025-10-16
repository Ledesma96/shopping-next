'use client'
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { CiCircleCheck } from "react-icons/ci";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { FiLock, FiMail, FiUser } from "react-icons/fi";
import { MdOutlineCancel } from "react-icons/md";
import { register } from "../api/auth.api";
import "./Register.scss";

const page = () => {
    const ref = useRef();
    const [conditions, setConditions] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [specialCharacter, setSpecialCharacter] = useState('false');
    const [characters, setCharacters] = useState(false);
    const [numberCharacter, setNumberCharacter] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [inputFocus, setInputFocus] = useState(false);

    const handleRegister = async(e) => {
        e.preventDefault();
        
        if(!conditions) {
            alert('condiciones incompletas');
            return
        }

        console.log(email, password, repeatPassword);
        
        if(email === '' || password === '' || repeatPassword === ''){
            alert('Completa todos los campos');
            return;
        }

        if(password != repeatPassword){
            alert('Las contraseñas no coinciden');
            return;
        }

        const data = {
            name,
            email: email.toLowerCase(),
            password,
            role: 'user'
        };
        
        const response = await register(data);
        console.log(response);
        
        if(!response.success){
            alert(response.message);
            return
        }
        window.location.href = '/login';
    }

    useEffect(() => {
        const input = ref.current;

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
        const value = password || '';

        const isLongEnough = value.length >= 6;
        const hasNumber = /\d/.test(value);
        const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(value);

        setCharacters(isLongEnough);
        setNumberCharacter(hasNumber);
        setSpecialCharacter(hasSpecial);

        setConditions(isLongEnough && hasNumber && hasSpecial);
    }, [password]);

    return (
        <div className="register-page">
            <div className="register-container">

                <h2 className="register-title">Crear Cuenta</h2>

                <div className="input-group">
                    <FiUser className="input-icon" size={20} />
                    <input
                        value={name}
                        onChange={e => setName(e.target.value)}
                        type="text"
                        placeholder="Nombre completo" />
                </div>

                <div className="input-group">
                    <FiMail className="input-icon" size={20} />
                    <input
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        type="email"
                        placeholder="Correo electrónico" />
                </div>

                <div className="input-group">
                    <FiLock className="input-icon" size={20} />
                    <input
                        ref={ref}
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type={showPassword ? "text" : "password"}
                        placeholder="Contraseña"
                    />
                    <button
                        type="button"
                        className="toggle-password"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? <FaRegEyeSlash size={18} /> : <FaRegEye size={18} />}
                    </button>
                </div>
                {inputFocus &&
                    (<section className="conditions">
                        <div style={{ color: characters ? 'green' : 'red' }}>
                            {characters ?
                                <CiCircleCheck />
                            :
                                <MdOutlineCancel />
                            }
                            <p>Al menos 6 caracteres.</p>
                        </div>
                        <div style={{ color: numberCharacter ? 'green' : 'red' }}>
                            {numberCharacter ?
                                <CiCircleCheck />
                            :
                                <MdOutlineCancel />
                            }
                            <p>Al menos un numero.</p>
                        </div>
                        <div style={{ color: specialCharacter ? 'green' : 'red' }}>
                            {specialCharacter ?
                                <CiCircleCheck />
                            :
                                <MdOutlineCancel />
                            }
                            <p>Al menos un caracter especial.</p>
                        </div>
                    </section>)
                }
                <div className="input-group">
                    <FiLock className="input-icon" size={20} />
                    <input
                        value={repeatPassword}
                        onChange={e => setRepeatPassword(e.target.value)}
                        type={showPassword ? "text" : "password"}
                        placeholder="Repetir contraseña"
                    />
                    <button
                        type="button"
                        className="toggle-password"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? <FaRegEyeSlash size={18} /> : <FaRegEye size={18} />}
                    </button>
                </div>

                <button className="register-button" onClick={e => handleRegister(e)}>Registrarme</button>

                <p className="login-text">
                ¿Ya tienes cuenta? <Link href="/login">Inicia sesión</Link>
                </p>
            </div>
        </div>
    );
};

export default page;
