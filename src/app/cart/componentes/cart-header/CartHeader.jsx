'use client'
import React from 'react'
import { Typography, Badge, IconButton } from '@mui/material'
import { MdShoppingCart } from 'react-icons/md'
import './cartHeader.scss'

const CartHeader = ({ itemCount }) => {
    return (
        <div className="cart-header">
            <Typography variant="h5" className="title">
                Mi Carrito
            </Typography>

            <IconButton className="cart-icon">
                <Badge
                badgeContent={itemCount}
                color="primary"
                overlap="circular"
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                >
                <MdShoppingCart size={28} />
                </Badge>
            </IconButton>
        </div>
    )
}

export default CartHeader
