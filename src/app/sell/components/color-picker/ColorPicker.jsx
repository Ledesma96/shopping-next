'use client'
import './colorPicker.scss';

const ColorPicker = ({ colors, selected, setSelected }) => {

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
                <div
                    key={color.value}
                    className={`color-circle ${
                    selected.some(c => c.value === color.value) ? 'active' : ''
                    }`}
                    style={{ backgroundColor: color.value }}
                    onClick={() => toggleColor(color)}
                    title={color.name}
                />
                ))}
            </div>
        </div>
    );
};

export default ColorPicker;
