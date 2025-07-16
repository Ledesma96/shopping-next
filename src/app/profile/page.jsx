import React from 'react';
import { Stars } from '../components';
import { Avatar, Information } from './components';
import './profile.scss';
const usuarioEjemplo = {
    location: 'Buenos Aires, Argentina',
    memberSince: '2022',
    sales: 152,
    verified: true
};

const page = () => {
    return (
        <main className='container-profile'>
            <Avatar />
            <Stars stars={4.5}/>
            <Information data={usuarioEjemplo}/>
        </main>
    )
}

export default page