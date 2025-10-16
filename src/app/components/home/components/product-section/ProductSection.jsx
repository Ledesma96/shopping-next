'use client'
import { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { getProducts } from "../../../../api/product.api";
import ProductCard from "../../../modules/product-card/ProductCard";
import './productSection.scss';

const ProductSection = ({ title, find }) => {
    const [products, setProducts] = useState([]);
    const [styles, setStyles] = useState({});
    const [translate, setTranslate] = useState(0);
    const ref = useRef();

    useEffect(() => {
      const fetchProducts = async() => {
        const result = await getProducts(find);
        setProducts(result.products)
      }
      fetchProducts()
    }, [])

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