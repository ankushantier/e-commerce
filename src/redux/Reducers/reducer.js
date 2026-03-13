import { combineReducers } from "@reduxjs/toolkit";
import { AdminSlice } from "../Slices/admin.slice";
import { UserSlice } from "../Slices/user.Slice";


export const reducers = combineReducers({
    admin: AdminSlice.reducer,
    users:UserSlice.reducer
})
// loader:,
// token:,
// user:,