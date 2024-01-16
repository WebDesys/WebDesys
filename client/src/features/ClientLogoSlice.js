import { ClientsLogo } from "../services/api";
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { apiConnector } from "../services/apiConnector";
import { toast } from 'react-hot-toast';


const initialState = {
    data:[]
};


export const getClientLogo = createAsyncThunk(
    "clientLogo/getClientLogo",
    async () => {
        try {
            const response = await apiConnector({ method: "GET", url: ClientsLogo.AllClientLogo_API })
            return response.data.data;
        } catch (error) {
            toast.error(`Server is Busy right now.`);
        }
    }
)

const clientLogoSlice = createSlice({
    name: 'clientLogo',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getClientLogo.fulfilled, (state, action) => {
            if (action.payload) {
                const data = action.payload;
                if (data) {
                    return {
                        ...state,
                        data: data
                    }
                }
            }
            else {
                return state
            }
        });
    }
});


export default clientLogoSlice.reducer