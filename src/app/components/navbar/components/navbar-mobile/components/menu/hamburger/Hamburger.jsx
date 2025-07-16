'use client'
import { useState } from "react";
import Options from "../options/Options";
import './hamburger.scss';

const Hamburger = () => {
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!open)
    }
    return (
        <>
            <div className='container-hamburger' onClick={handleClick}>
                <span className={open ? 'menu-on' : ''}></span>
                <span className={open ? 'menu-on' : ''}></span>
                <span className={open ? 'menu-on' : ''}></span>
            </div>
            <Options open={open} handleClick={handleClick}/>
        </>
    )
}

export default Hamburger