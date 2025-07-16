import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { FaCartPlus } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { GoHome } from "react-icons/go";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";
import './options.scss';

const Options = ({open, handleClick}) => {
    // const user = useSelector((state) => state.auth.user);
    const user = {
        avatar: '',
        name: 'Pepito'
    }
    const capitalLater = (charter) => {
        return charter.toUpperCase()
    }
    
    return (
        <div className={`${open ? 'options-on' : 'options-off'} blur`}>
            {user?.name &&
            <div className="container-user">
                <div className="avatar">
                    {user.avatar ?
                        <Image src={user.avatar} fill alt="image profile"/>
                        :
                        <p className="initial">{capitalLater(user.name[0])}</p>
                    }
                </div>
                <div className="container-name">
                    <p>Hola {user.name}</p>
                    <Link href='/profile'>
                        <p>&gt; Mi perfil</p>
                    </Link>
                </div>
            </div>
            }
            <div className="container-options">
                <div>
                    <Link href="/" onClick={handleClick}>
                        <GoHome />
                        <p>Inicio</p>
                    </Link>
                </div>
                {user &&
                    <div>
                        <Link href="" onClick={handleClick}>
                            <MdOutlineFavoriteBorder />
                            <p>Favoritos</p>
                        </Link>
                    </div>
                }
                {user &&
                    <div>
                        <Link href="/account" onClick={handleClick}>
                            <CgProfile/>
                            <p>Mi cuenta</p>
                        </Link>
                    </div>
                }
                {user &&
                    <div>
                        <Link href="/my-purchases" onClick={handleClick}>
                            <AiOutlineShopping />
                            <p>Mis compras</p>
                        </Link>
                    </div>
                }
                <div>
                    <Link href="" onClick={handleClick}>
                        <RiCustomerService2Fill />
                        <p>Ayuda</p>
                    </Link>
                </div>
                {user &&
                    <div>
                        <Link href="/sell" onClick={handleClick}>
                            <FaCartPlus size={24}/>
                            <p>Vender</p>
                        </Link>
                    </div>
                }
                {!user &&
                    <div>
                        <Link href="" onClick={handleClick}>
                            <FiLogIn  size={24}/>
                            <p>Iniciar sesion</p>
                        </Link>
                    </div>
                }
            </div>
        </div>
    )
}

export default Options