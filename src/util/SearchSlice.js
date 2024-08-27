import { createSlice } from "@reduxjs/toolkit";

const SearchSlice = createSlice({
    name:"search",
    initialState:{},
    reducers:{
        addSearch:(state,action)=>{
            const obj = Object.assign(state,action.payload);
            state = obj;
        }
    }
});
export const {addSearch} = SearchSlice.actions;
export default SearchSlice.reducer;