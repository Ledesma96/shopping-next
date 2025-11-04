import React from 'react'
import { CiHeart } from "react-icons/ci";
import './header.scss'

const Header = ({product}) => {
    return (
        <div className='container-header'>
            <p className='title'>{product.title}</p>
            <div className='container-heart'>
                <CiHeart size={30}/>
            </div>
        </div>
    )
}

export default Header