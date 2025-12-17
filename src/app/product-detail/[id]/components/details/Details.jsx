import React from 'react';
import Stars from '../../../../components/modules/stars/Stars';
import { Description, ProductInfo } from './components';
import { CiHeart } from "react-icons/ci";
import './details.scss'

const Details = ({product}) => {
    return (
        <main>
            <div className='container__startAndHeart'>
                <Stars stars={product.ratingAverage}/>
                <div className='container-heart'>
                    <CiHeart className='heart' size={30}/>
                </div>
            </div>
            <ProductInfo product={product} />
            <Description product={product} />
        </main>
    )
}

export default Details