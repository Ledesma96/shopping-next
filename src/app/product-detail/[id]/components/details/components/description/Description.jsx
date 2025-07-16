'use client'
import { useEffect, useRef, useState } from "react";
import './description.scss';

const Description = ({ product }) => {
    const [accordion, setAccordion] = useState(false);
    const [height, setHeight] = useState(45);
    const ref = useRef(null);

    const handleAccordion = () => {
        setAccordion(prev => !prev);
    };

    useEffect(() => {
        if (ref.current) {
            if (accordion) {
                // Cuando se abre, fijar el alto al alto total del contenido
                setHeight(45 + ref.current.scrollHeight);
            } else {
                // Cuando se cierra, fijar el alto base (35px)
                setHeight(45);
            }
        }
    }, [accordion]);

    return (
        <section
            className="container-description"
            style={{ height: `${height}px`, transition: 'height 0.3s ease' }}
        >
            <div className="container-description__header" onClick={handleAccordion}>
                <p>{accordion ? '-' : '+'}</p>
                <p>Descripción</p>
            </div>
            <div className="container-description__body" ref={ref}>
                <p>{product.description}</p>
            </div>
        </section>
    );
};

export default Description;
