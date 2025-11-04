'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { FaRegTrashCan } from "react-icons/fa6";
import './cartItem.scss'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFromCart } from '../../../store/cartSlice';


const CartItem = () => {
    const { items } = useSelector((state) => state.cart);
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();

    const deleteToCart = (_id) => {
        dispatch(deleteFromCart(_id))
    }


    useEffect(() => {
        const fetchProducts = async() => {
            const result = await axios.get('/products.json');
            const filter = items.map((cartItem) => {
                const product = result.data[cartItem._id];
                if (product) {
                    return {
                        ...cartItem,
                        title: product.title,
                        image: product.images[0],
                    };
                } else {
                    return cartItem;
                }
            })
            setProducts(filter)
        }
        fetchProducts()
    }, [items]);

    
    return (
        <main className='container-items'>
            {products.map(item => (
                <div key={item.id} className='item'>
                    <div className='container-image'>
                        <Image className='image' alt={item.title} fill src={item.image}/>
                    </div>
                    <p className='name'>{item.title}</p>
                    <p>{item.quantity}</p>
                    <p>${(item.price * item.quantity).toFixed(2)}</p>
                    <FaRegTrashCan onClick={() => deleteToCart(item._id)}/>
                </div>
            ))}
        </main>
    )
}

export default CartItem