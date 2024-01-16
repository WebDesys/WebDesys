import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-hot-toast';
import { Admins } from "../services/api"
import { apiConnector } from '../services/apiConnector';
import jwtdecode from 'jwt-decode'

const initialState = {
    token: sessionStorage.getItem('token') || '',
    email: '',
    name: '',
    _id: '',
    role: '',
};

export const loginUser = createAsyncThunk(
    "auth/loginUser",
    async (user, { rejectWithValue }) => {
        try {
            const res = await apiConnector({ method: "POST", url: Admins.LoginAdmin_API, bodyData: { email: user.email, password: user.password } })
            toast.success("Welcome back !");
            sessionStorage.setItem('token', res.data.token);
            return res.data.token;
        } catch (error) {
            toast.error(`Invalid Credentials`);
        }
    }
)

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loadUser(state, action) {
            const token = state.token

            if (token) {
                const user = jwtdecode(token);

                return {
                    ...state,
                    token,
                    name: user.name,
                    email: user.email,
                    _id: user._id,
                    role: user.role,
                };
            }
        },
        logoutUser(state, action) {
            toast.success(`User Logged out`);
            sessionStorage.removeItem('token');
            return {
                ...state,
                email: '',
                name: '',
                _id: '',
                role: '',
                token: '',
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginUser.fulfilled, (state, action) => {
            if (action.payload) {
                const token = action.payload;
                if (token) {
                    const user = jwtdecode(token);
                    return {
                        ...state,
                        name: user.name,
                        email: user.email,
                        _id: user._id,
                        role: user.role,
                        token: token
                    }
                }
            }
            else {
                return state
            }
        });
    }
});

export const { logoutUser, loadUser } = authSlice.actions
export default authSlice.reducer
