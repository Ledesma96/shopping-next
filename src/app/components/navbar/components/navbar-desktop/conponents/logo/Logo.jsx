import React from 'react'
import './logo.scss'
import Image from 'next/image'
const Logo = () => {
    return (
        <div className='logo-container'>
            <Image
                src="/logo.png"
                fill
                alt="Mercado Libre Logo"
                className='logo'
            />
        </div>
    )
}

export default Logo