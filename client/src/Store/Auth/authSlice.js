import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authServic from './authService';

const user = JSON.parse(localStorage.getItem('user'));

const initialState = {
    user: user ? user : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

export const registration = createAsyncThunk('auth/registration', async (user, thunkApi) => {
    try {
        return await authServic.handleRegister(user)
    } catch(error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkApi.rejectWithValue(message)
    }
})

export const login = createAsyncThunk('auth/login', async (user, thunkApi) => {
    try {
        return await authServic.handleLogin(user)
    } catch(error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkApi.rejectWithValue(message)
    }
})

export const logout = createAsyncThunk('auth/logout', async () => {
    await authServic.handleLogout();
})

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = false
        state.message = ''
    }
  },
  extraReducers: (builder) => {
    builder 
        .addCase(registration.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(registration.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.user = action.payload;
        })
        .addCase(registration.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.message = action.payload;
            state.user = null;
        })
        .addCase(login.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(login.fulfilled, (state, action) => {
            console.log(action.payload);
            state.isLoading = false;
            state.isSuccess = true;
            state.user = action.payload;
        })
        .addCase(login.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            state.user = null;
        })
        .addCase(logout.fulfilled, (state) => {
            state.user = null;
        })
    }
})

export const { reset } = authSlice.actions

export default authSlice.reducer