'use client'
import React, { useState } from 'react';
import './optionsPicker.scss';




const OptionsPicker = ({ selectedCategories = [], setSelectedCategories, title, options = [] }) => {
    const [input, setInput] = useState('');
    const [showOptions, setShowOptions] = useState(false);

    const filtered = options.filter(
        (opt) =>
        opt.toLowerCase().includes(input.toLowerCase()) &&
        !selectedCategories.includes(opt)
    );

    const handleAdd = (opt) => {
        setSelectedCategories([...selectedCategories, opt]);
        setInput('');
        setShowOptions(false);
    };

    const handleRemove = (opt) => {
        setSelectedCategories(selectedCategories.filter((o) => o !== opt));
    };

    return (
        <div className="category-picker">
        <label>{title}</label>

        <div className="selected">
            {selectedCategories.map((opt) => (
            <div key={opt} className="chip">
                {opt}
                <button type="button" onClick={() => handleRemove(opt)}>×</button>
            </div>
            ))}
        </div>

        <div className="input-container">
            <input
            type="text"
            placeholder={`Buscar ${title.toLowerCase()}...`}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onFocus={() => setShowOptions(true)}
            onBlur={() => setTimeout(() => setShowOptions(false), 100)}
            />

            {showOptions && filtered.length > 0 && (
            <ul className="dropdown">
                {filtered.map((opt) => (
                <li key={opt} onClick={() => handleAdd(opt)}>
                    {opt}
                </li>
                ))}
            </ul>
            )}
        </div>
        </div>
    );
};

export default OptionsPicker;
