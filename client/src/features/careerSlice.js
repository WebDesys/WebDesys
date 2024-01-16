import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { apiConnector } from "../services/apiConnector";
import { toast } from 'react-hot-toast';
import { CareerPage } from '../services/api';


const initialState = {
    data: []
}

export const getAllCareer = createAsyncThunk(
    "careers/getAllCareer",
    async () => {
        try {
            const response = await apiConnector({ method: "GET", url: CareerPage.AllCareer_API })
            return response.data.data;
        } catch (error) {
            toast.error(`Server is Busy right now.`);
        }
    }
);

const careerSlice = createSlice({
    name: 'careers',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getAllCareer.fulfilled, (state, action) => {
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

export default careerSlice.reducer