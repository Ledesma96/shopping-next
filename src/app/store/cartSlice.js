import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { 
    getAcitveCartApi, 
    addOrUpdateCartApi, 
    deleteCartApi, 
    removeItemApi
} from "../api/cart.api"; // Ajusta la ruta a tu archivo de API

// --- THUNKS (Acciones Asíncronas) ---

// Traer el carrito activo al iniciar sesión o refrescar
export const fetchActiveCart = createAsyncThunk(
    "cart/fetchActive",
    async (_, { rejectWithValue }) => {
        try {
            console.log('hola');
            
            return await getAcitveCartApi();
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

// Agregar o actualizar (Sincronizado con DB)
export const addOrUpdateCartAsync = createAsyncThunk(
    "cart/addOrUpdate",
    async (productData, { rejectWithValue }) => {
        try {
            // productData debe ser el DTO: { productId, sellerId, quantity, priceAtAddition }
            return await addOrUpdateCartApi(productData);
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const clearCartAsync = createAsyncThunk(
    "cart/clearCart",
    async (cartId, { rejectWithValue }) => {
        try {
            await deleteCartApi(cartId);
        
            return []; 
        } catch (error) {
            return rejectWithValue(error.response?.data || "Error al eliminar");
        }
    }
);

export const removeItemCartAync = createAsyncThunk(
    "cart/delete-item",
    async(cartId, { rejectWithValue }) => {
        try {
            return await removeItemApi(cartId);
        } catch (error) {
            return rejectWithValue(error.response?.data || "Error al eliminar item")
        }
    }
)

// --- SLICE ---

const initialState = {
    _id: null,
    items: [],
    totalPrice: 0,
    totalItems: 0,
    loading: false,
    error: null,
};

// Función auxiliar para recalcular totales basándose en el array de productos
const calculateTotals = (state) => {
    state.totalItems = state.items.reduce((acc, i) => acc + i.quantity, 0);
    state.totalPrice = state.items.reduce((acc, i) => {
        // Manejamos si el producto viene populado (i.productId.price) o plano (i.price)
        const price = i.productId?.price || i.price || 0;
        return acc + price * i.quantity;
    }, 0);
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        // Mantengo estos para uso OFFLINE o antes del login
        setLocalCart: (state, action) => {
            state.items = action.payload;
            calculateTotals(state);
        },
        clearCartLocal: (state) => {
            _id;
            state.items = [];
            state.totalPrice = 0;
            state.totalItems = 0;
        },
    },
    extraReducers: (builder) => {
        builder
            // Al traer el carrito del servidor
            .addCase(fetchActiveCart.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchActiveCart.fulfilled, (state, action) => {
                state.loading = false;
                state._id = action.payload._id;
                // NestJS devuelve el CartDocument, los productos están en .products
                state.items = action.payload.products || [];
                calculateTotals(state);
            })
            
            // Al agregar/actualizar producto
            .addCase(addOrUpdateCartAsync.pending, (state) => {
                state.loading = true;
            })
            .addCase(addOrUpdateCartAsync.fulfilled, (state, action) => {
                state.loading = false;
                state._id = action.payload._id;
                state.items = action.payload.products || [];
                calculateTotals(state);
            })
            .addCase(addOrUpdateCartAsync.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            //eliminar carrito
            .addCase(clearCartAsync.pending, (state) => {
                state.loading = true;
            })
            .addCase(clearCartAsync.fulfilled, (state, action) => {
                state._id = null;
                state.items = [];
                state.totalPrice = 0;
                state.totalItems = 0;
                state.loading = false;
            })
            .addCase(clearCartAsync.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            //eliminar item
            .addCase(removeItemCartAync.pending, (state) => {
                state.loading = true;
            })
            .addCase(removeItemCartAync.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload.products || [];
                calculateTotals(state);
            })
            .addCase(removeItemCartAync.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { setLocalCart, clearCartLocal } = cartSlice.actions;
export default cartSlice.reducer;