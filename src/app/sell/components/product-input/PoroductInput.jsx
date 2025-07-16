import React from 'react';
import './product-input.scss';

const ProductInput = ({ type, name, value, placeholder, onChange, ...rest }) => {
    const handleInputChange = (e) => {
        onChange(name, e.target.value);
    };

    if (type === 'textarea') {
        return (
            <textarea
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={handleInputChange}
                {...rest}
            />
        );
    }

    return (
        <input
            type={type}
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={handleInputChange}
            {...rest}
        />
    );
};

export default ProductInput;
