import React from 'react';
import { FaTruckFast } from "react-icons/fa6";
import { CarouselSlider, Categories, InfoCards, ProductSection, Shipments } from './components';

const HomePage = () => {
    return (
        <>
            <CarouselSlider />
            <Shipments icon={<FaTruckFast />} text={'Envios a todo el pais'}/>
            <Categories />
            <InfoCards />
            <ProductSection title="Favoritos" find={'belleza'} />
            <ProductSection title="Accesorios para Celulares" find={'jardinería'} />
            <ProductSection title="Novedades" find={'moda'} />
        </>
    )
}

export default HomePage