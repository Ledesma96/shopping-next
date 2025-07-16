// store/authSlice.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../api/api.config';

export const fetchUser = createAsyncThunk(
    'auth/fetchUser',
    async (_, { rejectWithValue }) => {
        try {
        const response = await api.get('http://localhost:3000/api/v1/users/me');
        
        return response.data;
        } catch (error) {
        return rejectWithValue(null);
        }
    }
);

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        loading: true,
    },
    reducers: {
        logout(state) {
        state.user = null;
        state.loading = false;
        },
    },
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
        });
    },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
