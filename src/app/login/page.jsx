'use client';

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { FiLock, FiUser } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../api/auth.api";
import { fetchUser } from "../store/authSlice";
import './login.scss';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const user = useSelector((state) => state.auth.user);

    const dispatch = useDispatch();
    const router = useRouter();


    useEffect(() => {
        if (user) window.location.href = '/';
    }, [user])

    const handleLogin = async (e) => {
        e.preventDefault();
        if (email === '' || password === '') return;

        try {
        setLoading(true);
        const data = {
            email: email.toLowerCase(),
            password
        };
        const response = await login(data);
        console.log(response);
        

        if (response.message === "Login successful") {
            await dispatch(fetchUser());
            router.push('/');
            
        }
        } catch (error) {
        console.error(error);
        } finally {
        setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="login__loading">
                <p>Cargando usuario...</p>
                {/* Si querés podés agregar un spinner animado */}
            </div>
        );
    }

    return (
        <div className="login">
        <div className="login__container">
            <h2 className="login__title">Iniciar Sesión</h2>

            <form onSubmit={handleLogin}>
            <div className="login__field">
                <FiUser className="login__icon" size={20} />
                <input
                type="email"
                placeholder="Correo electrónico"
                className="login__input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div className="login__field">
                <FiLock className="login__icon" size={20} />
                <input
                type={showPassword ? "text" : "password"}
                placeholder="Contraseña"
                className="login__input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <button
                type="button"
                className="login__toggle"
                onClick={() => setShowPassword(!showPassword)}
                >
                {showPassword ? <FaRegEyeSlash size={18} /> : <FaRegEye size={18} />}
                </button>
            </div>

            <button className="login__button" type="submit">
                Entrar
            </button>
            </form>

            <p className="login__register">
            <a href="#">¿Olvidaste tu contraseña?</a>
            </p>

            <p className="login__register">
            ¿No tienes cuenta? <Link href="/register">Regístrate</Link>
            </p>
        </div>
        </div>
    );
};

export default Login;
