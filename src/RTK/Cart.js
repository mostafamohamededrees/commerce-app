// src/features/cart/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Action to add item to cart or increase quantity
    addToCart: (state, action) => {
      const existingIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingIndex >= 0) {
        state.items[existingIndex].qty += 1;
      } else {
        state.items.push({ ...action.payload, qty: 1 });
      }
    },

    // Action to decrease item quantity or remove it if qty is 1
    decreaseQty: (state, action) => {
      const index = state.items.findIndex((item) => item.id === action.payload);

      if (state.items[index].qty === 1) {
        state.items.splice(index, 1);
      } else {
        state.items[index].qty -= 1;
      }
    },
    deleteCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

// Export actions
export const { addToCart, decreaseQty, deleteCart } = cartSlice.actions;

// Export reducer
export default cartSlice.reducer;
