import React from 'react';
import ProductInput from '../product-input/PoroductInput';
import UploadImage from '../upload-image/UploadImage';
import './product-form.scss';

const ProductForm = ({ product, onChange, onSubmit }) => {
    return (
        <form className="add-product-form" onSubmit={onSubmit}>
            <h2>Agregar Producto</h2>

            <ProductInput
                type="text"
                name="name"
                value={product.name}
                placeholder="Nombre del producto"
                onChange={onChange}
            />

            <ProductInput
                type="textarea"
                name="description"
                value={product.description}
                placeholder="Descripción (opcional)"
                onChange={onChange}
            />

            <ProductInput
                type="number"
                name="price"
                value={product.price}
                placeholder="Precio"
                onChange={onChange}
                min="0"
                step="0.01"
            />

            <UploadImage />

            <button type="submit">Agregar producto</button>
        </form>
    );
};

export default ProductForm;
