import { combineReducers } from "@reduxjs/toolkit";
import { AdminSlice } from "../Slices/admin.slice";


export const reducers = combineReducers({
    admin: AdminSlice.reducer,
})
// loader:,
// token:,
// user:,