import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaHeart } from "react-icons/fa";
import './productCard-styles.scss';

const ProductCard = ({product}) => {
    return (
        <Link href={`/product-detail/${product._id}`} className="product-card">
            <FaHeart className={`${product.tags.includes('favoritos') ? "favorite" : ''} product-card__favorite`}/>
            <div className='product-card__container-img'>
                <Image
                    fill
                    src='/images/ADIX0108-1.jpeg'
                    alt={product.title}
                    className="product-card__container-img__image"
                />
            </div>
            <h3 className="product-card__name">{product.title}</h3>
            <p className="product-card__price">${product.price}</p>
            {product.freeShipping && (
                <span className="product-card__shipping">Envío gratis</span>
            )}
        </Link>
    );
}

export default ProductCard