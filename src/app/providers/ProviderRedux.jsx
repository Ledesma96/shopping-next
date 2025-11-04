'use client'
import React from 'react';
import { Provider } from 'react-redux';
import { persistor, store } from "../store";
import AuthLoader from './AuthLoader';
import { PersistGate } from 'redux-persist/integration/react';


const ProviderRedux = ({children}) => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <AuthLoader />
                {children}
            </PersistGate>
        </Provider>
    )
}

export default ProviderRedux