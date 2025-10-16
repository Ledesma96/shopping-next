'use client'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { getProductById } from '../../api/product.api'
import { AnswerAndQuestion, Details, Gallery, Reviews } from './components'

const Page = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const params = useParams();
    const id = params.id;
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const result = await getProductById(id);
                if (!result.success) {
                    console.log('No se consiguió el producto');
                    return;
                }
                setProduct(result.product);
            } catch (error) {
                console.error('Error al obtener el producto:', error.message);
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchProduct();
        }
    }, [id]);


    if (loading) {
        return <p>Cargando...</p>;
    }

    if (!product) {
        return <p>No se encontró el producto.</p>;
    }

    return (
        <div>
            <Gallery images={product.images} />
            <Details product={product} />
            <AnswerAndQuestion />
            <Reviews id={id}/>
        </div>
    );
};

export default Page;
