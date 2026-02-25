'use client'
import React from 'react'
import { useDispatch } from 'react-redux'
import './addCart.scss'
import { addToCart } from '../../../store/cartSlice'

const AddCart = ({id}) => {
    const dispatch = useDispatch();
    const addProductToCart = (price, quantity) => {
        dispatch(addToCart({_id: id, price, quantity}))
    }

  return (
    <button className='add-to-cart-btn' onClick={() => addProductToCart(product.price, 1)}>Agregar al carrito</button>
  )
}

export default AddCart