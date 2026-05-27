'use client'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import './addCart.scss'
import { addOrUpdateCartAsync } from '../../../store/cartSlice'

const AddCart = ({product}) => {
    console.log(product)
    const dispatch = useDispatch();

    const addProductToCart = (productId, price, quantity, sellerId, priceAtAddition) => {
        dispatch(addOrUpdateCartAsync({productId, price, quantity, sellerId, priceAtAddition}))
    }

  return (
    <button className='add-to-cart-btn' onClick={() => addProductToCart(product._id, product.price, 1, product.seller, product.price)}>Agregar al carrito</button>
  )
}

export default AddCart