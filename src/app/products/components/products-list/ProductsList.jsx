'use client'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState, useRef, useCallback } from 'react'
import { AddCart, ProductCard } from '../../../components';
import './productsList.scss'
import { Filters } from './components';
import { PacmanLoader } from "react-spinners";
import { getProducts } from '../../../api/product.api';

const ProductsList = () => {
    const searchParams = useSearchParams();
    const search = searchParams.get('search') || '';
    
    const [selectedFilters, setSelectedFilters] = useState({});
    const [products, setProducts] = useState([]);
    const [filtersArray, setFiltersArray] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    const observer = useRef();
    // 1. Referencia para controlar la captura inicial de filtros
    const isFirstLoad = useRef(true);

    const translations = {
        categories: "Categorías",
        tags: "Estado",
        featured: "Destacados",
        ratingAverage: "Calificación",
        isActive: "Estado",
        isVisible: "Visibilidad"
    };

    const fetchProducts = async (pageNum, isReset = false) => {
        setLoading(true);
        try {
            const params = {
                name: search,
                page: pageNum,
                limit: 20,
                // Mapeo dinámico para el Body
                category: selectedFilters.categories || [], 
                tags: selectedFilters.tags || [],
                minPrice: selectedFilters.minPrice,
                maxPrice: selectedFilters.maxPrice,
            };

            const data = await getProducts(params);
            const newProducts = Array.isArray(data) ? data : (data.products || []); 

            if (!newProducts || newProducts.length === 0) {
                if (pageNum === 1) setProducts([]);
                setHasMore(false);
                return;
            }

            setProducts((prev) =>
                isReset ? newProducts : [...prev, ...newProducts]
            );

            setHasMore(newProducts.length === 20);
        } catch (err) {
            console.error("Error en fetchProducts:", err);
        } finally {
            setLoading(false);
        }
    };

    // Al cambiar la búsqueda global: Reset total (productos, página y filtros disponibles)
    useEffect(() => {
        isFirstLoad.current = true; // Habilitamos captura de filtros para la nueva búsqueda
        setProducts([]);
        setPage(1);
        setHasMore(true);
        fetchProducts(1, true);
    }, [search]);

    // Al cambiar filtros laterales: Solo reset de productos y página
    useEffect(() => {
        // No tocamos isFirstLoad.current para que los filtros no desaparezcan
        setPage(1);
        setHasMore(true);
        fetchProducts(1, true);
    }, [selectedFilters]);

    // Scroll infinito
    useEffect(() => {
        if (page === 1) return;
        fetchProducts(page, false);
    }, [page]);

    // Lógica de Generación de Filtros (Solo la primera vez por búsqueda)
    useEffect(() => {
        // Si no hay productos o ya capturamos los filtros iniciales, no hacemos nada
        if (products.length === 0 || !isFirstLoad.current) return;

        const ignoredKeys = [
            '_id', 'title', 'description', 'price', 'stock', 
            'images', 'seller', 'salesCount', 'isActive', 
            'isVisible', 'reviews', '__v', 'id'
        ];

        const filtersObj = {};

        products.forEach((product) => {
            Object.entries(product).forEach(([key, value]) => {
                if (ignoredKeys.includes(key) || value == null) return;
                if (!filtersObj[key]) filtersObj[key] = new Set();

                if (Array.isArray(value)) {
                    value.forEach((v) => {
                        const valToAdd = (typeof v === 'object' && v.$oid) ? v.$oid : v;
                        filtersObj[key].add(valToAdd);
                    });
                } else if (typeof value === 'object' && value.$oid) {
                    filtersObj[key].add(value.$oid);
                } else {
                    filtersObj[key].add(value);
                }
            });
        });

        const formattedFilters = Object.entries(filtersObj)
            .map(([key, valueSet]) => ({
                key, 
                displayName: translations[key] || key,
                values: Array.from(valueSet).sort()
            }))
            .filter(f => f.values.length > 1);

        setFiltersArray(formattedFilters);
        
        // IMPORTANTÍSIMO: Bloqueamos futuras actualizaciones de filtros hasta que cambie 'search'
        isFirstLoad.current = false; 

    }, [products]);

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

    return (
        <main className='container-views'>
            <Filters
                filters={filtersArray}
                selectedFilters={selectedFilters}
                setSelectedFilters={setSelectedFilters}
            />
            {products.map((product, i) => {
                const isLast = i === products.length - 1;
                    return (
                        <div className='container-card' ref={isLast ? lastProductRef : null} key= {product._id || i}>
                            <ProductCard product={product} />
                            <AddCart product={product}/>
                        </div>
                    );
            })}
            <PacmanLoader
                className='packman-loader'
                color="#2F80ED"
                size={20}
                cssOverride={{display: "block", margin: "16px auto",}}
                loading={loading}
            />
            {!hasMore && <p className="end-message">No hay más productos</p>}
        </main>
    );
};

export default ProductsList;