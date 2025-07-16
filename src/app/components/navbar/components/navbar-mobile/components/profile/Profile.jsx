'use client'
import Link from 'next/link';
import { CgProfile } from "react-icons/cg";
import { FiLogIn } from "react-icons/fi"; // Ejemplo de otro icono
import { useSelector } from 'react-redux';
import './profile.scss';

const Profile = () => {
    const user = useSelector((state) => state.auth.user);
    
    return (
        <>
            {user
                ?
                    <Link href=''>
                        <CgProfile className="profile-icon" />
                    </Link>
                :
                    <Link href='/login'>
                        <FiLogIn className="profile-icon" />
                    </Link>
            }
        </>
    );
};

export default Profile;
