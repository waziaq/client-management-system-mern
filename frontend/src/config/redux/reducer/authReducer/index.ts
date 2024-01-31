import { createSlice } from "@reduxjs/toolkit";
import {loginUser} from "../../action/authAction";

const initialState = {
    isAuthenticated: false,
    token: "",
    user: {}
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        reset: () => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.isAuthenticated = false;
                state.token = "";
                state.user = {};
            })
    }
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;