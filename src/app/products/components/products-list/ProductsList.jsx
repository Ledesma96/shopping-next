'use client'
import axios from 'axios';
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useState, useRef, useCallback } from 'react'
import { ProductCard } from '../../../components';
import './productsList.scss'
import { Filters } from './components';
import { PacmanLoader } from "react-spinners";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../store/cartSlice';

const ProductsList = () => {
    const dispatch = useDispatch();
    const searchParams = useSearchParams()
    const search = searchParams.get('search')

    const [products, setProducts] = useState([]);
    const [filtersArray, setFiltersArray] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    
    const observer = useRef();

    // Claves que realmente queremos usar como filtros
    const filterKeys = [
        "categories",
        "tags",
        "featured",
        "isActive",
        "isVisible",
        "ratingAverage",
    ];

    const fetchProducts = async (pageNum) => {
        setLoading(true);
        try {
            // Simulación de paginación
            const result = await axios.get('/products.json');
            if (!result.data) return;
    
            const filtered = result.data.filter(p =>
                search
                    ? p.title.toLowerCase().includes(search.trim().toLowerCase())
                    : true
            );
    
            const limit = 20;
            const start = (pageNum - 1) * limit;
            const end = start + limit;
    
            // Cortamos el array según la página
            const newProducts = filtered.slice(start, end);
    
            // Si es la primera página, reemplazamos; si no, concatenamos
            setProducts((prev) =>
                pageNum === 1 ? newProducts : [...prev, ...newProducts]
            );
    
            // Si ya no hay más productos, deshabilitamos el scroll infinito
            if (newProducts.length < limit || end >= filtered.length) {
                setHasMore(false);
            }
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };
    

    useEffect(() => {
        setProducts([]);
        setPage(1);
        setHasMore(true);
        fetchProducts(1);
    }, [search]);

    // Genera filtros importantes de manera dinámica
    useEffect(() => {
        if (products.length === 0) return;

        const filtersObj = {};

        products.forEach((product) => {
            filterKeys.forEach((key) => {
                const value = product[key];
                if (value == null) return;

                if (!filtersObj[key]) filtersObj[key] = new Set();

                if (Array.isArray(value)) {
                    value.forEach((v) => {
                        if (typeof v === "object" && v !== null && v.$oid) {
                            filtersObj[key].add(v.$oid);
                        } else {
                            filtersObj[key].add(v);
                        }
                    });
                } else if (typeof value === "object" && value.$oid) {
                    filtersObj[key].add(value.$oid);
                } else {
                    filtersObj[key].add(value);
                }
            });
        });

        const filtersObjArrays = Object.fromEntries(
            Object.entries(filtersObj).map(([key, set]) => [key, [...set]])
        );

        const filtersArray = Object.entries(filtersObjArrays).map(([key, values]) => ({
            key,
            values
        }));

        setFiltersArray(filtersArray);
    }, [products]);

    // Intersection Observer para scroll infinito
    const lastProductRef = useCallback((node) => {
        if (loading) return;
        if (observer.current) observer.current.disconnect();

        observer.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && hasMore) {
                setPage((prev) => prev + 1);
            }
        });

        if (node) observer.current.observe(node);
    }, [loading, hasMore]);

    // Llamar a la API cuando page cambia
    useEffect(() => {
        if (page === 1) return;
        fetchProducts(page);
    }, [page]);

    const addProductToCart = (index, price, quantity) => {
        dispatch(addToCart({_id: index, price, quantity}))
    }
    return (
        <main className='container-views'>
            <Filters filters={filtersArray} />

            {products.map((product, i) => {
                if (i === products.length - 1) {
                    return (
                        <div className='container-card' ref={lastProductRef} key={i}>
                            <ProductCard product={product} />
                            <button className='add-to-cart-btn'>Agregar al carrito</button>
                        </div>
                    );
                } else {
                    return (
                        <div className='container-card' key={i}>
                            <ProductCard product={product} />
                            <button className='add-to-cart-btn' onClick={() => addProductToCart(i, product.price, 1)}>Agregar al carrito</button>
                        </div>
                    );
                }
            })}
            <PacmanLoader
                className='packman-loader'
                color="#2F80ED"
                size={20}
                cssOverride={{
                    display: "block",
                    margin: "16px auto",     // centra horizontalmente
                }}
                loading={loading}
            />
            {!hasMore && <p className="end-message">No hay más productos</p>}
        </main>
    );
};

export default ProductsList;
