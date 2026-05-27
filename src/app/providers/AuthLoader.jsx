import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUser } from '../store/userSlice';

const AuthLoader = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchUserData = async() => {
            const user = await dispatch(fetchUser());   
        }
        fetchUserData();
    }, [])
    return (
        <></>
    )
}

export default AuthLoader