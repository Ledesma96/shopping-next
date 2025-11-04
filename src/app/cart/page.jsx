import React from 'react'
import { CartActions, CartEmpty, CartHeader, CartItem } from './componentes'
export const cartItems = [
    {
        id: 1,
        name: "Zapatillas Nike Air Max 270",
        price: 120000,
        quantity: 1,
        stock: 10,
        image: "/images/ADIX0108-1.jpeg",
        category: "Calzado",
        brand: "Nike",
    },
    {
        id: 2,
        name: "Camiseta Adidas Originals",
        price: 55000,
        quantity: 2,
        stock: 15,
        image: "/images/ADIX0108-1.jpeg",
        category: "Ropa",
        brand: "Adidas",
    },
    {
        id: 3,
        name: "Guantes de entrenamiento Puma Grip",
        price: 35000,
        quantity: 1,
        stock: 8,
        image: "/images/ADIX0108-1.jpeg",
        category: "Accesorios",
        brand: "Puma",
    },
    {
        id: 4,
        name: "Pelota de fútbol Adidas Al Rihla",
        price: 80000,
        quantity: 1,
        stock: 12,
        image: "/images/ADIX0108-1.jpeg",
        category: "Deportes",
        brand: "Adidas",
    },
];
const page = () => {

    return (
        <div>
            <CartHeader />
            <CartItem cartItems={cartItems}/>
            {cartItems.length > 0 ?
                    <CartActions/>
                :
                    <CartEmpty />
            }
        </div>
    )
}

export default page