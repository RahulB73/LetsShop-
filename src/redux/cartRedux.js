import { createSlice } from "@reduxjs/toolkit";

const getCurrentDatePlus10Days = () => {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 10);
    return currentDate;
};

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        total: 0,
        date: { type: Date, default : getCurrentDatePlus10Days  }
    },
    reducers: {
        addProduct: (state, action) => {
            const { payload } = action;

            state.products = Array.isArray(state.products) ? state.products : [];

            const existingProductIndex = state.products.findIndex(
                (product) => product._id === payload._id
            );

            if (existingProductIndex !== -1) {
                state.products[existingProductIndex].quantity += payload.quantity;
            } else {
                state.products.push(payload);
            }

            state.quantity += payload.quantity;
            state.total += payload.price * payload.quantity;
        },

        removeProduct: (state, action) => {
            const removedProductId = action.payload;
            const updatedProducts = state.products.filter(
                (product) => product._id !== removedProductId
            );

            const removedProduct = state.products.find(
                (product) => product._id === removedProductId
            );

            if (removedProduct) {
                state.quantity -= removedProduct.quantity;
                state.total -= removedProduct.price * removedProduct.quantity;
                state.products = updatedProducts;
            }
        },

        getCartStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        getCartSuccess: (state, action) => {
            state.isFetching = false;
            state.products.splice(
                state.products.findIndex((item) => item._id === action.payload),
                1
            );
        },
        getCartFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        
    },
});

export const { addProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;