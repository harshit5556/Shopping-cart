import { createSlice } from "@reduxjs/toolkit";
//creat slice
export const CartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        // two function are add
        //reducer function ke andar {state , action } hota hai

        add:(state,action) => {
            // jo bhi action parameter diya hai use action.payload 
            state.push(action.payload);
        },
        // filter wale function ke through ham remove kar skte hai
        // single value or multiple value acces karna chate to action.payload se kar skte hai
        remove:(state,action) => {
            return state.filter((item)=> item.id !== action.payload);
        },
    }

});

export const {add,remove} = CartSlice.actions;
export default CartSlice.reducer;