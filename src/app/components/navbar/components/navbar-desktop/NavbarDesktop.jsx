import React from 'react'
import './navbarDesktop.scss'
import { Logo, Options } from './conponents'
import { Cart, Search } from '../shared'

const NavbarDesktop = () => {
    return (
        <nav className='container-navbar'>
            <Logo />
            <Search />
            <Cart />
            <Options />
        </nav>
    )
}

export default NavbarDesktop