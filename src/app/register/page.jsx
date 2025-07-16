'use client'
import Link from "next/link";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { FiLock, FiMail, FiUser } from "react-icons/fi";
import "./Register.scss";

const page = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="register-page">
            <div className="register-container">

                <h2 className="register-title">Crear Cuenta</h2>

                <div className="input-group">
                <FiUser className="input-icon" size={20} />
                <input type="text" placeholder="Nombre completo" />
                </div>

                <div className="input-group">
                <FiMail className="input-icon" size={20} />
                <input type="email" placeholder="Correo electrónico" />
                </div>

                <div className="input-group">
                <FiLock className="input-icon" size={20} />
                <input
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

                <button className="register-button">Registrarme</button>

                <p className="login-text">
                ¿Ya tienes cuenta? <Link href="/login">Inicia sesión</Link>
                </p>
            </div>
        </div>
    );
};

export default page;
