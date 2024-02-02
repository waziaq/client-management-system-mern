import api from "../../../../services/api.tsx";
import { createAsyncThunk } from '@reduxjs/toolkit';

export const loginUser: any = createAsyncThunk(
    'auth/login',
    async (user, thunkAPI) => {
        try {
            const response = await api.post('/auth/login', user)

            if (response.data) {
                localStorage.setItem('user', JSON.stringify(response.data))
            }

            return response.data
        } catch (error: any) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.error) ||
                error.message ||
                error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
) as ReturnType<typeof loginUser>;