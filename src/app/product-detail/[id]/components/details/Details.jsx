import React from 'react';
import { Stars } from '../../../../components';
import { Description, ProductInfo } from './components';

const Details = ({product}) => {
    return (
        <main>
            <Stars stars={product.ratingAverage}/>
            <ProductInfo product={product} />
            <Description product={product} />
        </main>
    )
}

export default Details