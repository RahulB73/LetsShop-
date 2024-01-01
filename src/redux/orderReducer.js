import { createSlice } from "@reduxjs/toolkit";

export const OrderSlice = createSlice({
    name: "order",
    initialState: {
        orders: [],
        isFetching: false,
        error: false,
    },
    reducers: {
        //Add Order
        addOrderStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        addOrderSuccess: (state, action) => {
            state.isFetching = false;
            state.orders.push(action.payload);
        },
        addOrderFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
    },
});

export const {
    addOrderStart,
    addOrderSuccess,
    addOrderFailure,
} = OrderSlice.actions;

export default OrderSlice.reducer;