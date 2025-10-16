// PriceRange.jsx
import React, { useState, useEffect } from "react";
import "./price.scss";

const Price = ({ min = 0, max = 10000, step = 1, onChange = () => {} }) => {
  // guardamos valores seleccionados localmente
    const [range, setRange] = useState([min, max]);

    // si cambian min/max desde afuera, reseteamos el rango
    useEffect(() => {
        setRange([min, max]);
    }, [min, max]);

    function handleChange(index, rawValue) {
        const value = Number(rawValue);
        const otherIndex = index === 0 ? 1 : 0;
        const otherValue = range[otherIndex];

        const gap = step; // mínimo espacio entre thumbs (podés aumentarlo)
        let newRange = [...range];

        if (index === 0) {
            // limitar el thumb izquierdo para no cruzar al derecho
            const maxAllowed = otherValue - gap;
            newRange[0] = Math.min(value, maxAllowed);
            newRange[1] = otherValue;
        } else {
            // thumb derecho no puede ser menor que el izquierdo + gap
            const minAllowed = otherValue + gap;
            newRange[1] = Math.max(value, minAllowed);
            newRange[0] = otherValue;
        }

        setRange(newRange);
        onChange?.(newRange); // llamamos al callback solo si existe
    }

  // evitar división por cero si min === max
    const rangeSpan = Math.max(max - min, 1);

    const leftPercent = ((range[0] - min) / rangeSpan) * 100;
    const rightPercent = ((max - range[1]) / rangeSpan) * 100;

    return (
        <div className="price-range">
            <h4>Precio</h4>
            <div className="slider-container">
            <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={range[0]}
                onChange={(e) => handleChange(0, e.target.value)}
                className="thumb thumb-left"
                style={{ zIndex: range[0] > max - 100 ? 5 : undefined }}
            />

            <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={range[1]}
            onChange={(e) => handleChange(1, e.target.value)}
            className="thumb thumb-right"
            />

            <div className="slider-track" />

            <div
            className="slider-range"
            style={{
                left: `${leftPercent}%`,
                right: `${rightPercent}%`,
            }}
            />
            </div>

            <div className="price-values">
                <span>${range[0]}</span>
                <span>${range[1]}</span>
            </div>
        </div>
    );
};

export default Price;
