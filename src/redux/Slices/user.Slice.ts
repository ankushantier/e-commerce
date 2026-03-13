import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalUser: "",
};

export const UserSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    setTotalUserCount: (state, param) => {
      const { payload } = param;
      state.totalUser = payload;
    },
  },
});

export const { setTotalUserCount } = UserSlice.actions;
