import {createSlice} from "@reduxjs/toolkit";
import {loginUser} from "../../action/authAction";

// Get user from localStorage
const user = JSON.parse(localStorage.getItem('user') as string) || null;

const initialState = {
    user: user ? user : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
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
                state.isLoading = true;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload as string;
                state.user = null as any;
            })
    }
});

export const {reset} = authSlice.actions;
export default authSlice.reducer;