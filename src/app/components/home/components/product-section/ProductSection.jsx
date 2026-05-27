'use client'
import { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { getProducts } from "../../../../api/product.api";
import ProductCard from "../../../modules/product-card/ProductCard";
import './productSection.scss';
import { getFavorites } from "../../../../api/users.api";
import { useSelector } from "react-redux";

const ProductSection = ({ title, find }) => {
    const {user, loading} = useSelector(state => state.user)
    const [products, setProducts] = useState([]);
    const [styles, setStyles] = useState({});
    const [translate, setTranslate] = useState(0);
    const ref = useRef();

    //para obtener los productos de la db
    useEffect(() => {
      const fetchProducts = async () => {
        // 2. Si estamos buscando favoritos pero el usuario no está, ni lo intentamos
        if (find === 'favorites' && !user) {
          setProducts([]);
          return;
        }

        try {
          if (find !== 'favorites') {
            const result = await getProducts({ category: find });
            setProducts(result?.products || []);
          } else {
            // Ya sabemos que user existe por el check de arriba
            const result = await getFavorites();
            console.log(result);
            
            setProducts(result?.data?.favorites || []);
          }
        } catch (error) {
          console.error("Error en la petición:", error);
          setProducts([]);
        }
      };

      // 3. Solo ejecutamos si no estamos en un proceso de "loading" de auth
      if (!loading) {
        fetchProducts();
      }
    }, [find, user, loading]);
    

    useEffect(() => {
        if (products.length > 0) {
            setStyles({
                width: `${products.length * 200}px`
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
      
      if (newTranslate >= maxTranslate) {
        setTranslate(maxTranslate);
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
    };
    return (
      <>
        {products.length > 0 &&
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
        </section>}
      </>
    )
}
export default ProductSection