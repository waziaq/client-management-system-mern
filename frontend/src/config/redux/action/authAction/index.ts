import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../../services/api.tsx";

export const loginUser = createAsyncThunk(
    "auth/login",
    async (user, thunkAPI) => {
        try {
            const response = await api.post("/auth/login", user);
            return response.data;
        } catch (error: any) {
            if (error.response) {
                return thunkAPI.rejectWithValue(error.response.data.msg);
            }
        }
    }
)