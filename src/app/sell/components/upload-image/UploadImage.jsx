'use client'
import React, { useState } from 'react';
import './uploadImage.scss';

const UploadImage = ({ onImageSelected }) => {
    const [preview, setPreview] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        setPreview(URL.createObjectURL(file));
        onImageSelected(file);
    };

    return (
        <div className='upload-image'>
            <label htmlFor="fileInput" className="upload-label">
                {preview ? (
                    <img src={preview} alt="Previsualización" className='preview-image' />
                ) : (
                    <span>Subir imagen</span>
                )}
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
