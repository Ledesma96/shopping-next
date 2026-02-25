import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUser } from '../store/userSlice';

const AuthLoader = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchUserData = async() => {
            const user = dispatch(fetchUser());
            console.log("auth", user);
            
        }
        fetchUserData();
    }, [])
    return (
        <></>
    )
}

export default AuthLoader