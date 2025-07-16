'use client'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { AnswerAndQuestion, Details, Gallery, Reviews } from './components'

export const mockProducts = [
    {
        _id: "1",
        title: "Smartphone Samsung Galaxy S21",
        description: "Descubre la comodidad y el estilo incomparables de esta remera Adidas, diseñada para acompañarte en cada momento del día. Confeccionada con materiales de alta calidad, esta prenda ofrece un ajuste suave y ligero que se adapta perfectamente a tu cuerpo, brindándote libertad de movimiento tanto en tus entrenamientos como en tus actividades cotidianas. Su diseño clásico con el emblemático logo de Adidas le da un toque moderno y deportivo, ideal para quienes buscan una combinación perfecta entre funcionalidad y moda. Además, su tejido transpirable ayuda a mantenerte fresco y seco, mientras que los acabados cuidadosamente elaborados garantizan una durabilidad excepcional, convirtiéndola en una opción imprescindible para cualquier guardarropa.",
        price: 699.99,
        stock: 12,
        images: ["/images/ADIX0108-1.jpeg"],
        categories: ["tecnologia"],
        tags: ["favoritos", "nuevo"],
        featured: true,
        salesCount: 230,
        ratingAverage: 4.6,
    },
    {
        _id: "2",
        title: "Zapatillas Nike Air Max",
        description: "Comodidad y estilo para cada paso.",
        price: 129.99,
        stock: 30,
        images: ["/images/ADIX0108-1.jpeg"],
        categories: ["ropa"],
        tags: ["favoritos"],
        salesCount: 180,
        ratingAverage: 4.8,
    },
    {
        _id: "3",
        title: "Auriculares Inalámbricos Sony WH-1000XM5",
        description: "Cancelación de ruido premium y gran sonido.",
        price: 349.99,
        stock: 7,
        images: ["/images/ADIX0108-1.jpeg"],
        categories: ["tecnologia"],
        tags: ["favoritos", "tecnologia"],
        salesCount: 310,
        ratingAverage: 4.9,
    },
    {
        _id: "4",
        title: "Cafetera Nespresso Vertuo",
        description: "Tu café favorito al instante.",
        price: 149.99,
        stock: 20,
        images: ["/images/ADIX0108-1.jpeg"],
        categories: ["hogar"],
        tags: ["ropa", "nuevo"],
        salesCount: 60,
        ratingAverage: 4.4,
    },
    {
        _id: "5",
        title: "Smart TV LG 55'' 4K UHD",
        description: "Calidad de imagen impresionante y acceso a apps.",
        price: 529.99,
        stock: 9,
        images: ["/images/ADIX0108-1.jpeg"],
        categories: ["tecnologia"],
        tags: ["mas-vendidos"],
        salesCount: 500,
        ratingAverage: 4.7,
    },
]

const page = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true)
    const params = useParams();
    const id = params.id;
    
    useEffect(()  => {
        try {
            console.log(mockProducts.filter(p => p._id === id));
            
            setProduct(mockProducts.find(p => p._id === id))
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }
    },[id])

    if(loading){
        return (
            <p>Cargando...</p>
        )
    }
    return (
        <div>
            <Gallery images={product.images}/>
            <Details product={product}/>
            <AnswerAndQuestion />
            <Reviews />
        </div>
    )
}

export default page