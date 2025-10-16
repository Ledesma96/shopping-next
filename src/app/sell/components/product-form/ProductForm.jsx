'use client'
import React, { useState } from 'react';
import { addProduct } from '../../../api/product.api';
import CategoryPicker from '../categories-picker/CategoriesPicker';
import ProductInput from '../product-input/PoroductInput';
import UploadImage from '../upload-image/UploadImage';
import './product-form.scss';

const ProductForm = () => {
    const [product, setProduct] = useState({
        title: '',
        description: '',
        price: '',
        categories: []
    });
    const [images, setImages] = useState([]);

    const handleChange = (name, value) => {
        setProduct({ ...product, [name]: value });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        if (!product.title || !product.price) {
            alert('Nombre y precio son obligatorios.');
            return;

        }
        const response = await addProduct(product, images);
        console.log(response);
        

        setProduct({ title: '', description: '', price: '', images: [], categories: [] });
    };
    return (
        <form className="add-product-form" onSubmit={handleSubmit}>
            <h2>Agregar Producto</h2>

            <ProductInput
                type="text"
                name="title"
                value={product.title}
                placeholder="Nombre del producto"
                onChange={handleChange}
            />

            <ProductInput
                type="textarea"
                name="description"
                value={product.description}
                placeholder="Descripción (opcional)"
                onChange={handleChange}
            />

            <ProductInput
                type="number"
                name="price"
                value={product.price}
                placeholder="Precio"
                onChange={handleChange}
                min="0"
                step="0.01"
            />

            <CategoryPicker
                selectedCategories={product.categories}
                setSelectedCategories={(categories) =>
                    setProduct({ ...product, categories })
                }
            />


            <UploadImage images={images} setImages={setImages} />
                
            <button type="submit">Agregar producto</button>
        </form>
    );
};

export default ProductForm;
