'use client'
import { useState } from 'react';
import './colorPicker.scss';

const ColorPicker = ({ colors, selected, setSelected }) => {
    const [hoveredColor, setHoveredColor] = useState(null);

    const toggleColor = (color) => {
        if (selected.some(c => c.value === color.value)) {
            setSelected(selected.filter(c => c.value !== color.value));
        } else {
            setSelected([...selected, color]);
        }
    };

    return (
        <div className="color-picker">
            <label>Colores disponibles</label>
            <div className="colors">
                {colors.map(color => (
                    <div key={color.value} className="color-item-wrapper">
                        <div
                            onMouseEnter={() => setHoveredColor(color.value)} 
                            onMouseLeave={() => setHoveredColor(null)}
                            className={`color-circle ${
                                selected.some(c => c.value === color.value) ? 'active' : ''
                            }`}
                            style={{ backgroundColor: color.value }}
                            onClick={() => toggleColor(color)}
                        />
                        {/* Solo se muestra si el valor de este color coincide con el del estado */}
                        {hoveredColor === color.value && (
                            <span className="color-tooltip">{color.name}</span>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ColorPicker;
