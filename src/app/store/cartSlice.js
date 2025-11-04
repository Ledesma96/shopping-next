import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    totalPrice: 0,
    totalItems: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;
            const existing = state.items.find(i => i._id === item._id);

            if (existing) {
                existing.quantity += item.quantity || 1;
            } else {
                state.items.push({ ...item, quantity: item.quantity || 1 });
            }

            state.totalItems = state.items.reduce((acc, i) => acc + i.quantity, 0);
            state.totalPrice = state.items.reduce(
                (acc, i) => acc + i.price * i.quantity,
                0
            );
        },

        deleteFromCart: (state, action) => {
            const id = action.payload;
            state.items = state.items.filter(i => i._id !== id);

            state.totalItems = state.items.reduce((acc, i) => acc + i.quantity, 0);
            state.totalPrice = state.items.reduce(
                (acc, i) => acc + i.price * i.quantity,
                0
            );
        },

        clearCart: (state) => {
            state.items = [];
            state.totalPrice = 0;
            state.totalItems = 0;
        },
    },
});

export const { addToCart, deleteFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
