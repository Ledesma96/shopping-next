'use client'
import React, { useEffect, useState } from 'react'
import './search.scss'
import { IoIosSearch } from 'react-icons/io'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const mockProducts = [
    { title: 'Remera de algodón Adidas' },
    { title: 'Pantalón deportivo Nike' },
    { title: 'Zapatillas Puma Urban' },
    { title: 'Campera impermeable Reebok' }
]

const Search = () => {
    const router = useRouter();
    const [search, setSearch] = useState('');
    const [products, setProducts] = useState([]);

    useEffect(() => {
        if (search.trim() === '') {
        setProducts([])
        return
        }

        const filtered = mockProducts.filter(p =>
        p.title.toLowerCase().includes(search.toLowerCase())
        )

        setProducts(filtered)
    }, [search]);

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && search.trim() !== '') {
            router.push(`/products?search=${search}`);
            setSearch('')
        }
    }

    return (
        <div className="container-search">
            <div className="search-box">
                <input
                placeholder="Buscar productos..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                onKeyDown={handleKeyDown}
                />
                <IoIosSearch
                    className="icon"
                    onClick={() =>
                        search.trim() && router.push(`/products?search=${search}`)
                    }
                />
            </div>

            {products.length > 0 && (
                <div className="results">
                {products.map((p, i) => (
                    <Link key={i} href="/" className="item">
                    <img src="/images/ADIX0108-1.jpeg" className="img" alt={p.title} />
                    <p>{p.title}</p>
                    </Link>
                ))}
                </div>
            )}
        </div>
    )
}

export default Search
