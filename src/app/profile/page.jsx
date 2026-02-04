'use client'
import React, { useEffect, useState } from 'react';
import { Stars } from '../components';
import { Avatar, Information } from './components';
import './profile.scss';
import { useSelector } from 'react-redux';
const usuarioEjemplo = {
    location: 'Buenos Aires, Argentina',
    memberSince: '2022',
    sales: 152,
    verified: true
};

const page = () => {
    const user = useSelector(state => state.auth.user);
    console.log(user);
    

    return (
        <main className='container-profile'>
            <Avatar user={user}/>
            <Stars stars={4.5}/>
            <Information data={usuarioEjemplo}/>
        </main>
    )
}

export default page