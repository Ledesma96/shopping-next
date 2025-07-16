// app/not-found.jsx

'use client'
import Link from 'next/link';
import './not-found.scss';

export default function NotFound() {
    return (
        <div className='not-found'>
            <img src='/images/gif404.gif'/>
            <div className='not-found__container-text'>
                <h1>404 - Página no encontrada</h1>
                <p>La página que buscas no existe.</p>
            </div>
            <Link href="/"className='not-found__btn'>Volver al inicio</Link>
        </div>
    );
}
