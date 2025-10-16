import Image from "next/image";
import { Menu, Profile } from "./components";
import './navbarMobile.scss';
import Search from "../shared/Search";

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
                <Menu />
                <Profile />
            </div>
        </nav>
    )
}

export default NavbarMobile