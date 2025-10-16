import React, { useRef, useState } from 'react'
import Price from './components/price/Price'
import { IoIosArrowDown } from "react-icons/io";
import './filterOptions.scss'

const FilterOptions = ({btn, filters, handleCheckboxChange, selectedFilters, handleClick}) => {
    const [accordion, setAccordion] = useState({});
    const [styles, setStyles] = useState({});
    const refs = useRef([]);

    const toggleAccordion = (index) => {
        setAccordion((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));

        if (refs.current[index]) {
            const contentHeight = refs.current[index].scrollHeight;
            setStyles((prev) => ({
                ...prev,
                [index]: accordion[index] ? "0px" : `${contentHeight}px`
            }));
            console.log(styles);
            
        }
    };

    return (
        <aside className={`${btn.filters ? 'filters-on' : 'filters-off'} filters`}>
            <button className='close' onClick={() => handleClick('filters')}>X</button>
            {filters.map((filter, i) => (
                <div key={filter.key} className="filter-group">
                    <div className='header' onClick={() => toggleAccordion(i)}>
                        <h4 className="filter-title">{filter.key}</h4>
                        <IoIosArrowDown className={accordion[i] ? "up" : "down"}/>
                    </div>
                    <div
                        className="accordion-content"
                        ref={(el) => (refs.current[i] = el)}
                        style={{
                            maxHeight: styles[i] || "0px",
                            overflow: "hidden",
                            transition: "max-height 0.3s ease",
                        }}
                    >
                        {filter.values.map((value) => (
                            <label key={value} className="filter-option">
                                <input
                                    type="checkbox"
                                    checked={selectedFilters[filter.key]?.includes(value) || false}
                                    onChange={() => handleCheckboxChange(filter.key, value)}
                                />
                                {value.toString()}
                            </label>
                        ))}
                    </div>
                </div>
            ))}
            <Price
                min={0}
                max={5000}
                step={50}
                onChange={(range) => console.log("Nuevo rango:", range)}
            />
            <button className='clean-btn'>Limpiar</button>
        </aside>
    )
}

export default FilterOptions