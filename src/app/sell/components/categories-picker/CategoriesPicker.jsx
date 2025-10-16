// src/components/category-picker/CategoryPicker.jsx

'use client'
import React, { useState } from 'react';

import { CATEGORY_LIST } from '../../../../constants/categores';
import './category-picker.scss';

const CategoryPicker = ({ selectedCategories, setSelectedCategories }) => {
    const [input, setInput] = useState('');
    const [showOptions, setShowOptions] = useState(false);

    const filtered = CATEGORY_LIST.filter(
        (cat) =>
            cat.toLowerCase().includes(input.toLowerCase()) &&
            !selectedCategories.includes(cat)
    );
    
        const handleAdd = (cat) => {
        setSelectedCategories([...selectedCategories, cat]);
        setInput('');
        setShowOptions(false);
        };
    
        const handleRemove = (cat) => {
        setSelectedCategories(selectedCategories.filter((c) => c !== cat));
        };
    
        const handleInputFocus = () => {
        setShowOptions(true);
        };
    
        const handleBlur = () => {
        setTimeout(() => setShowOptions(false), 100); // Delay para permitir el click
        };
    
        return (
        <div className="category-picker">
            <label>Categorías</label>
    
            {/* Chips de seleccionadas */}
            <div className="selected">
            {selectedCategories.map((cat) => (
                <div key={cat} className="chip">
                {cat}
                <button type="button" onClick={() => handleRemove(cat)}>×</button>
                </div>
            ))}
            </div>
    
            {/* Input + lista desplegable */}
            <div className="input-container">
            <input
                type="text"
                placeholder="Buscar categoría..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onFocus={handleInputFocus}
                onBlur={handleBlur}
            />
            {showOptions && filtered.length > 0 && (
                <ul className="dropdown">
                {filtered.map((cat) => (
                    <li key={cat} onClick={() => handleAdd(cat)}>
                    {cat}
                    </li>
                ))}
                </ul>
            )}
            </div>
        </div>
    );
};

export default CategoryPicker;