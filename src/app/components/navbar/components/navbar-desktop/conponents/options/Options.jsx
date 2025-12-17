import Link from 'next/link'
import React from 'react'
import './options.scss'

const Options = () => {
    return (
        <section className='container-options'>
            <Link href=''>
                <p>Inicio</p>
            </Link>
            <Link href=''>
                <p>Favoritos</p>
            </Link>
            <Link href=''>
                <p>Mi cuenta</p>
            </Link>
            <Link href=''>
                <p>Perfil</p>
            </Link>
            <Link href=''>
                <p>Ayuda</p>
            </Link>
            <Link href=''>
                <p>Mis compras</p>
            </Link>
            <Link href=''>
                <p>Iniciar sesion</p>
            </Link>
        </section>
    )
}

export default Options