import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

import userReducer from "./userSlice";
import cartReducer from "./cartSlice";

// Config persistencia SOLO para el carrito
const persistConfig = {
    key: "root",
    storage,
    whitelist: ["cart", "user"],
};

const appReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
});

// 🔥 Si se dispara logout, limpia el storage del carrito
const rootReducer = (state, action) => {
    if (action.type === "user/logoutUser") {
        // borra datos persistidos del carrito
        storage.removeItem("persist:root");
        state = undefined;
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
