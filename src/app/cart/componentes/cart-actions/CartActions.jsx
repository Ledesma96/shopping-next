'use client'
import React from 'react'
import { Button, Typography, Divider } from '@mui/material'
import './cartActions.scss'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../../../store/cartSlice'

const CartActions = () => {
    const { totalPrice } = useSelector(state => state.cart)
    const dispatch = useDispatch();

    const onClearCart = () => {
        dispatch(clearCart())
    }
    const onCheckout = () => {}
    return (
        <div className="cart-actions">
            <Divider sx={{ width: '100%', mb: 2 }} />

            <div className="cart-summary">
                <Typography variant="h6" className="total-text">
                Total:
                </Typography>
                <Typography variant="h6" className="total-amount">
                ${totalPrice.toLocaleString()}
                </Typography>
            </div>

            <div className="buttons">
                <Button
                variant="outlined"
                color="error"
                onClick={onClearCart}
                className="clear-btn"
                >
                Vaciar carrito
                </Button>

                <Button
                variant="contained"
                color="primary"
                onClick={onCheckout}
                className="checkout-btn"
                >
                Finalizar compra
                </Button>
            </div>
        </div>
    )
}

export default CartActions
