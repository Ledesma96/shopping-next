import Image from 'next/image';
import React from 'react'
import { FaRegTrashCan } from "react-icons/fa6";
import './cartItem.scss'


const CartItem = ({cartItems}) => {
    return (
        <main className='container-items'>
            {cartItems.map(item => (
                <div key={item.id} className='item'>
                    <div className='container-image'>
                        <Image className='image' alt={item.name} fill src={item.image}/>
                    </div>
                    <p className='name'>{item.name}</p>
                    <p>{item.quantity}</p>
                    <p>${item.price}</p>
                    <FaRegTrashCan />
                </div>
            ))}
        </main>
    )
}

export default CartItem