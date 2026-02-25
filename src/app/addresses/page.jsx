'use client'
import React, { useEffect } from 'react';
import { AddressesList } from './components';
import './page.scss';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';

const page = () => {
    const router = useRouter();
    const {user, loading} = useSelector(state => state.user);
    console.log(user)

    useEffect(() => {
            if (!loading && !user) {
                router.replace('/login');
            }
        }, [user, loading, router]);

    if(!user) return(
        <p>no se encontro usuario</p>
    )
    return (
        <main className='page'>
            <h1>Mis Direcciones</h1>
            <AddressesList addresses={user.address} />
        </main>
    )
}

export default page