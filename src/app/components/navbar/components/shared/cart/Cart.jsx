'use client'
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import './cart.scss'
import { useEffect } from "react";
import Link from "next/link";
const CartIcon = () => {
    const {totalItems, totalPrice, items} = useSelector((state) => state.cart);
    
    useEffect(() =>{
        console.log(items);
    }, [items])
    return (
        <Link href='/cart' className="container-cart">
            <FaShoppingCart size={24} />
            <span className="count">
                {totalItems}
            </span>
            <span className="total">
                ${totalPrice.toFixed(2)}
            </span>
        </Link>
    );
};

export default CartIcon;
