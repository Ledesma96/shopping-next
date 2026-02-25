import { Check, Pencil, Phone } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import './editable-field.scss';
const translate = [
    {key: 'Name', value: 'Nombre'},
    {key: 'Phone', value: 'Telefono'},
    {key: 'Address', value: 'Direccion'},
    {key: 'Email', value: 'Email'}
]
const EditableField = ({ label, value, onSave }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [currentValue, setCurrentValue] = useState(value);

    // 🔁 Sync cuando Redux actualiza
    useEffect(() => {
        setCurrentValue(value);
    }, [value]);

    const handleSave = () => {
        onSave(currentValue);
        setIsEditing(false);
    };

    const translation = (text) => {
        const result = translate.find(t => t.key === text);
        return result?.value ?? text;
    };

    return (
        <div className='editable-field'>
            <label>{translation(label)}</label>

            {isEditing ? (
                <div className='edit-mode'>
                    <input
                        type="text"
                        value={currentValue || ''}
                        onChange={(e) =>
                            setCurrentValue(
                                label === 'Telefono' ? Number(e.target.value) : e.target.value
                            )
                        }
                        autoFocus
                    />
                    <Check className='icon check' onClick={handleSave} />
                </div>
            ) : (
                <div className='display-mode'>
                    <span>{value || 'Sin información'}</span>
                    <Pencil
                        className='icon pencil'
                        onClick={() => setIsEditing(true)}
                    />
                </div>
            )}
        </div>
    );
};

export default EditableField;
