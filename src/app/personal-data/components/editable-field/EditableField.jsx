import { Check, Pencil } from 'lucide-react'; // Usando lucide-react como iconos recomendados
import React, { useState } from 'react';
import './editable-field.scss';

const EditableField = ({ label, value, onSave }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [currentValue, setCurrentValue] = useState(value);

    const handleSave = () => {
        onSave(currentValue);
        setIsEditing(false);
    };

    return (
        <div className='editable-field'>
            <label>{label}</label>
            {isEditing ? (
                <div className='edit-mode'>
                    <input
                        type="text"
                        value={currentValue}
                        onChange={(e) => setCurrentValue(e.target.value)}
                    />
                    <Check className='icon check' onClick={handleSave} />
                </div>
            ) : (
                <div className='display-mode'>
                    <span>{value || 'Sin información'}</span>
                    <Pencil className='icon pencil' onClick={() => setIsEditing(true)} />
                </div>
            )}
        </div>
    );
};

export default EditableField;
