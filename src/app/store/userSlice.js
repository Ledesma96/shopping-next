import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import storage from "redux-persist/lib/storage";
import { loginApi, logout } from "../api/auth.api";
import { addAddressApi, deleteAddressApi, updateAddressApi } from "../api/users.api";

const api = axios.create({
    baseURL: "http://localhost:3000",
    withCredentials: true,
});

// 🔹 Obtener usuario autenticado
export const fetchUser = createAsyncThunk(
    "user/fetchUser",
    async (_, { rejectWithValue }) => {
        try {
        const response = await api.get("/api/v1/users/me");
        
        return response.data;
        } catch (error) {
        return rejectWithValue(error.response?.data || null);
        }
    }
);

export const login = createAsyncThunk(
    "user/login",
    async(data, { rejectWithValue }) => {
        try {
            const response = await loginApi(data);
            
            return response.user
        } catch (error) {
            return rejectWithValue
        }
    }
)

// 🔹 Cerrar sesión (elimina cookie en el servidor)
export const logoutUser = createAsyncThunk(
    "user/logoutUser",
    async () => {
        try {
            await logout();
            await storage.removeItem("persist:root"); // limpia storage local
            return true;
        } catch (error) {
            console.error("Error al cerrar sesión:", error);
            return false;
        }
    }
);

// 🔹 Actualizar usuario (parcial)
export const updateUser = createAsyncThunk(
    "user/updateUser",
    async (data, { rejectWithValue }) => {
        try {
            const response = await api.get("/api/v1/users/me", data);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || null);
        }
    }
);

export const addAddress = createAsyncThunk(
  'user/addAddress',
  async (addressData, { rejectWithValue }) => {
    try {
      const res = await addAddressApi(addressData)
      return res.user;
    } catch (error) {
      return rejectWithValue(
        error.response?.message || 'Error adding address'
      );
    }
  }
);

export const updateAddress = createAsyncThunk(
    'user/update-address',
    async(addressData, {rejectWithValue}) => {
        try {
            console.log(addressData)
            const res = await updateAddressApi(addressData);
            return res.user;
        } catch (error) {
            return rejectWithValue(
                error.response?.message || 'Error edit address'
            )
        }
    }
)

export const deleteAddress = createAsyncThunk(
    'user/delete-address',
    async(addressId, {rejectWithValue}) => {
        try {
            const res = await deleteAddressApi(addressId);
            return res.user;
        } catch (error) {
            return rejectWithValue(
                error.response?.message || 'Error delete address'
            )
        }
    }
)


const userSlice = createSlice({
    name: "user",
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
        })
        .addCase(updateUser.pending, (state) => {
            state.loading = true;
        })
        .addCase(updateUser.fulfilled, (state, action) => {
            state.user = action.payload;
            state.loading = false;
        })
        .addCase(updateUser.rejected, (state) => {
            state.loading = false;
        })
        .addCase(addAddress.pending, (state) => {
            state.loading = true;
        })
        .addCase(addAddress.fulfilled, (state, action) => {
            state.user = action.payload;
            state.loading = false;
        })
        .addCase(addAddress.rejected, (state) => {
            state.loading = false;
        })
        .addCase(updateAddress.pending, (state) => {
            state.loading = true;
        })
        .addCase(updateAddress.fulfilled, (state, action) => {
            state.user = action.payload;
            state.loading = false;
        })
        .addCase(updateAddress.rejected, (state) => {
            state.loading = false;
        })
        .addCase(deleteAddress.pending, (state) => {
            state.loading = true;
        })
        .addCase(deleteAddress.fulfilled, (state, action) => {
            state.user = action.payload;
            state.loading = false;
        })
        .addCase(deleteAddress.rejected, (state) => {
            state.loading = false;
        })
        .addCase(login.pending, (state) => {
            state.loading = true;
        })
        .addCase(login.fulfilled, (state, action) => {
            state.user = action.payload;
            state.loading = false;
        })
        .addCase(login.rejected, (state) => {
            state.loading = false;
        })
    },
});

export default userSlice.reducer;
