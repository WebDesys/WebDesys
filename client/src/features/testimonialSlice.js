import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { apiConnector } from "../services/apiConnector";
import { toast } from 'react-hot-toast';
import { Testimonial } from '../services/api';


const initialState = {
    data: []
}


export const getAllTestimonial = createAsyncThunk(
    "testimonials/getAllTestimonial",
    async () => {
        try {
            const response = await apiConnector({ method: "GET", url: Testimonial.AllTestimonial_API })
            return response.data.data;
        } catch (error) {
            toast.error(`Server is Busy right now.`);
        }
    }
);

const testimonialSlice = createSlice({
    name: 'testimonials',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getAllTestimonial.fulfilled, (state, action) => {
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

export default testimonialSlice.reducer

