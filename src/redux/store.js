import { configureStore } from "@reduxjs/toolkit";
import listSlice from "./list-slice";

const store =configureStore({
    reducer: {
        list: listSlice
    }
})


export default store;