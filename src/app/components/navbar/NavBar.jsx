'use client'
import { useEffect, useState } from "react";
import { NavbarDesktop, NavbarMobile } from "./components"

const NavBar = () => {
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
    return (
        <>
            {size.width >= 1024 ? <NavbarDesktop/> : <NavbarMobile/>}
        </>
    )
}

export default NavBar