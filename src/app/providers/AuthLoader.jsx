import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUser } from '../store/authSlice';

const AuthLoader = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchUserData = async() => {
            const user = await dispatch(fetchUser());
            console.log(user);
        }
        fetchUserData();
    }, [])
    return (
        <></>
    )
}

export default AuthLoader