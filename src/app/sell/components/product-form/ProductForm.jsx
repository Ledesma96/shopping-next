'use client'
import React, { useState } from 'react';
import { addProduct } from '../../../api/product.api';
import ProductInput from '../product-input/PoroductInput';
import UploadImage from '../upload-image/UploadImage';
import './product-form.scss';
import OptionsPicker from '../categories-picker/OptionsPicker';
import { CATEGORY_LIST } from '../../../../constants/categores';
import { STATUS_LIST } from '../../../../constants/status';
import SingleOptionsPicker from '../single-options-picker/SingleOptionsPicker';
import { SIZE_LIST } from '../../../../constants/sizes';
import ColorPicker from '../color-picker/ColorPicker';
import { COLOR_LIST } from '../../../../constants/colors';

const ProductForm = () => {
    const [product, setProduct] = useState({
        title: '',
        description: '',
        price: '',
        estado: [],
        categories: [],
        sizes: [],
        colors: [],
        stock: 0,
        sku: ''
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

            <ProductInput
                type="number"
                name="stock"
                value={product.stock}
                placeholder="Stock disponible"
                onChange={handleChange}
                min="0"
            />

            <ProductInput
                type="text"
                name="sku"
                value={product.sku}
                placeholder="SKU / Código interno"
                onChange={handleChange}
            />

            <SingleOptionsPicker
                title="Estado"
                options={STATUS_LIST}
                value={product.estado}
                setValue={(estado) =>
                    setProduct({ ...product, estado })
                }
            />

            <OptionsPicker
                title='Categoria'
                options={CATEGORY_LIST}
                selectedCategories={product.categories}
                setSelectedCategories={(categories) =>
                    setProduct({ ...product, categories })
                }
            />

            <OptionsPicker
                title="Talles disponibles"
                options={SIZE_LIST}
                selectedCategories={product.sizes}
                setSelectedCategories={(sizes) =>
                    setProduct({ ...product, sizes })
                }
            />

            <ColorPicker
                colors={COLOR_LIST}
                selected={product.colors}
                setSelected={(colors) =>
                    setProduct({ ...product, colors })
                }
            />

            <UploadImage images={images} setImages={setImages} />
                
            <button type="submit">Agregar producto</button>
        </form>
    );
};

export default ProductForm;
