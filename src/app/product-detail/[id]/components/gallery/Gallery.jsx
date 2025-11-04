'use client'
import { useEffect, useState } from "react";
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import './gallery.scss';

const Gallery = ({ images }) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const renderImages = images.map((img) => ({
        original: img,
        thumbnail: img,
    }));

    return (
        <ImageGallery
        bulletClass='bullets'
        items={renderImages}
        showPlayButton={false}
        showFullscreenButton={true}
        showBullets={true}
        showThumbnails={windowWidth > 1023}
        disableThumbnailScroll={true}
        thumbnailPosition="left"
        autoPlay={false}
        startIndex={0}
        onSlide={(index) => setCurrentIndex(index)} // ← actualiza el índice
        renderLeftNav={(onClick, disabled) => (
            <div className='left'>
            <FaLongArrowAltLeft size={30} onClick={onClick} />
            </div>
        )}
        renderRightNav={(onClick, disabled) => (
            <div className="right">
            <FaLongArrowAltRight size={30} onClick={onClick} />
            </div>
        )}
        renderCustomControls={() => (
            <div className="image-counter">
                <p className="position"> {currentIndex + 1}</p>
                <span>/</span>
                <p className="count-images"> {images.length}</p>
            </div>
        )}
        />
    );
};

export default Gallery;
