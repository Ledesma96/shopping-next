'use client'
import React, { useEffect, useState } from 'react'
import './search.styles.scss';
import { IoIosSearch } from 'react-icons/io';
import Link from 'next/link';

const mockProducts = [
    {title: 'Remera de algodon adidas'},
    {title: 'Remera de algodon adidas'}
]
const Search = () => {
    const [search, setSearch] = useState('');
    const [products, setProducts] = useState([]);

    return (
        <div className="container-search">
            <div >
                <input placeholder="Buscar" onChange={e => setSearch(e.target.value)}/>
                <IoIosSearch className="icon"/>
            </div>
            {
                products.length > 0 &&
                    <div >
                        {products.map( p => (
                            <Link href='/' className='item'>
                                <img src='/images/ADIX0108-1.jpeg' className='img'/>
                                <p>{p.title}</p>
                            </Link>
                        ))}
                    </div>
            }
        </div>
    )
}

export default Search