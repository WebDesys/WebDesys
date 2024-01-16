import { ProjectAPI } from "../services/api";
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { apiConnector } from "../services/apiConnector";
import { toast } from 'react-hot-toast';


const initialState = {
    data: []
};


export const getProjects = createAsyncThunk(
    "projects/getProjects",
    async () => {
        try {
            const response = await apiConnector({ method: "GET", url: ProjectAPI.AllClientProject_API })
            return response.data.data;
        } catch (error) {
            toast.error(`Server is Busy right now.`);
        }
    }
)

const projectsSlice = createSlice({
    name: 'projects',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getProjects.fulfilled, (state, action) => {
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


export default projectsSlice.reducer