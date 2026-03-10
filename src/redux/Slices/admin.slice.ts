import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  temporaryRole: "",
  adminData: null,
};

export const AdminSlice = createSlice({
  name: "admin",
  initialState,

  reducers: {
    setToken: (state, param) => {
      const { payload } = param;
      state.token = payload;
    },
    setTemporaryRole: (state, param) => {
      const { payload } = param;
      state.temporaryRole = payload;
    },
    setAdminData: (state, param) => {
      const { payload } = param;
      state.adminData = payload;
    },
    logoutAdmin: () => initialState,
  },
});

export const { setToken, logoutAdmin, setAdminData, setTemporaryRole } =
  AdminSlice.actions;
