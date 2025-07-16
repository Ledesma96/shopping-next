'use client'
import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import './gallery.scss';


const Gallery = ({images}) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleRize = () => {
        setWindowWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleRize)

        return() => {
        window.removeEventListener('resize', handleRize)
        }
    },[])

    const renderImages = images.map((img) => ({
        original: img,
        thumbnail: img,
    }));
    return (
        <ImageGallery   items={renderImages}
                        showPlayButton={false}
                        showFullscreenButton={true}
                        showBullets={true}
                        showThumbnails={windowWidth > 1023 ? true  : false}
                        disableThumbnailScroll={true}
                        thumbnailPosition="left"
                        autoPlay={false}
                        renderLeftNav={(onClick, disabled) => (
                            <FaChevronLeft size={24} onClick={onClick}/>
                        )}
                        renderRightNav={(onClick, disabled) => (
                            <FaChevronRight  size={24} onClick={onClick}/>
                        )}/>
    )
}

export default Gallery