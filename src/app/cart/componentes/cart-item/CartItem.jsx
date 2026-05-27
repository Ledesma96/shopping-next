'use client'
import Image from 'next/image';
import React, { useEffect } from 'react'
import { FaRegTrashCan, FaPlus, FaMinus } from "react-icons/fa6"; // Agregamos iconos
import { useDispatch } from 'react-redux';
import { addOrUpdateCartAsync, removeItemCartAync } from '../../../store/cartSlice';
import './cartItem.scss'

const CartItem = ({ cartItems }) => {
    const dispatch = useDispatch();
    useEffect(() => {console.log(cartItems);
    }, [cartItems])

    // Función genérica para cambiar cantidad
    const handleUpdateQuantity = (item, amount) => {
        // Evitamos que baje de 1 con el botón de resta (para borrar se usa el tacho)
        if (amount === -1 && item.quantity <= 1) return;

        dispatch(addOrUpdateCartAsync({
            productId: item.productId._id,
            sellerId: item.sellerId,
            quantity: amount
        }));
    };

    const handleDeleteItem = (_id) => {
        console.log(_id);
        
        dispatch(removeItemCartAync(_id));
    };

    return (
        <main className='container-items'>
            {cartItems.map((item) => {
                const product = item.productId; 
                
                return (
                    <div key={item._id} className='item'>
                        <div className='container-image'>
                        {product?.images?.length > 0 ? (
                            <Image 
                                className='image' 
                                alt={product.title || "Producto"} 
                                width={40} 
                                height={40} 
                                src={product.images[0]} 
                            />
                        ) : (
                            <div className="no-image">No image</div>
                        )}
                    </div>
                        
                        <div className='info'>
                            <p className='name'>{product.title}</p>
                        </div>

                        <div className='quantity-controls'>
                            <button 
                                onClick={() => handleUpdateQuantity(item, -1)}
                                disabled={item.quantity <= 1}
                            >
                            <FaMinus />
                            </button>
                            <span>{item.quantity}</span>
                            <button onClick={() => handleUpdateQuantity(item, 1)}>
                                <FaPlus />
                            </button>
                        </div>

                        <p className='price'>
                            ${(product.price * item.quantity).toFixed(2)}
                        </p>

                        <div className='actions'>
                            <FaRegTrashCan 
                                className='delete-icon' 
                                onClick={() => handleDeleteItem(item._id)}
                            />
                        </div>
                    </div>
                );
            })}
        </main>
    )
}

export default CartItem;