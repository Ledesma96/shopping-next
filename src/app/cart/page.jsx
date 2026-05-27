'use client'
import React, { useEffect, useState } from 'react'
import { CartActions, CartEmpty, CartHeader, CartItem } from './componentes'
import { useSelector } from 'react-redux'

const page = () => {
    const cart= useSelector(state => state.cart);
    
    const [cartItems, setCartItems] = useState([]);
    useEffect(() => {
        setCartItems(cart.items)
    }, [cart.items])
    return (
        <div>
            <CartHeader />
            <CartItem cartItems={cartItems}/>
            {cartItems.length > 0 ?
                    <CartActions cart={cart}/>
                :
                    <CartEmpty />
            }
        </div>
    )
}

export default page