import Link from 'next/link'
import React from 'react'
import './card.scss'

const Card = ({title, description, url}) => {
    return (
        <section className='container-card'>
            <Link href={url} className='container-card__link'>
                <div className='container-card__link__title'>
                    <h5>{title}</h5>
                </div>
                <div className='container-card__link__description'>
                    <p>{description}</p>
                </div>
            </Link>
        </section>
    )
}

export default Card