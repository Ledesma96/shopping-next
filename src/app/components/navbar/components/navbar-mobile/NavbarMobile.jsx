import Image from "next/image";
import { Menu, Profile } from "./components";
import './navbarMobile.scss';
import { Cart, Search } from "../shared";

const NavbarMobile = () => {
    return (
        <nav className="navbar-mobile">
            <div className="container-logo">
                <Image
                    src="/logo.png"
                    alt="Mercado Libre Logo"
                    fill
                />
            </div>
            <Search />
            <div className="header-actions">
                <Cart />
                <Menu />
                {/* <Profile /> */}
            </div>
        </nav>
    )
}

export default NavbarMobile