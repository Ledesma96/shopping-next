import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

import authReducer from "./authSlice";
import cartReducer from "./cartSlice";

// Config persistencia SOLO para el carrito
const persistConfig = {
    key: "root",
    storage,
    whitelist: ["cart"],
};

const appReducer = combineReducers({
    auth: authReducer,
    cart: cartReducer,
});

// 🔥 Si se dispara logout, limpia el storage del carrito
const rootReducer = (state, action) => {
    if (action.type === "auth/logout") {
        // borra datos persistidos del carrito
        storage.removeItem("persist:root");
        state = null;
    }
    return appReducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
        serializableCheck: false, // necesario para redux-persist
        }),
});

export const persistor = persistStore(store);
