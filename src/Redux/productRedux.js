import { createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
    name:"product",
    initialState:{
        products:[],
        isFetching:false,
        error:false
    },
    reducers:{
        //get all.
        getProductStart:(state)=> {
            state.isFetching = true;
        },
        getProductSuccess:(state , action)=> {
            state.isFetching = false;
            state.products = action.payload;
        },
        getProductFailure:(state)=> {
            state.isFetching = false;
            state.error = true;
        },
        //DELETE
        deleteProductStart:(state)=> {
            state.isFetching = true;
        },
        deleteProductSuccess:(state , action)=> {
            state.isFetching = false;
            state.products.splice(state.products.findIndex((item)=>item._id === action.payload),1);
        },
        deleteProductFailure:(state)=> {
            state.isFetching = false;
            state.error = true;
        }
    }
});

export const { getProductStart , getProductSuccess , getProductFailure, deleteProductStart , deleteProductSuccess , deleteProductFailure } =ProductSlice.actions;
export default ProductSlice.reducer;