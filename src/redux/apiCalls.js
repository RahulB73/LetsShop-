import { publicRequest } from "../requistMethod";
import { loginFailure, loginStart, loginSuccess, updateUserstart, updateUsersuccess, updateUsersFailure, logout, addUserStart, addUserSuccess, addUserFailure } from "./userReducer";
import { userRequest } from "../requistMethod";
import {
     addOrderStart,
     addOrderSuccess,
     addOrderFailure
  } from "./orderReducer";

export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await publicRequest.post("/auth/login", user);
        dispatch(loginSuccess(res.data));
    } catch (err) {
        dispatch(loginFailure());
    }
}


// Updating New User
export const updateUser = async (Id, inputs, dispatch) => {
    dispatch(updateUserstart());
    try {
        const res = await userRequest.put(`/users/${Id}`, inputs);
        dispatch(updateUsersuccess(res.data));
    } catch (err) {
        dispatch(updateUsersFailure());
    }
};

export const addUser = async (inputs, dispatch) => {
    dispatch(addUserStart());
    try {
        const res = await userRequest.post(`/users`, inputs);
        dispatch(addUserSuccess(res.data));
    } catch (err) {
        dispatch(addUserFailure());
    }
};

export const signOutUser = async (inputs, dispatch) => {
    dispatch(logout(inputs));
};


// Add Order
export const addOrder = async (order, dispatch) => {
    dispatch(addOrderStart());
    try {
        const res = await userRequest.post(`/order/create`, order);
        dispatch(addOrderSuccess(res.data));
    } catch (err) {
        dispatch(addOrderFailure());
    }
};


// // Get User Cart
// export const getCart = async (userId, dispatch) => {
//     dispatch(getCartStart());
//     try {
//       const response = await userRequest.get(`/cart/find/${userId}`, userId);
//       const data = await response.json();
//       console.log(data);
//       dispatch(getCartSuccess(data));
//     } catch (error) {
//       console.error('Error fetching cart:', error);
//       dispatch(getCartFailure());
//     }
//   };

//   // Delete Cart
//   export const deleteCart = async (id, dispatch) => {
//     dispatch(deleteCartStart());
//     try {
//       await userRequest.delete(`/cart/${id}`);
//       dispatch(deleteCartSuccess(id));
//     } catch (err) {
//       dispatch(deleteCartFailure());
//     }
//   };

//  //   Create Cart 
//   export const addCart = async (cart, dispatch) => {
//     console.log(cart)
//     dispatch(addCartStart());
//     try {
//       const res = await userRequest.post(`/cart`, cart);
//       dispatch(addCartSuccess(res.data));
//     } catch (err) {
//         console.log(err)
//       dispatch(addCartFailure());
//     }
//   };
  
