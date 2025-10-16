'use client'
import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import { MdShoppingCart } from 'react-icons/md'
import { useRouter } from 'next/navigation'
import './cartEmpty.scss'

const CartEmpty = () => {
    const router = useRouter()

    return (
        <Box className="cart-empty">
            <MdShoppingCart className="cart-icon" />

            <Typography variant="h6" className="title">
                Tu carrito está vacío
            </Typography>

            <Typography variant="body2" className="subtitle">
                Parece que aún no agregaste ningún producto.
            </Typography>

            <Button
                variant="contained"
                color="primary"
                className="return-btn"
                onClick={() => router.push('/')}
            >
                Volver a la tienda
            </Button>
        </Box>
    )
}

export default CartEmpty
