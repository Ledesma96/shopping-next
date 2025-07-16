import React from 'react';
import { FaTruckFast } from "react-icons/fa6";
import { CarouselSlider, Categories, ProductSection, Shipments } from './components';

const HomePage = () => {
    return (
        <>
            <CarouselSlider />
            <Shipments icon={<FaTruckFast />} text={'Envios a todo el pais'}/>
            <Categories />
            <ProductSection title="Favoritos" find={'favoritos'} />
            <ProductSection title="Más vendidos" find={'tecnologia'} />
            <ProductSection title="Novedades" find={'ropa'} />
        </>
    )
}

export default HomePage