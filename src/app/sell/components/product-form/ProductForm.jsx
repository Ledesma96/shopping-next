'use client'
import React, { useState } from 'react';
import { addProduct } from '../../../api/product.api';
import ProductInput from '../product-input/PoroductInput';
import UploadImage from '../upload-image/UploadImage';
import OptionsPicker from '../categories-picker/OptionsPicker';
import SingleOptionsPicker from '../single-options-picker/SingleOptionsPicker';
import ColorPicker from '../color-picker/ColorPicker';
import { CATEGORY_LIST } from '../../../../constants/categores';
import { STATUS_LIST } from '../../../../constants/status';
import { SIZE_LIST } from '../../../../constants/sizes';
import { COLOR_LIST } from '../../../../constants/colors';
import './product-form.scss';

const ProductForm = () => {
    const initialState = {
        title: '',
        description: '',
        price: '',
        stock: 0,
        sku: '',
        brand: '',        // Nuevo: Marca
        material: '',     // Nuevo: Para ropa o muebles
        weight: '',       // Nuevo: Para alimentos (ej: "15kg")
        dimensions: '',   // Nuevo: Para muebles o electrónica
        estado: '',       // Cambiado a String (Nuevo/Usado)
        categories: [],
        sizes: [],
        colors: [],
        tags: [],         // Nuevo: Palabras clave para el buscador
    };

    const [product, setProduct] = useState(initialState);
    const [images, setImages] = useState([]);

    const handleChange = (name, value) => {
        setProduct({ ...product, [name]: value });
    };

    // FUNCIÓN CLAVE: Limpia el objeto antes de enviar
    const cleanProductData = (data) => {
        const cleanData = { ...data };
        Object.keys(cleanData).forEach(key => {
            const val = cleanData[key];
            // Elimina si es: string vacía, array vacío, null o undefined
            if (
                val === '' || 
                (Array.isArray(val) && val.length === 0) || 
                val === null || 
                val === undefined
            ) {
                delete cleanData[key];
            }
        });
        return cleanData;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!product.title || !product.price) {
            alert('Nombre y precio son obligatorios.');
            return;
        }

        const dataToSend = cleanProductData(product);
        
        try {
            const response = await addProduct(dataToSend, images);
            console.log("Respuesta API:", response);
            alert("Producto agregado con éxito");
            setProduct(initialState);
            setImages([]);
        } catch (error) {
            console.error("Error al agregar:", error);
        }
    };

    return (
        <form className="add-product-form" onSubmit={handleSubmit}>
            <h2>Configuración General</h2>
            <div className="form-section">
                <ProductInput type="text" name="title" value={product.title} placeholder="Nombre del producto (ej: Zapatillas Run 2.0)" onChange={handleChange} />
                <ProductInput type="text" name="brand" value={product.brand} placeholder="Marca (ej: Nike, Purina)" onChange={handleChange} />
                <ProductInput type="textarea" name="description" value={product.description} placeholder="Descripción detallada" onChange={handleChange} />
            </div>

            <h2>Precios y Stock</h2>
            <div className="form-row">
                <ProductInput type="number" name="price" value={product.price} placeholder="Precio" onChange={handleChange} min="0" step="0.01" />
                <ProductInput type="number" name="stock" value={product.stock} placeholder="Stock" onChange={handleChange} min="0" />
                <ProductInput type="text" name="sku" value={product.sku} placeholder="SKU / Código" onChange={handleChange} />
            </div>

            <h2>Especificaciones Físicas (Opcional)</h2>
            <p className="helper-text">Llenar solo lo que aplique al producto</p>
            <div className="form-row">
                <ProductInput type="text" name="weight" value={product.weight} placeholder="Peso (ej: 15kg, 500g)" onChange={handleChange} />
                <ProductInput type="text" name="material" value={product.material} placeholder="Material (ej: Cuero, Algodón)" onChange={handleChange} />
                <ProductInput type="text" name="dimensions" value={product.dimensions} placeholder="Medidas (ej: 100x50x20 cm)" onChange={handleChange} />
            </div>

            <h2>Clasificación y Variantes</h2>
            <div className="form-grid">
                <SingleOptionsPicker title="Estado del Producto" options={STATUS_LIST} value={product.estado} setValue={(val) => handleChange('estado', val)} />
                
                <OptionsPicker title="Categorías" options={CATEGORY_LIST} selectedCategories={product.categories} setSelectedCategories={(val) => handleChange('categories', val)} />

                <OptionsPicker title="Etiquetas de Búsqueda (Tags)" options={[]} // Puedes pasar sugerencias o dejar que escriban
                    selectedCategories={product.tags} setSelectedCategories={(val) => handleChange('tags', val)} />
            </div>

            <h2>Atributos Visuales</h2>
            <div className="form-grid">
                <OptionsPicker title="Talles / Tamaños" options={SIZE_LIST} selectedCategories={product.sizes} setSelectedCategories={(val) => handleChange('sizes', val)} />
                
                <ColorPicker colors={COLOR_LIST} selected={product.colors} setSelected={(val) => handleChange('colors', val)} />
            </div>

            <div className="image-section">
                <label>Imágenes del Producto</label>
                <UploadImage images={images} setImages={setImages} />
            </div>
                
            <button type="submit" className="btn-submit">Publicar Producto</button>
        </form>
    );
};

export default ProductForm;