import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUser } from '../store/authSlice';

const AuthLoader = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUser())
    }, [])
    return (
        <></>
    )
}

export default AuthLoader