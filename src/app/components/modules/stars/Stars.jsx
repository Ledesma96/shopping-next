import React from 'react';
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import './stars.scss';

const Stars = ({ stars, max = 5 }) => {
    const fullStars = Math.floor(stars);
    const fractionalPart = stars % 1;
    
    return (
        <div className="container-rating">
            {Array.from({ length: max }, (_, i) => {
                if (i < fullStars) {
                return <FaStar key={i} color='#2F80ED' className='container-rating__star'/>;
                } else if (i === fullStars && fractionalPart > 0) {
                return <FaStarHalfAlt key={i} color='#2F80ED' className='container-rating__star'/>;
                } else {
                return <FaRegStar key={i} color='black' className='container-rating__star'/>;
                }
            })}
            <p className='container-rating__score'>{stars}</p>
        </div>
    );
};

export default Stars;
