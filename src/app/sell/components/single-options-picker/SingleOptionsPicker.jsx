'use client'
import React, { useState } from 'react';
import './singleOptionsPicker.scss';

const SingleOptionsPicker = ({ title, value, setValue, options = [] }) => {
    const [input, setInput] = useState('');
    const [showOptions, setShowOptions] = useState(false);

    const filtered = options.filter(
        (opt) =>
        opt.toLowerCase().includes(input.toLowerCase()) &&
        opt !== value
    );

    const handleSelect = (opt) => {
        setValue(opt);
        setInput('');
        setShowOptions(false);
    };

    const handleClear = () => {
        setValue('');
    };

    return (
        <div className="single-option-picker">
            <label>{title}</label>

            {/* Valor seleccionado */}
            {value && (
                <div className="selected-single">
                    <span>{value}</span>
                    <button type="button" onClick={handleClear}>×</button>
                </div>
            )}

            {/* Input */}
            <div className="input-container">
                <input
                    type="text"
                    placeholder={`Seleccionar ${title.toLowerCase()}...`}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onFocus={() => setShowOptions(true)}
                    onBlur={() => setTimeout(() => setShowOptions(false), 100)}
                    disabled={!!value}
                />

                {showOptions && filtered.length > 0 && (
                <ul className="dropdown">
                    {filtered.map((opt) => (
                    <li key={opt} onClick={() => handleSelect(opt)}>
                        {opt}
                    </li>
                    ))}
                </ul>
                )}
            </div>
        </div>
    );
};

export default SingleOptionsPicker;
