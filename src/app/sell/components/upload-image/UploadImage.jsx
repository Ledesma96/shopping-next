'use client'
import React from 'react';
import './uploadImage.scss';

const UploadImage = ({ images, setImages }) => {
    
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        // Añadimos el nuevo archivo al estado
        setImages(prevImages => [...prevImages, file]);
    };

    return (
        <div className='upload-image'>
            {/* Previsualización de imágenes usando URL.createObjectURL */}
            {images.map((img, index) => (
                <div key={index} className="image-wrapper">
                    <img
                        src={URL.createObjectURL(img)}
                        alt={`imagen-${index}`}
                        className='preview-image'
                    />
                </div>
            ))}

            <label htmlFor="fileInput" className="upload-label add-more">
                <span>+</span>
            </label>

            <input
                type="file"
                id="fileInput"
                accept="image/*"
                onChange={handleFileChange}
                style={{ display: 'none' }}
            />
        </div>
    );
};

export default UploadImage;

