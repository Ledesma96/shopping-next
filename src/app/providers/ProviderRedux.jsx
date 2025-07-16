'use client'
import React from 'react';
import { Provider } from 'react-redux';
import { store } from "../store";
import AuthLoader from './AuthLoader';


const ProviderRedux = ({children}) => {
    return (
        <Provider store={store}>
            <AuthLoader />
            {children}
        </Provider>
    )
}

export default ProviderRedux