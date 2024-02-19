import { createSlice } from "@reduxjs/toolkit";
import { searchByQuery, loadData } from "./searchThunk";

export const searchSlice = createSlice({
    name: 'search',
    initialState: {
        data: {},
        img: {},
        status: 'idle',
        error: null
    },
    reducer: {
        moreInfo: (state, action) => {
            state.img = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loadData.pending, (state, action) => {
            state.status = 'pending';
        })
        .addCase(loadData.fulfilled, (state, action) => {
            state.status = 'fulfilled';
            state.data = action.payload;
        }) 
        .addCase(loadData.rejected, (state, action) => {
            state.status = 'rejected';
            state.error = action.error.message;
        })
        // Cases load data by query
        .addCase(searchByQuery.pending, (state, action) => {
            state.status = 'pending';
        })
        .addCase(searchByQuery.fulfilled, (state, action) => {
            state.status = 'fulfilled';
            state.data = action.payload;
        }) 
        .addCase(searchByQuery.rejected, (state, action) => {
            state.status = 'rejected';
            state.error = action.error.message;
        })
    }
});

export const searchData = (state) => state.search.data;
export const { moreInfo } = searchSlice.actions;
export const image = (state) => state.search.img;
export const searchStatus = (state) => state.search.status;
export default searchSlice.reducer;