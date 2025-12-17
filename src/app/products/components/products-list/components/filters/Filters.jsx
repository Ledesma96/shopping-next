'use client'
import React, { useEffect, useState } from 'react';
import './filters.scss';
import { BsFilterRight } from "react-icons/bs";
import { FilterOptions, Order } from './components';

const Filters = ({ filters }) => {
    const [btn, setBtn] = useState({ order: false, filters: false });
    const [order, setOrder] = useState("");
    const [selectedFilters, setSelectedFilters] = useState({});
    function useWindowSize() {
        const [windowSize, setWindowSize] = useState({
            width: undefined,
            height: undefined,
        });

        useEffect(() => {

            function handleResize() {
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
            }

            window.addEventListener("resize", handleResize);
        
            handleResize();
        
            return () => window.removeEventListener("resize", handleResize);
        }, []);
        return windowSize;
    }

    const size = useWindowSize();

    const handleClick = (command) => {
        setBtn((prev) => ({
            ...prev,
            [command]: !prev[command],
        }));
    };

    const handleChangeOrder = (e) => setOrder(e.target.value);

    const handleCheckboxChange = (key, value) => {
        setSelectedFilters((prev) => {
            const prevValues = prev[key] || [];
            const newValues = prevValues.includes(value)
                ? prevValues.filter((v) => v !== value)
                : [...prevValues, value];
            return { ...prev, [key]: newValues };
        });
    };

    return (
        <section className='filters-btn'>
            {/* BOTONES ORDENAR / FILTRAR */}
            { size <= 1024 &&
                <>
                    <button onClick={() => handleClick('order')}>Ordenar</button>
                    <button onClick={() => handleClick('filters')}>
                        <BsFilterRight />
                        <p>Filtrar</p>
                    </button>
                </>
}
            <Order
                btn={btn}
                handleClick={handleClick}
                handleChangeOrder={handleChangeOrder}
                order={order}
            />

            <FilterOptions
                btn={btn}
                filters={filters}
                handleCheckboxChange={handleCheckboxChange}
                selectedFilters={selectedFilters}
                handleClick={handleClick}
            />
        </section>
    );
};

export default Filters;
