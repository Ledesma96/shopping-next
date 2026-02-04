import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import storage from "redux-persist/lib/storage";
import { logout } from "../api/auth.api";

const api = axios.create({
    baseURL: "http://localhost:3000",
    withCredentials: true,
});

// 🔹 Obtener usuario autenticado
export const fetchUser = createAsyncThunk(
    "auth/fetchUser",
    async (_, { rejectWithValue }) => {
        try {
        const response = await api.get("/api/v1/users/me");
        return response.data;
        } catch (error) {
        return rejectWithValue(error.response?.data || null);
        }
    }
);

// 🔹 Cerrar sesión (elimina cookie en el servidor)
export const logoutUser = createAsyncThunk("auth/logoutUser", async () => {
    try {
        await logout();
        await storage.removeItem("persist:root"); // limpia storage local
        return true;
    } catch (error) {
        console.error("Error al cerrar sesión:", error);
        return false;
    }
});

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        loading: true,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchUser.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchUser.fulfilled, (state, action) => {
            state.user = action.payload;
            state.loading = false;
        })
        .addCase(fetchUser.rejected, (state) => {
            state.user = null;
            state.loading = false;
        })
        // 🔹 Manejo del logout
        .addCase(logoutUser.fulfilled, (state) => {
            console.log(state);
            
            state.user = null;
            state.loading = false;
        });
    },
});

export default authSlice.reducer;
