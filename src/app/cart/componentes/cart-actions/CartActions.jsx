'use client'
import React from 'react'
import { Button, Typography, Divider } from '@mui/material'
import './cartActions.scss'
import { useDispatch, useSelector } from 'react-redux'
import { clearCartAsync} from '../../../store/cartSlice'
import { useRouter } from 'next/navigation'

const CartActions = ({cart}) => {
    const { totalPrice } = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const router = useRouter();

    const onClearCart = (_id) => {
        dispatch(clearCartAsync(_id))
    }
    const onCheckout = () => {
        router.push('/checkout')
    }
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
                onClick={() => onClearCart(cart._id)}
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
