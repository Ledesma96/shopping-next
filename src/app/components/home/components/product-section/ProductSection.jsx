'use client'
import { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import ProductCard from "../../../modules/product-card/ProductCard";
import './productSection.scss';
export const mockProducts = [
    {
      _id: "1",
      title: "Smartphone Samsung Galaxy S21",
      description: "Potente y elegante, ideal para el día a día.",
      price: 699.99,
      stock: 12,
      images: ["https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwaeb93322/products/ADIX0108/ADIX0108-1.JPG"],
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
      images: ["https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/4a3d71f1-556d-4dc7-b00f-f84f67a9c198/air-max-90-mens-shoes-B5Cnkz.png"],
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
      images: ["https://m.media-amazon.com/images/I/61zKGcoy35L._AC_SL1500_.jpg"],
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
      images: ["https://m.media-amazon.com/images/I/71uDg3qFKEL._AC_SL1500_.jpg"],
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
      images: ["https://www.lg.com/es/images/televisores/md08023646/gallery/medium01.jpg"],
      categories: ["tecnologia"],
      tags: ["mas-vendidos"],
      salesCount: 500,
      ratingAverage: 4.7,
    },
    {
      _id: "1",
      title: "Smartphone Samsung Galaxy S21",
      description: "Potente y elegante, ideal para el día a día.",
      price: 699.99,
      stock: 12,
      images: ["https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwaeb93322/products/ADIX0108/ADIX0108-1.JPG"],
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
      images: ["https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/4a3d71f1-556d-4dc7-b00f-f84f67a9c198/air-max-90-mens-shoes-B5Cnkz.png"],
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
      images: ["https://m.media-amazon.com/images/I/61zKGcoy35L._AC_SL1500_.jpg"],
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
      images: ["https://m.media-amazon.com/images/I/71uDg3qFKEL._AC_SL1500_.jpg"],
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
      images: ["https://www.lg.com/es/images/televisores/md08023646/gallery/medium01.jpg"],
      categories: ["tecnologia"],
      tags: ["mas-vendidos"],
      salesCount: 500,
      ratingAverage: 4.7,
    },
    {
      _id: "1",
      title: "Smartphone Samsung Galaxy S21",
      description: "Potente y elegante, ideal para el día a día.",
      price: 699.99,
      stock: 12,
      images: ["https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwaeb93322/products/ADIX0108/ADIX0108-1.JPG"],
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
      images: ["https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/4a3d71f1-556d-4dc7-b00f-f84f67a9c198/air-max-90-mens-shoes-B5Cnkz.png"],
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
      images: ["https://m.media-amazon.com/images/I/61zKGcoy35L._AC_SL1500_.jpg"],
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
      images: ["https://m.media-amazon.com/images/I/71uDg3qFKEL._AC_SL1500_.jpg"],
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
      images: ["https://www.lg.com/es/images/televisores/md08023646/gallery/medium01.jpg"],
      categories: ["tecnologia"],
      tags: ["mas-vendidos"],
      salesCount: 500,
      ratingAverage: 4.7,
    },
  ];
  
const ProductSection = ({ title, find }) => {
    const [products, setProducts] = useState([]);
    const [styles, setStyles] = useState({});
    const [translate, setTranslate] = useState(0);
    const ref = useRef();
    
    useEffect(() => {
        const filtered = mockProducts.filter(p => p.tags.includes(find));
        setProducts(filtered);
    }, []);

    useEffect(() => {
        if (products.length > 0) {
            setStyles({
                width: `${products.length * 286}px`
            });
        }
    }, [products]);

    const onNext = () => {
      const container = ref.current;
      if (!container) return;
      
      const containerWidth = container.clientWidth;
      const totalWidth = container.scrollWidth;
      const maxTranslate = totalWidth - containerWidth;
      const newTranslate = translate + window.innerWidth * 0.9;
      console.log(totalWidth, containerWidth);
      
      if (newTranslate >= maxTranslate) {
        setTranslate(maxTranslate); // stop at end
      } else {
        setTranslate(newTranslate);
      }
      setStyles(
        {...styles,
        transform: 'translateX(`${translate}`)',
        transition: 'all 0.3s ease-in-out'},
      )
    };
  
    const onPrev = () => {
      const newTranslate = translate - window.innerWidth * 0.9; // go back 90vw
      if (newTranslate <= 0) {
        setTranslate(0); // stop at start
      } else {
        setTranslate(newTranslate);
      }
      console.log(translate);
      
    };
    return (
        <section className="product-section" ref={ref}>
          <div className="product-section__header">
              <h2 className="product-section__title">{title}</h2>
              <a href="#" className="product-section__see-all">Ver todo</a>
          </div>
            
          <div className="product-section__flex"
            style={{
              ...styles,
              transform: `translateX(-${translate}px)`,
            }}
          >
            {products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>

          <button className="slider-arrows__btn left" onClick={onPrev}>
            <FaChevronLeft size={24} />
          </button>
          <button className="slider-arrows__btn right" onClick={onNext}>
            <FaChevronRight  size={24} />
          </button>
        </section>
    );
}
export default ProductSection