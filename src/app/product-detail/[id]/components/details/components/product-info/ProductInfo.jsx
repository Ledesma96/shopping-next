'use client'
import React, { useState } from 'react'
import './productInfo.scss'

const ProductInfo = ({ product }) => {
    const [count, setCount] = useState(1);
    const [selectedSize, setSelectedSize] = useState("");
    const [selectedColor, setSelectedColor] = useState(null);

    const sumCount = (number) => {
        setCount((prev) => {
            const newCount = prev + number;
            return newCount < 1 ? 1 : newCount;
        });
    };

    // Colores con nombre + código para mostrar color real
    const colors = [
        { name: "Rojo", code: "#E53935" },
        { name: "Negro", code: "#000000" },
        { name: "Azul", code: "#2962FF" },
        { name: "Blanco", code: "#FFFFFF" },
    ];

    return (
        <div className='product-info-container'>
            <p className='product-info-container__title'>{product.title}</p>
            <p className='product-info-container__price'>${product.price}</p>

            <div className="product-info-container__extra">
                <div className="extra-item">
                    <h4>Devolución gratis</h4>
                    <p>Tenés 30 días desde que lo recibís.</p>
                </div>

                <div className="extra-item">
                    <h4>Garantía</h4>
                    <p>Garantía del vendedor: 6 meses.</p>
                </div>

                <div className="extra-item">
                    <h4>Envíos a todo el país</h4>
                    <p>Llega entre 24 y 48 horas según tu zona.</p>
                </div>
            </div>

            {/* Talle */}
            <div className="product-info-container__sizes">
                <label htmlFor="sizeSelect">Talle:</label>
                <select
                    id="sizeSelect"
                    value={selectedSize}
                    onChange={(e) => setSelectedSize(e.target.value)}
                >
                    <option value="">Elegir talle</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                </select>
            </div>

            {/* Colores dinámicos */}
            <div className="product-info-container__colors">
                <p className="colors-title">Color:</p>
                <section className="colors-grid">
                    {colors.map((color) => (
                        <div
                            key={color.code}
                            className={`color-circle ${selectedColor?.code === color.code ? "selected" : ""}`}
                            style={{ backgroundColor: color.code }}
                            onClick={() => setSelectedColor(color)}
                        />
                    ))}
                </section>

                {selectedColor && (
                    <p className="selected-color-label">
                        Color elegido: <strong>{selectedColor.name}</strong>
                    </p>
                )}
            </div>

            <div className='product-info-container__count'>
                <button onClick={() => sumCount(-1)}>-</button>
                <p>{count}</p>
                <button onClick={() => sumCount(1)}>+</button>
            </div>

            <div className='product-info-container__actions'>
                <button disabled={!selectedSize || !selectedColor}>Comprar ahora</button>
                <button disabled={!selectedSize || !selectedColor}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ProductInfo
