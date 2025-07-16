import React from 'react'
import './authentication.scss'
import { Email, Phone } from './components'

const Authentication = () => {
    return (
        <section className='container-authentication'>
            <Email />
            <Phone />
        </section>
    )
}

export default Authentication