import Link from 'next/link'
import React from 'react'
import './options.scss'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../../../../../../store/authSlice'

const Options = () => {
    const user = useSelector(state => state.auth.user);
    
    const dispatch = useDispatch();

    const logOut = () => {
        dispatch(logoutUser());
    };
    return (
        <section className='container-options'>
            <Link href='/'>
                <p>Inicio</p>
            </Link>
            <Link href='/favorites'>
                <p>Favoritos</p>
            </Link>
            <Link href='/account'>
                <p>Mi cuenta</p>
            </Link>
            <Link href='/profile'>
                <p>Perfil</p>
            </Link>
            <Link href='/help'>
                <p>Ayuda</p>
            </Link>
            <Link href='/my-purchases'>
                <p>Mis compras</p>
            </Link>
            {user ?
                <div onClick={() => logOut()} style={{cursor: 'pointer'}}>
                    <p>Cerrar sesion</p>
                </div>
                    :
                <Link href='/login'>
                    <p>Iniciar sesion</p>
                </Link>
            }
        </section>
    )
}

export default Options