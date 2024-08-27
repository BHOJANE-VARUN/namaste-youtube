import { createSlice } from "@reduxjs/toolkit";

const chatSlice  = createSlice({
        name:"chat",
        initialState:{
            message:[]
        },
        reducers:{
            addchat:(state,action)=>{
                state.message.splice(10,1);
                state.message.unshift(action.payload);
            }
        }
});
export const {addchat} = chatSlice.actions;
export default chatSlice.reducer;