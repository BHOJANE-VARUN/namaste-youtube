import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice.js";
import SearchSlice from "./SearchSlice.js";
import chatSlice from "./chatSlice.js";
const store = configureStore({
    reducer:{
        app:appSlice,
        search:SearchSlice,
        chat:chatSlice
    }
});
export default store;