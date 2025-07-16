'use client'
import React, { useState } from 'react';
import ProductForm from '../product-form/ProductForm';
import './addProduct.scss';

const AddProduct = ({ onAdd }) => {
    const [product, setProduct] = useState({
        name: '',
        description: '',
        price: '',
        image: ''
    });

    const handleChange = (name, value) => {
        setProduct({ ...product, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!product.name || !product.price) {
            alert('Nombre y precio son obligatorios.');
            return;
        }
        onAdd(product);
        setProduct({ name: '', description: '', price: '', image: '' });
    };

    return (
        <ProductForm
            product={product}
            onChange={handleChange}
            onSubmit={handleSubmit}
        />
    );
};

export default AddProduct;
