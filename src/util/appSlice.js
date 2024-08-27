import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name:"app",
    initialState:{
        ismenuopen:true,
        vidoes:null,
    },
    reducers:{
        addsidemenu:(state)=>{
            state.ismenuopen = !state.ismenuopen;
        },
        closesidemenu:(state)=>{
            state.ismenuopen = false;
        },
        addvidoes:(state,action) =>
        {
            state.vidoes = action.payload;
        }
    }
})
export const {addsidemenu,addvidoes,closesidemenu} = appSlice.actions;
export default appSlice.reducer;
