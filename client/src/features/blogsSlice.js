import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { BlogsAPI } from './../services/api';
import { apiConnector } from "../services/apiConnector";
import { toast } from 'react-hot-toast';

const initialState = {
    data: []
};


export const getBlogs = createAsyncThunk(
    "blogs/getBlogs",
    async () => {
        try {
            const response = await apiConnector({ method: "GET", url: BlogsAPI.AllBlogs_API })
            return response.data.data;
        } catch (error) {
            toast.error(`Server is Busy right now.`);
        }
    }
);

const blogsSlice = createSlice({
    name: 'blogs',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getBlogs.fulfilled, (state, action) => {
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


export default blogsSlice.reducer